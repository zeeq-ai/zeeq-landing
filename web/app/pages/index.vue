<template>
  <div>
    <div class="relative">
      <FlickeringGrid
        class="absolute inset-0 z-0 mask-[radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
        color="#c4d814"
        :square-size="6"
        :grid-gap="6"
        :max-opacity="colorMode.value === 'dark' ? 0.25 : 0.5"
        :flicker-chance="0.05"
      />
      <UPageHero
        title="Less Tooling. More Building."
        description="Practical agent ops and observability for pragmatic, enterprise AI engineering teams."
        :links="[
          {
            label: 'Explore the docs',
            to: '/docs/getting-started/key-features',
            icon: 'i-hugeicons-book-open-01',
            size: 'xl',
            color: 'neutral',
            variant: 'subtle',
          },
          {
            label: 'Request pilot',
            to: 'https://app.zeeq.ai/web',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
          },
        ]"
        :ui="{ container: 'pt-16 sm:pt-20 lg:pt-24' }"
      >
        <template #body>
          <HeroCarousel
            :items="carouselItems"
            class="mx-auto w-full max-w-6xl"
          />
        </template>

        <template #default>
          <ZPageLogos class="mt-8" />

          <ClientOnly>
            <AnimatedTestimonials
              :testimonials="testimonials"
              :autoplay="true"
              :duration="15000"
            />
            <template #fallback>
              <div
                class="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12"
              >
                <div class="grid grid-cols-1 gap-20 md:grid-cols-2">
                  <img
                    :src="testimonials[0]!.image"
                    :alt="testimonials[0]!.name"
                    width="500"
                    height="500"
                    class="size-full rounded-3xl object-cover object-center"
                  />
                  <div class="flex flex-col justify-center py-4">
                    <h3 class="text-2xl font-bold text-black dark:text-white">
                      {{ testimonials[0]!.name }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-neutral-500">
                      {{ testimonials[0]!.designation }}
                    </p>
                    <p class="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                      {{ testimonials[0]!.quote }}
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>
        </template>
      </UPageHero>
    </div>

    <UPageSection
      id="ecosystem"
      title="Every team, any agent, one enterprise layer"
      description="Zeeq is a shared, central knowledge and telemetry layer for every team in your organization.  Zeeq code reviews reference the same knowledge base powering agents and backstops quality regressions before they merge while building an emergent world model from every PR.  From vibe coding → agentic engineering."
    >
      <template #body>
        <ClientOnly>
          <AgentFlowDiagram />
          <template #fallback>
            <div class="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
              <UPageCard
                v-for="group in agentFlowFallbackGroups"
                :key="group.title"
                :title="group.title"
                :description="group.description"
                variant="subtle"
              />
            </div>
          </template>
        </ClientOnly>
      </template>
    </UPageSection>

    <UPageSection
      id="setup"
      title="Configure in one line"
      description="Get up and running in just a few minutes with a single line of configuration"
      :links="[
        {
          label: 'Learn about configuration',
          to: '/docs/getting-started/connecting-agents',
          icon: 'i-hugeicons-book-open-01',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    >
      <template #body>
        <HeroTerminal :lines="terminalLines" class="max-w-2xl mx-auto w-full" />
      </template>
    </UPageSection>

    <UPageSection
      id="features"
      title="Knowledge base + code reviews + world model + observability"
      description='Zeeq helps enterprise teams move faster with AI agents while producing higher quality code by combining a canonical knowledge base,  mixture-of-experts code reviews, a "world model" memory system (2026 Q3), and the telemetry to prove that it works.'
      :features
    />

    <ZLearnMoreSection />

    <ZFaqSection />

    <ZPricingTable />

    <UPageSection id="cta">
      <UPageCTA
        title="Guide every agent, every team towards better output with the observability to prove it."
        description="Zeeq is the tool that lets agents write smarter code that bridges a semantic understanding of your product with a technical understanding of your codebase and your enterprise ecosystem so every member of your team can ship confidently with AI, fully backed by the telemetry to prove it."
        variant="subtle"
        :links="[
          {
            label: 'Explore the docs',
            to: '/docs/getting-started/key-features',
            icon: 'i-hugeicons-book-open-01',
            size: 'xl',
            color: 'neutral',
            variant: 'subtle',
          },
          {
            label: 'Request pilot',
            to: 'https://app.zeeq.ai/web',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import FlickeringGrid from '~/components/ui/flickering-grid/FlickeringGrid.vue'
import AnimatedTestimonials from '~/components/ui/animated-testimonials/AnimatedTestimonials.vue'
import AgentFlowDiagram from '~/components/ui/agent-flow/AgentFlowDiagram.vue'

const colorMode = useColorMode()

const agentFlowFallbackGroups = [
  {
    title: 'Agent harnesses',
    description:
      'Codex, Claude Code, Cursor, and OpenCode connect through the same enterprise layer.',
  },
  {
    title: 'Zeeq platform',
    description:
      'Knowledge, reviews, telemetry, and skills stay consistent across every team.',
  },
  {
    title: 'Engineering systems',
    description:
      'GitHub, documentation, traces, and metrics feed back into agent workflows.',
  },
]

const carouselItems = [
  {
    title: 'Token and cost visibility per developer',
    narrative:
      'Track token usage and approximate spend by model, by user, and over time across every harness your team runs — Claude, Codex, Cursor, and anything else that speaks MCP.  Link token spend to actual value creation by feature.',
    description:
      'Where tokens are being spent, which features are being built, by whom',
    src: '/screens/carousel/session-token-telemetry.webp',
    alt: 'Zeeq session telemetry showing token usage and cost by model and user',
  },
  {
    title: 'A knowledge layer that proves its worth',
    narrative:
      'Serve canonical guidance from composable, virtualized libraries instead of scattered docs directories, then see exactly which documents, sections, and snippets agents actually read.  Instantly deploy docs enterprise wide without manual synchronization.',
    description:
      'Insight and visibility into which inputs shape agent output and code quality',
    src: '/screens/carousel/library-level-telemetry.webp',
    alt: 'Zeeq library metrics showing most-read documents, sections, and snippets',
  },
  {
    title: 'Agent operations at a glance',
    narrative:
      'One dashboard for tool calls, knowledge base reads, review volume, and open critical findings — so you can tell whether your AI engineering practice is working today, not next quarter.',
    description: 'Zeeq tool calls, knowledge reads, and reviews in one view',
    src: '/screens/carousel/topline-telemetry.webp',
    alt: 'Zeeq overview dashboard with tool call, knowledge base, and review metrics',
  },
  {
    title: 'Mixture-of-experts reviewers you control',
    narrative:
      'No mystery prompts that give low signals or over-corrects on code reviews.  Ship fast with tuned reviewer personas for logic, structure, performance, testing, and technique. Edit them, test them, and roll them out to every repo.',
    description:
      'Mixture-of-experts code review agents guided by the knowledge layer',
    src: '/screens/carousel/code-review-agents.webp',
    alt: 'Zeeq reviewer agent configuration with prompt editor and model tier',
  },
  {
    title: 'Code reviews built for agents...and humans',
    narrative:
      'Every pull request gets a grounded review with findings sorted by severity, paired with the fix, and cites your knowledge base docs. Add what matters to a findings cart and let your agent apply it...or let your agent run the review in-loop before the PR.',
    description:
      'Findings, not diffs, grounded by and citing the knowledge layer',
    src: '/screens/carousel/code-review-inbox.webp',
    alt: 'Zeeq code review inbox showing findings for a pull request',
  },
  {
    title: 'Findings telemetry across every repo',
    narrative:
      'Break findings down by severity, repository, author, and origin to see where quality is slipping enterprise wide across all engineering teams and projects; see where code quality and agent output requires attention to stay on track.',
    description: 'Severity and volume trends across your whole org',
    src: '/screens/carousel/code-review-findings-telemetry.webp',
    alt: 'Zeeq code review telemetry charting findings by severity, repository, and origin',
  },
]

const terminalLines = [
  {
    segments: [
      { text: '$ ', style: 'prompt' },
      { text: 'claude', style: 'cmd' },
      { text: ' mcp add --scope project --transport http', style: 'dim' },
      {
        text: ' zeeq https://app.zeeq.ai/mcp',
        style: 'flag',
      },
    ],
  },
  {
    segments: [
      {
        text: '→ Authenticating with zeeq...',
        style: 'dim',
      },
    ],
  },
  {
    segments: [
      {
        text: '→ Zeeq MCP ready! ',
        style: 'dim',
      },
      { text: '35 documents', style: 'cmd' },
      { text: ', ', style: 'dim' },
      { text: '5 review agents', style: 'cmd' },
      { text: ', ', style: 'dim' },
      { text: '78 memory clusters ', style: 'cmd' },
    ],
  },
  {
    segments: [
      {
        text: '→ Combobulating your feature following guidance...',
        style: 'dim',
      },
    ],
  },
  {
    segments: [
      { text: '→ Your new feature is ready', style: 'dim' },
      { text: ' ✓', style: 'success' },
    ],
  },
  {
    segments: [
      { text: '→ Using zeeq code review with guidance...', style: 'dim' },
    ],
  },
  {
    segments: [
      { text: '→ Reviewer findings: ', style: 'dim' },
      { text: '1 CRITICAL, 1 MAJOR, 2 MINOR', style: 'metric-good' },
      { text: '. ', style: 'dim' },
      { text: 'Here are the recommendations... ', style: 'dim' },
    ],
  },
  {
    segments: [
      { text: '→ All findings addressed!', style: 'dim' },
      { text: ' ✓', style: 'success' },
    ],
  },
  {
    segments: [
      { text: '→ Session telemetry recorded!', style: 'dim' },
      { text: ' ✓', style: 'success' },
    ],
  },
  {
    segments: [
      { text: 'Manage code review findings: ', style: 'success' },
      {
        text: 'https://app.zeeq.ai/web/code-reviews',
        style: 'url',
      },
    ],
  },
]

const testimonials = [
  {
    quote:
      "I'm a believer because I've experienced it.  This is a boiling frog type situation - your code quality will slowly get worse over time and it'll be terrible without it.",
    name: 'Chander Ramesh',
    designation: 'CTO at Motion',
    image: '/people/chander-ramesh.png',
  },
  {
    quote:
      'I do NOT have an engineering background so the curated agents are really doing some heavy lifting for me. The reviews have given me a lot more confidence in the code my agents are writing.',
    name: 'Gary Chao',
    designation: 'Head of Ops at Bullship',
    image: '/people/gary-chao.png',
  },
  {
    quote:
      'Agents are simple tools: text in, text out. Zeeq optimizes the "text in", verifies "text out", and has the signals that prove it works.',
    name: 'Charles Chen',
    designation: 'Founder at Zeeq (ex-Motion)',
    image: '/people/charles-chen.jpg',
  },
  {
    quote:
      'Honestly I’ve never enjoyed shipping code more than I do right now with all our agentic coding tools.',
    name: 'Tom Österlund',
    designation: 'Senior Engineer at Wonderly',
    image: '/people/tom-osterlund.png',
  },
  {
    quote:
      "Zeeq has had a large role in keeping agentic coding in Wonderly grounded in the same knowledge and genuinely kept the codebase workable across engineering teams, can't imagine working without it.",
    name: 'Lefan Tan',
    designation: 'Senior Engineer at Wonderly',
    image: '/people/lefan-tan.png',
  },
]

const features = [
  {
    icon: 'i-icon-park-outline-nine-points-connected',
    title: 'Indexed, chunked, searchable knowledge base',
    description:
      'Use a shared knowledge base that grounds both code review and code generation, ensuring that agents are following best practices and enterprise standards.',
  },
  {
    icon: 'i-hugeicons-artificial-intelligence-04',
    title: 'Mixture-of-experts code reviews',
    description:
      'Use out-of-the-box and easy to tune agent code reviewers that are grounded in the same knowledge base and used consistently in your coding loop and in your PR.',
  },
  {
    icon: 'i-hugeicons-target-02',
    title: 'Targeted retrieval',
    description:
      'Efficient, targeted, semantic retrieval of only the relevant sections of knowledge and code snippets that improve agent adherence and performance.',
  },
  {
    icon: 'i-hugeicons-chart-02',
    title: 'High visibility and observability of outcomes',
    description:
      'See that text in your corpus is actually shaping agent output and your codebase to keep your team aligned with best practices.',
  },
  {
    icon: 'i-hugeicons-ai-magic',
    title: 'Iteratively self-learning',
    description:
      'Compiles a deep, semantic understanding of your product, your features, your code as it reviews code so agents actually know what to build',
  },
  {
    icon: 'i-hugeicons-user-group-02',
    title: 'Built for teams',
    description:
      'Designed to be low-ceremony, easy to adopt, and operate in agentic teams that are using heterogenous agent harnesses, AI-enabled runtimes, and LLMs',
  },
]

</script>
