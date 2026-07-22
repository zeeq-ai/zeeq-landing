<template>
  <div>
    <div class="relative">
      <FlickeringGrid
        class="absolute inset-0 z-0 mask-[radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
        color="#c4d814"
        :square-size="6"
        :grid-gap="6"
        :max-opacity="colorMode.value === 'dark' ? 0.35 : 0.85"
        :flicker-chance="0.1"
      />
      <UPageHero
        title="Less Tooling. More Building."
        description="Low friction, high impact, no bullsh*t, practical agent tooling for pragmatic engineering teams."
        :links="[
          {
            label: 'Try for free',
            to: 'https://app.zeeq.ai/web',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
          },
          {
            label: 'Get started',
            to: '/docs/getting-started/introduction',
            icon: 'i-hugeicons-book-open-01',
            size: 'xl',
            color: 'neutral',
            variant: 'subtle',
          },
        ]"
      >
        <template #body>
          <HeroTerminal
            :lines="terminalLines"
            class="max-w-2xl mx-auto w-full"
          />
        </template>

        <template #default>
          <ZPageLogos class="mt-8" />

          <AnimatedTestimonials
            :testimonials="testimonials"
            :autoplay="true"
            :duration="15000"
          />
        </template>
      </UPageHero>
    </div>

    <UPageSection
      id="features"
      title="Low ceremony, high impact tools for agentic teams."
      description="Zeeq plugs into existing workflows and thrives in heterogeneous environments with different models, harnesses, and agent surfaces to lift code quality, consistency, and observability.  No change in workflow, no special harnesses; just low-friction, high impact results."
      :features
    />

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

    <UPageSection
      id="faq"
      title="Frequently asked questions"
      :ui="{ wrapper: 'max-w-2xl mx-auto' }"
    >
      <UAccordion :items="faqItems" :ui="{ label: 'font-bold' }" />
    </UPageSection>

    <UPageSection id="cta">
      <UPageCTA
        title="What if everyone on your team could ship code like your most senior engineers?"
        description="Zeeq is the tool that lets agents write smarter code that bridges a semantic understanding of your product with a technical understanding of your codebase and  your enterprise ecosystem so every member of your team can ship confidently with AI."
        variant="subtle"
        :links="[
          {
            label: 'Try for free',
            to: 'https://app.zeeq.ai/web',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
          },
          {
            label: 'Get started',
            to: '/docs/getting-started/introduction',
            icon: 'i-hugeicons-book-open-01',
            size: 'xl',
            color: 'neutral',
            variant: 'subtle',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import FlickeringGrid from '~/components/ui/flickering-grid/FlickeringGrid.vue'
import AnimatedTestimonials from '~/components/ui/animated-testimonials/AnimatedTestimonials.vue'

const colorMode = useColorMode()

const terminalLines = [
  {
    segments: [
      { text: '$ ', style: 'prompt' },
      { text: 'claude', style: 'cmd' },
      { text: ' "Let\'s build something amazing!"', style: 'flag' },
    ],
  },
  {
    segments: [
      {
        text: '→ Using zeeq to find relevant canonical guidance...',
        style: 'dim',
      },
    ],
  },
  {
    segments: [
      {
        text: '→ Identified key guidance: ',
        style: 'dim',
      },
      { text: '2 documents', style: 'cmd' },
      { text: ', ', style: 'dim' },
      { text: '7 sections', style: 'cmd' },
      { text: ', ', style: 'dim' },
      { text: '4 code snippets', style: 'cmd' },
      { text: ', ', style: 'dim' },
      { text: '15 memories', style: 'cmd' },
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

const screenshotSectionLinks = [
  {
    label: 'GitHub',
    to: 'https://github.com/zeeq-ai/zeeq-landing',
    target: '_blank',
    icon: 'i-lucide-github',
    color: 'neutral' as const,
    variant: 'ghost' as const,
    size: 'lg' as const,
  },
  {
    label: 'Read docs',
    to: '/docs/getting-started/introduction',
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

const faqItems = [
  {
    label:
      "How can I trust that Zeeq isn't just another fad or hype of the week?",
    content:
      'Zeeq addresses three fundamental problems: better context in, checking agent output for adherence, and surfacing the telemetry to prove it.  Because it operates at such a fundamental level, it is perhaps more resistant to being a fad.',
  },
  {
    label: 'How is this different from Claude/Codex/Cursor code reviews?',
    content:
      'Zeeq keeps a history of your code reviews so you can choose to ship now, fix later.  Because it keeps a history of PRs and code reviews, you can also see agent performance over time and across developers.  More importantly, Zeeq incrementally builds a shared world model over time as it processes each PR.',
  },
  {
    label: 'How are Zeeq code reviews better than GitHub code reviews?',
    content:
      'Zeeq rethinks code reviews and focuses the output targeted for both agents and humans.  It provides a "findings cart" that makes it easy to pick-and-choose which fixes to apply and makes it have local agents apply all fixes or just some selected fixes.  Rather than focusing human reviews on code, it focuses on findings instead.',
  },
  {
    label:
      'Why should I serve my documents from Zeeq instead of a local docs directory?',
    content:
      'Serving documents through Zeeq provides visibility into how your context is affecting your code and code reviews that would otherwise not be visible at all. Developers should be writing docs, not code; Zeeq lets you know how well your documents are doing.',
  },
  {
    label: 'How does Zeeq learn about my product?',
    content:
      'Zeeq goes deeper than just a knowledge base: it iteratively learns about your product by looking at the stream of PRs.  Each PR encapsulates a boundary of related code; Zeeq understands this and compiles its own semantic understanding of not just the code, but how the code maps to your product.  This helps guide agents in coding tasks, normalizes behavior, and encourages code reuse.',
  },
  {
    label: 'Does Zeeq copy my entire codebase or use it for training?',
    content:
      'No; Zeeq only sees the code present in each PR and uses that to incrementally learn about your domain, product, and codebase.  PRs are never stored permanently and are deleted as soon as they are processed.',
  },
  {
    label: 'How does Zeeq help in enterprise environments?',
    content:
      'Zeeq virtualizes document libraries and makes it easy to manage enterprise-wide knowledge delivered up-to-date, instantly, and without the need for developers to synchronize docs.  It is ideal for micro-services and many-services environments because the virtualized document libraries let one service understand another.',
  },
  {
    label: 'Which tools and coding agents does Zeeq integrate with?',
    content:
      'Zeeq is an MCP server and easily plugs into all of the tools used by your team; it is designed to operate in a heterogeneous environment and works with Claude, Codex, ChatGPT, OpenCode, VS Code Copilot, Cursor, GitHub Copilot Agents, and any surface that supports MCP.',
  },
  {
    label: 'What teams would benefit the most from Zeeq?',
    content:
      'Zeeq is a powerful tool for solo developers to enterprise teams, but it is especially powerful for agentic teams operating in heterogenous environments (different models, different harnesses, different levels of experience, and different roles (including non-technical)).',
  },
]
</script>
