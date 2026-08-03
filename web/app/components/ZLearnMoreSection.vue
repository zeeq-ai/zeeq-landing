<template>
  <UPageSection
    id="screenshots"
    orientation="horizontal"
    reverse
    title="Learn more."
    description="Browse the docs to learn more about Zeeq: philosophy, key features, and how to get started."
    :links="screenshotSectionLinks"
    :ui="{
      root: 'hidden lg:block',
      container:
        'lg:grid-cols-[minmax(0,1.75fr)_minmax(0,0.55fr)] items-center',
      title: 'text-2xl sm:text-3xl',
    }"
  >
    <UPageCard
      variant="subtle"
      :ui="{
        root: 'overflow-hidden',
        container: 'p-0 sm:p-0 gap-0',
        body: 'p-0 overflow-hidden',
      }"
    >
      <div class="relative h-100 w-full overflow-hidden bg-muted">
        <UMarquee
          reverse
          orientation="vertical"
          :overlay="false"
          :ui="{
            root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
          }"
        >
          <img
            v-for="screenshot in marqueeLeftScreenshots"
            :key="screenshot.src"
            :src="screenshot.src"
            :alt="screenshot.alt"
            width="460"
            height="228"
            loading="lazy"
            class="aspect-936/464 border border-default rounded-lg bg-white shadow-lg"
          />
        </UMarquee>

        <UMarquee
          orientation="vertical"
          :overlay="false"
          :ui="{
            root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
          }"
        >
          <img
            v-for="screenshot in marqueeMiddleScreenshots"
            :key="screenshot.src"
            :src="screenshot.src"
            :alt="screenshot.alt"
            width="460"
            height="228"
            loading="lazy"
            class="aspect-936/464 border border-default rounded-lg bg-white shadow-lg"
          />
        </UMarquee>

        <UMarquee
          reverse
          orientation="vertical"
          :overlay="false"
          :ui="{
            root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
          }"
        >
          <img
            v-for="screenshot in marqueeRightScreenshots"
            :key="screenshot.src"
            :src="screenshot.src"
            :alt="screenshot.alt"
            width="460"
            height="228"
            loading="lazy"
            class="aspect-936/464 border border-default rounded-lg bg-white shadow-lg"
          />
        </UMarquee>
      </div>
    </UPageCard>
  </UPageSection>
</template>

<script setup lang="ts">
const screenshotSectionLinks = [
  {
    label: 'GitHub',
    to: 'https://github.com/zeeq-ai/zeeq-app',
    target: '_blank',
    icon: 'i-lucide-github',
    color: 'neutral' as const,
    variant: 'ghost' as const,
    size: 'lg' as const,
  },
  {
    label: 'Explore the docs',
    to: '/docs/getting-started/key-features',
    trailingIcon: 'i-lucide-arrow-right',
    size: 'lg' as const,
  },
]

const marqueeLeftScreenshots = [
  {
    src: '/screens/marquee/activation-filters.jpg',
    alt: 'Activation filters screen',
  },
  {
    src: '/screens/marquee/code-review-agents.jpg',
    alt: 'Code review agents screen',
  },
  {
    src: '/screens/marquee/llm-configuration.jpg',
    alt: 'LLM configuration screen',
  },
]

const marqueeMiddleScreenshots = [
  {
    src: '/screens/marquee/default-templates.jpg',
    alt: 'Default templates screen',
  },
  {
    src: '/screens/marquee/document-telemetry.jpg',
    alt: 'Document telemetry screen',
  },
  {
    src: '/screens/marquee/finding-with-instructions.jpg',
    alt: 'Finding with instructions screen',
  },
  {
    src: '/screens/marquee/findings-cart.jpg',
    alt: 'Findings cart screen',
  },
  {
    src: '/screens/marquee/pr-inbox.jpg',
    alt: 'Pull request inbox screen',
  },
]

const marqueeRightScreenshots = [
  {
    src: '/screens/marquee/code-review-gh.jpg',
    alt: 'GitHub code review screen',
  },
  {
    src: '/screens/marquee/gh-check-runs.jpg',
    alt: 'GitHub check runs screen',
  },
  {
    src: '/screens/marquee/gh-findings.jpg',
    alt: 'GitHub findings screen',
  },
  {
    src: '/screens/marquee/gh-review-metrics.jpg',
    alt: 'GitHub review metrics screen',
  },
]
</script>
