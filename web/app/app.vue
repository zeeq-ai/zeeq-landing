<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const queryDocsNavigation = queryCollectionNavigation as (
  collection: string,
) => Promise<ContentNavigationItem[]>

const stripDocsNavigationRoot = (items: ContentNavigationItem[]) =>
  items.find(item => item.path === '/docs')?.children || items

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

const navLinks = [
  { label: 'Features', to: '/#features' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Get started', to: '/#cta' },
  { label: 'Docs', to: '/docs/getting-started/introduction' },
]

const route = useRoute()

const title = 'zeeq.ai | Agent World Models'

const description =
  'An incremental, self-learning agent world model accumulated from each PR that powers agent-first teams.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})

const { data: navigation } = await useAsyncData<ContentNavigationItem[]>(
  'navigation_docs',
  () => queryDocsNavigation('docs'),
  { transform: stripDocsNavigationRoot }
)

// Docus layout consumers inject this exact string key.
provide('navigation', navigation)
</script>

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
        <nav class="hidden md:flex items-center gap-1">
          <UButton
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            variant="ghost"
            color="neutral"
            :label="link.label"
          />
        </nav>
      </template>

      <template #content>
        <nav class="flex flex-col gap-1 p-4">
          <UButton
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            variant="ghost"
            color="neutral"
            :label="link.label"
            class="justify-start"
          />
        </nav>
      </template>

      <template #right>
        <UContentSearchButton />

        <UColorModeButton />

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
          zeeq.ai © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
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
      <UContentSearch :navigation="navigation" />
    </ClientOnly>
  </UApp>
</template>
