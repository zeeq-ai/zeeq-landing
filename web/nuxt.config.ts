// https://nuxt.com/docs/api/configuration/nuxt-config
const isLocalStudioEnabled =
  process.env.NODE_ENV === 'development' && process.env.NUXT_DISABLE_STUDIO !== 'true'

type ViteOptimizeDeps = {
  include?: string[]
  exclude?: string[]
}

type ViteConfig = {
  optimizeDeps?: ViteOptimizeDeps
}

type NuxtModuleContext = {
  hook: (name: 'vite:extendConfig', callback: (config: ViteConfig) => void) => void
}

// Nuxt Studio is enabled only for local editing, but its MDC dependency adds
// Vite optimizeDeps entries that are unresolvable in this Docus layer stack.
// Leaving those entries in place can make Vite serve stale optimized deps
// such as clsx, which then breaks client navigation to app/pages/index.vue.
// This local-only module trims the bad hints and opts clsx out of prebundling.
const stabilizeLocalStudioDeps = (_options: unknown, nuxt: NuxtModuleContext) => {
  nuxt.hook('vite:extendConfig', (config) => {
    config.optimizeDeps ||= {}
    config.optimizeDeps.include = (config.optimizeDeps.include || [])
      .filter(id => !id.startsWith('@nuxtjs/mdc > '))
    config.optimizeDeps.exclude = [
      ...new Set([...(config.optimizeDeps.exclude || []), 'clsx']),
    ]
  })
}

export default defineNuxtConfig({
  extends: ['docus'],

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['csharp', 'sql', 'xml', 'toml'],
        },
      },
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'motion-v/nuxt',
    ...(isLocalStudioEnabled ? ['nuxt-studio', stabilizeLocalStudioDeps] : []),
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/docs': { redirect: '/docs/getting-started/introduction', prerender: true },
    '/docs/**': { prerender: true },
  },

  compatibilityDate: '2026-06-30',

  vite: {
    server: {
      cors: {
        origin: ['https://aspire.dev.internal', 'http://aspire.dev.internal'],
      },
      allowedHosts: ['aspire.dev.internal'],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  googleFonts: {
    families: {
      'Fugaz One': true,
      Poppins: [300, 400, 500, 600, 700],
    },
  },

  llms: {
    domain: 'https://zeeq.ai',
  },
})
