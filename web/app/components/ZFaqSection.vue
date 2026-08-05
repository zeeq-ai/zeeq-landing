<template>
  <UPageSection
    id="faq"
    title="Frequently asked questions"
    :ui="{ wrapper: 'max-w-2xl mx-auto' }"
  >
    <UAccordion :items="faqItems" :ui="{ label: 'font-bold' }" />
  </UPageSection>
</template>

<script setup lang="ts">
const faqItems = [
  {
    label: 'How is this different from Claude/Codex/Cursor code reviews?',
    content:
      'Zeeq code reviews are connected to your organizational document library and enforces documented rules.  It emits telemetry on the sources that it used to make its decisions.  The code review agents that run in the PR are used locally by all agents and all harnesses, providing consistent feedback across all developers, all harnesses, and all models.',
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
    label: 'Which harnesses and coding agents does Zeeq integrate with?',
    content:
      'Zeeq is an MCP server and easily plugs into all of the tools used by your team; it is designed to operate in a heterogeneous environment and works with Claude, Codex, ChatGPT, OpenCode, VS Code Copilot, Cursor, GitHub Copilot Agents, and any surface that supports MCP.',
  },
  {
    label: 'What teams would benefit the most from Zeeq?',
    content:
      'Zeeq is a powerful tool for solo developers to enterprise teams, but it is especially powerful for agentic teams operating in heterogeneous environments (different models, different harnesses, different levels of experience, and different roles (including non-technical)).',
  },
]
</script>
