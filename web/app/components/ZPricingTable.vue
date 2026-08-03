<template>
  <UPageSection
    id="pricing"
    orientation="horizontal"
    title="Pricing"
    description="Start locally for free, or request access for enterprise self-hosted and managed cloud deployments."
    :links="pricingSectionLinks"
    :ui="{
      container:
        'lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] lg:!items-start gap-10',
      wrapper: 'text-center lg:text-right lg:self-start',
      title: 'text-2xl sm:text-3xl',
      description: 'mx-auto lg:mr-0',
      links: 'justify-center lg:justify-end',
    }"
  >
    <UPricingTable
      :tiers="pricingTiers"
      :sections="pricingSections"
      caption="Compare Zeeq pricing options"
    />
  </UPageSection>
</template>

<script setup lang="ts">
import type { PricingTableSection, PricingTableTier } from '@nuxt/ui'

const pricingSectionLinks = [
  {
    label: 'Docs',
    to: 'https://zeeq.ai/docs/managing-zeeq/local-development',
    icon: 'i-hugeicons-book-open-01',
    color: 'neutral' as const,
    variant: 'ghost' as const,
    size: 'lg' as const,
  },
  {
    label: 'Request access',
    to: 'mailto:hello@zeeq.ai',
    trailingIcon: 'i-lucide-arrow-right',
    size: 'lg' as const,
  },
]

const pricingTiers: PricingTableTier[] = [
  {
    id: 'local',
    title: 'Local self-host',
    description:
      'Open source, AGPLv3; run in your own local environment for personal use.',
    price: 'Free',
    button: {
      label: 'Start locally',
      to: 'https://zeeq.ai/docs/managing-zeeq/local-development',
      variant: 'subtle',
    },
  },
  {
    id: 'enterprise-self-host',
    title: 'Enterprise self-host',
    description: 'For teams that need Zeeq deployed inside their own cloud.',
    price: 'Request',
    button: {
      label: 'Request access',
      to: 'mailto:hello@zeeq.ai',
    },
    highlight: true,
  },
  {
    id: 'enterprise-cloud',
    title: 'Enterprise cloud',
    description: 'For teams that want Zeeq operated as a managed service.',
    price: 'Request',
    button: {
      label: 'Request access',
      to: 'mailto:hello@zeeq.ai',
      color: 'neutral',
    },
  },
]

const pricingSections: PricingTableSection[] = [
  {
    title: 'Deployment',
    features: [
      {
        title: 'Hosting model',
        tiers: {
          local: 'Local machine',
          'enterprise-self-host': 'Your cloud',
          'enterprise-cloud': 'Zeeq managed',
        },
      },
      {
        title: 'Best for',
        tiers: {
          local: 'Evaluation',
          'enterprise-self-host': 'Private infrastructure',
          'enterprise-cloud': 'Managed rollout',
        },
      },
      {
        title: 'License',
        tiers: {
          local: 'AGPLv3',
          'enterprise-self-host': 'Commercial',
          'enterprise-cloud': 'Commercial',
        },
      },
    ],
  },
  {
    title: 'Platform',
    features: [
      {
        title: 'Knowledge layer',
        tiers: {
          local: true,
          'enterprise-self-host': true,
          'enterprise-cloud': true,
        },
      },
      {
        title: 'Code reviews',
        tiers: {
          local: true,
          'enterprise-self-host': true,
          'enterprise-cloud': true,
        },
      },
      {
        title: 'Telemetry dashboards',
        tiers: {
          local: 'Local',
          'enterprise-self-host': 'Enterprise',
          'enterprise-cloud': 'Enterprise',
        },
      },
    ],
  },
  {
    title: 'Support',
    features: [
      {
        title: 'AI readiness assessment',
        tiers: {
          local: '--',
          'enterprise-self-host': 'Hands on workshop',
          'enterprise-cloud': 'Hands on workshop',
        },
      },
      {
        title: 'Access',
        tiers: {
          local: 'Open',
          'enterprise-self-host': 'By request',
          'enterprise-cloud': 'By request',
        },
      },
      {
        title: 'Onboarding',
        tiers: {
          local: 'Docs',
          'enterprise-self-host': 'Dedicated',
          'enterprise-cloud': 'Dedicated',
        },
      },
      {
        title: 'Issues',
        tiers: {
          local: 'GitHub',
          'enterprise-self-host': 'Priority',
          'enterprise-cloud': 'Priority',
        },
      },
    ],
  },
]
</script>
