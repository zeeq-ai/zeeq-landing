<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <img src="/logo.svg" alt="" class="w-auto h-6 shrink-0" />
          <span class="font-logo text-3xl text-highlighted">zeeq.ai</span>
        </NuxtLink>
      </template>

      <template #default>
        <UNavigationMenu
          :items="headerNavItems"
          color="neutral"
          variant="link"
          class="hidden md:flex"
        />
      </template>

      <template #content>
        <UNavigationMenu
          :items="headerNavItems"
          color="neutral"
          variant="link"
          orientation="vertical"
          class="p-4"
        />
      </template>

      <template #right>
        <UContentSearchButton />

        <UColorModeButton />

        <UButton
          to="https://app.zeeq.ai/web"
          icon="i-lucide-log-in"
          aria-label="Login"
          color="neutral"
          variant="ghost"
        />

        <UButton
          to="https://github.com/zeeq-ai/zeeq-app"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain :class="{ 'docs-shell': route.path.startsWith('/docs') }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Zeeq Labs, Inc. © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="footerNavItems" variant="link" />

      <template #right>
        <UButton
          to="mailto:hello@zeeq.ai"
          target="_blank"
          icon="i-lucide-mail"
          aria-label="Email"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://github.com/zeeq-ai/zeeq-app"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>

    <ClientOnly>
      <UContentSearch
        :files="searchFiles"
        :navigation="navigation"
        title="Search documentation"
        description="Search Zeeq's documentation"
      />
    </ClientOnly>
  </UApp>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationMenuItem } from '@nuxt/ui'
import { solutionItems } from '~/utils/solutions'

const queryDocsNavigation = queryCollectionNavigation as (
  collection: string,
) => Promise<ContentNavigationItem[]>

const stripDocsNavigationRoot = (items: ContentNavigationItem[]) =>
  items.find((item) => item.path === '/docs')?.children || items

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

/**
 * Nav items for the header
 */
const headerNavItems: NavigationMenuItem[] = [
  { label: 'Features', to: '/#features' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Get started', to: '/#cta' },
  {
    label: 'Solutions',
    children: solutionItems.map(({ title, ...solution }) => ({
      ...solution,
      label: title,
    })),
  },
  { label: 'Docs', to: '/docs/getting-started/key-features' },
  { label: 'Login', to: 'https://app.zeeq.ai/web' },
]

/**
 * Nav items for the footer
 */
const footerNavItems: NavigationMenuItem[] = [
  {
    label: 'Home',
    href: 'https://zeeq.ai/',
  },
  {
    label: 'Terms of Service',
    href: 'https://zeeq.ai/docs/policy/terms-of-service',
    target: '_blank',
  },
  {
    label: 'Privacy Policy',
    href: 'https://zeeq.ai/docs/policy/privacy-policy',
    target: '_blank',
  },
]

const route = useRoute()

const siteUrl = useRuntimeConfig().public.site.url

const title = 'zeeq.ai | Oversight for Every Agent.'

const description =
  'The observability layer engineering leaders use to see exactly how agents are used across every team, every tool, and every repo — activation, reads, cost, and outcomes, all in one place.'

const ogImage = `${siteUrl}/zeeq-og.png`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: 'Zeeq',
  ogLocale: 'en_US',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Zeeq — oversight for every agent',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

const { data: navigation } = await useAsyncData<ContentNavigationItem[]>(
  'navigation_docs',
  async () => {
    try {
      return await queryDocsNavigation('docs')
    } catch (error) {
      console.error('Failed to load docs navigation', error)
      return []
    }
  },
  {
    default: () => [],
    transform: stripDocsNavigationRoot,
  },
)

// Docus layout consumers inject this exact string key.
provide('navigation', navigation)

const { data: searchFiles } = useLazyAsyncData(
  'search_docs',
  () => queryCollectionSearchSections('docs'),
  { server: false },
)
</script>
