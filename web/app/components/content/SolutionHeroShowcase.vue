<template>
  <div
    class="mx-auto mt-12 grid w-full max-w-6xl items-center gap-8 text-left lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
  >
    <UPageCard
      variant="subtle"
      :ui="{
        root: 'overflow-hidden',
        container: 'p-0 sm:p-0 gap-0',
        body: 'p-0 overflow-hidden',
      }"
    >
      <div class="relative h-96 w-full overflow-hidden bg-muted sm:h-[28rem]">
        <UMarquee
          orientation="vertical"
          :overlay="false"
          :ui="{
            root: '[--duration:42s] absolute w-[620px] left-1/2 -translate-x-1/2 -top-[430px] h-[1320px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
          }"
        >
          <img
            v-for="screenshot in screenshots"
            :key="screenshot.src"
            :src="screenshot.src"
            :alt="screenshot.alt"
            width="620"
            height="306"
            loading="lazy"
            class="aspect-936/464 rounded-lg border border-default bg-white shadow-xl"
          />
        </UMarquee>
      </div>
    </UPageCard>

    <div class="mx-auto flex max-w-2xl flex-col gap-5 text-center lg:text-left">
      <div>
        <h2 class="text-2xl font-semibold text-highlighted sm:text-3xl">
          {{ showcase.title }}
        </h2>
        <p class="mt-3 text-base text-muted sm:text-lg">
          {{ showcase.summary }}
        </p>
      </div>

      <div class="space-y-4 text-sm leading-7 text-muted sm:text-base">
        <p
          v-for="paragraph in showcase.paragraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ShowcaseContent {
  title: string
  summary: string
  paragraphs: string[]
}

const route = useRoute()

const screenshots = [
  {
    src: '/screens/document-sections.png',
    alt: 'Zeeq document sections and search results',
  },
  {
    src: '/screens/pr-inbox.png',
    alt: 'Zeeq pull request review inbox',
  },
  {
    src: '/screens/telemetry-dash.png',
    alt: 'Zeeq telemetry dashboard',
  },
  {
    src: '/screens/session-telemetry.png',
    alt: 'Zeeq session telemetry dashboard',
  },
  {
    src: '/screens/code-review-agents.png',
    alt: 'Zeeq code review agent configuration',
  },
]

const showcaseByPath: Record<string, ShowcaseContent> = {
  '/solutions/startups': {
    title: 'Keep early AI adoption grounded',
    summary:
      'Shared context, grounded reviews, and telemetry for teams moving quickly with agents.',
    paragraphs: [
      'Startups use agents to compress delivery cycles. Zeeq keeps product decisions and engineering standards indexed outside the repo and available through MCP.',
      'The same guidance that shapes local agent work also powers Zeeq code reviews. That closes the loop between context, generated code, and quality checks.',
      'Telemetry shows which documents, snippets, and review agents affect delivery. Teams see where AI is creating value before quality drift becomes expensive.',
    ],
  },
  '/solutions/private-equity': {
    title: 'Raise the AI engineering baseline across the portfolio',
    summary:
      'Consistent standards, enablement, reviews, and value visibility across different companies.',
    paragraphs: [
      'Portfolio companies start from different AI maturity levels. Zeeq gives each team a practical baseline for agent usage, knowledge retrieval, and review discipline.',
      'Reusable libraries make best-practice rollout concrete. Shared standards can coexist with company-specific architecture, product context, and local workflows.',
      'Review and session telemetry turn adoption into operating signals. Leaders can see where agents are used, which guidance matters, and where companies need enablement.',
    ],
  },
  '/solutions/ai-consultancies': {
    title: 'Package expertise into repeatable delivery',
    summary:
      'Reusable knowledge, grounded reviews, and measurable client operations after delivery.',
    paragraphs: [
      'Consultancies create strong delivery playbooks. Zeeq turns those practices into indexed libraries and dynamic guidance clients can keep using.',
      'Code reviews use the same canonical guidance. Client teams inherit a quality backstop that reflects the consultancy’s recommendations.',
      'Telemetry shows the operating model is still working after handoff. That supports ongoing subscription and revenue-share models with visible client value.',
    ],
  },
  '/solutions/enterprises': {
    title: 'Standardize the floor without flattening the organization',
    summary:
      'Shared standards, cross-service context, review backstops, and value tracking.',
    paragraphs: [
      'Enterprise codebases span many services and standards. Zeeq composes org-wide guidance with service-specific architecture and operational context.',
      'MCP keeps Zeeq independent of the agent harness. Teams keep local workflows while leadership gets a consistent layer for knowledge, reviews, and telemetry.',
      'Strong patterns spread through reusable libraries while local context stays scoped. Session telemetry links AI usage back to delivery outcomes.',
    ],
  },
}

const showcase = computed(() => showcaseByPath[route.path] ?? showcaseByPath['/solutions/enterprises']!)
</script>
