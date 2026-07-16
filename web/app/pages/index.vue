<template>
  <div>
    <div class="relative">
      <FlickeringGrid
        class="absolute inset-0 z-0 mask-[radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
        color="#60A5FA"
        :square-size="6"
        :grid-gap="6"
        :max-opacity="0.35"
        :flicker-chance="0.1"
      />
      <UPageHero
        title="The AI Knowledge Layer"
        description="Low-friction, integrated, self-learning knowledge base and code reviews for agent-first teams."
        :links="[
          {
            label: 'Log in',
            to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
          },
          {
            label: 'Get started',
            to: 'https://github.com/nuxt-ui-templates/starter',
            target: '_blank',
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
      </UPageHero>
    </div>

    <UPageSection
      id="features"
      title="Elevated AI coding performance for agentic engineering teams."
      description="Build fast + ship confidently when AI agents follow your best practices for security, scalability, performance, testing, and coding style across any agent and any harness."
      :features="[
        {
          icon: 'i-hugeicons-ai-book',
          title: 'Indexed, searchable knowledge base',
          description:
            'Lets agents efficiently access shared, virtualized document libraries using fully indexed and optimized search retrieval.',
        },
        {
          icon: 'i-hugeicons-target-02',
          title: 'Targeted retrieval',
          description:
            'Efficient, targeted, semantic retrieval of only the relevant sections and code snippets that improve agent performance.',
        },
        {
          icon: 'i-hugeicons-artificial-intelligence-04',
          title: 'Low-friction, faceted code reviews',
          description:
            'Mulit-faceted, agentic code reviews for the AI era that focus on actionable feedback reinforced by the accumulated knowledge base.',
        },
        {
          icon: 'i-hugeicons-chart-02',
          title: 'Full visibility into agent document interaction',
          description:
            'See which documents ansd snippets are actually shaping agent output and your codebase to keep your team aligned with best practices.',
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
            'Designed to be low-friction and operate in agentic teams using heterogenous agent harnesses, AI-enabled runtimes, and LLMs',
        },
      ]"
    />

    <UPageSection
      id="faq"
      title="Frequently asked questions"
      :ui="{ wrapper: 'max-w-2xl mx-auto' }"
    >
      <UAccordion :items="faqItems" :ui="{ label: 'font-bold' }" />
    </UPageSection>

    <UPageSection id="cta">
      <UPageCTA
        title="What if every agent could ship code like your best developers?"
        description="Zeeq is the tool that lets agents write smarter code that understands your enterprise ecosystem and adheres to your standards and best practices so every member of your team can ship confidently with AI."
        variant="subtle"
        :links="[
          {
            label: 'Log in',
            to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
          },
          {
            label: 'Get started',
            to: 'https://github.com/nuxt-ui-templates/starter',
            target: '_blank',
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
      { text: 'Manage code review findings: ', style: 'success' },
      {
        text: 'https://app.zeeq.ai/web/code-reviews',
        style: 'url',
      },
    ],
  },
]

const faqItems = [
  {
    label: 'How is this different from Claude/Codex/Cursor code reviews?',
    content:
      'Zeeq keeps a history of your code reviews so you can choose to ship now, fix later.  Because it keeps a history of PRs and code reviews, you can also see agent performance over time and across developers.',
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
    label: 'How does Zeeq help in enterprise environments?',
    content:
      'Zeeq virtualizes document libraries and makes it easy to manage enterprise-wide knowledge delivered up-to-date, instantly, and without the need for developers to synchronize docs.  It is ideal for micro-services and many-services environments because the virtualized document libraries let one service understand another.',
  },
  {
    label: 'Which tools and coding agents does Zeeq integrate with?',
    content:
      'Zeeq is an MCP server and easily plugs into all of the tools used by your team; it is designed to operate in a heterogeneous environment and works with Claude, Codex, ChatGPT, OpenCode, VS Code Copilot, Cursor, GitHub Copilot Agents, and any surface that supports MCP.',
  },
]
</script>
