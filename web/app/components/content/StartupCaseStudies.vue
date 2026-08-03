<template>
  <UPageSection
    :ui="{
      body: 'w-full',
    }"
  >
    <div class="mx-auto w-full max-w-5xl">
      <div class="mx-auto mb-10 max-w-5xl text-center">
        <h2 class="text-4xl font-bold text-highlighted sm:text-5xl">
          Case studies
        </h2>
        <p class="mt-4 text-lg text-muted">
          See how early teams use Zeeq to move fast with agents while keeping
          senior engineering judgement in the loop.
        </p>
      </div>

      <UTabs
        v-model="activeCaseStudyId"
        :items="caseStudyTabs"
        :content="false"
        color="neutral"
        variant="pill"
        size="lg"
        :ui="{
          list: 'w-full',
          trigger: 'grow',
        }"
        class="w-full"
      />

      <div
        class="mt-6 space-y-6 rounded-lg border border-default bg-elevated/40 p-6"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex min-h-10 items-center">
            <WonderlyLogo v-if="activeCaseStudy.id === 'wonderly'" />
            <MotionLogo v-else />
          </div>

          <UBadge
            :label="activeCaseStudy.badge"
            color="neutral"
            variant="soft"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-highlighted">
            {{ activeCaseStudy.title }}
          </h3>

          <p
            v-for="paragraph in activeCaseStudy.paragraphs"
            :key="paragraph"
            class="text-base leading-7 text-muted"
          >
            {{ paragraph }}
          </p>
        </div>

        <USeparator />

        <div
          class="case-study-quote-row flex flex-col gap-6 md:flex-row md:items-start"
        >
          <div
            class="w-full min-w-0 max-w-none text-lg leading-8 font-medium text-highlighted"
          >
            "{{ activeCaseStudy.quote }}"
          </div>

          <div class="w-full min-w-0">
            <UPageCard
              variant="soft"
              :ui="{
                container: 'gap-3 p-4 sm:p-4',
              }"
            >
              <div class="flex items-center gap-3">
                <img
                  :src="activeCaseStudy.person.avatar"
                  :alt="activeCaseStudy.person.name"
                  width="36"
                  height="36"
                  loading="lazy"
                  class="size-9 shrink-0 rounded-full object-cover"
                />

                <div class="min-w-0">
                  <p class="truncate text-sm font-semibold text-highlighted">
                    {{ activeCaseStudy.person.name }}
                  </p>
                  <p class="truncate text-sm text-muted">
                    {{ activeCaseStudy.person.role }}
                  </p>
                </div>
              </div>
            </UPageCard>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

type CaseStudyId = 'wonderly' | 'motion'

interface CaseStudy {
  id: CaseStudyId
  title: string
  badge: string
  paragraphs: string[]
  quote: string
  person: {
    name: string
    role: string
    avatar: string
  }
}

const activeCaseStudyId = ref<CaseStudyId>('wonderly')

const caseStudyTabs: TabsItem[] = [
  {
    label: 'Wonderly',
    value: 'wonderly',
  },
  {
    label: 'Motion',
    value: 'motion',
  },
]

const caseStudies: Record<CaseStudyId, CaseStudy> = {
  wonderly: {
    id: 'wonderly',
    title: 'Exploration speed without lowering the bar',
    badge: '0-1 product pivot',
    paragraphs: [
      'Wonderly used Zeeq while pivoting from 0 to 1, where the team needed to explore quickly without letting fast agent output dilute code standards. Product decisions, architectural constraints, and review learnings stayed available as shared context instead of living only in individual sessions.',
      'Code reviews were backed by the same knowledge layer the agents used during implementation, which helped keep experiments aligned with the desired shape of the product. Session and review telemetry gave the team visibility into which areas were driving discovery, which features were moving toward product-market fit, and where stronger guidance was needed.',
    ],
    quote:
      "Wonderly's team of 40+ engineers depend on Zeeq to move fast while keeping quality and consistency high. Most importantly: I can see the signals.  Nothing else does this.",
    person: {
      name: 'Chander Ramesh',
      role: 'CTO',
      avatar: '/people/chander-ramesh.png',
    },
  },
  motion: {
    id: 'motion',
    title: 'A platform transition guided by senior engineers',
    badge: 'Platform migration',
    paragraphs: [
      'Motion used Zeeq to help move from TypeScript and Nest.js toward C# and .NET web APIs while the team was still building fluency in the new stack. Shared standards gave agents and developers a reliable baseline for architecture, naming, testing, and implementation patterns across the transition.',
      'That knowledge layer let senior engineers guide the migration without becoming a bottleneck for every implementation detail, even when most developers did not know C# and none knew F#. Developers could move with more confidence, while reviews and telemetry helped reinforce the standards the team wanted to carry forward.',
    ],
    quote:
      'Zeeq let me add my deep knowledge of C# and .NET into every prompt and every harness as we made the transition to make every dev productive.',
    person: {
      name: 'Charles Chen',
      role: 'Principal Engineer',
      avatar: '/people/charles-chen.jpg',
    },
  },
}

const activeCaseStudy = computed<CaseStudy>(
  () => caseStudies[activeCaseStudyId.value],
)
</script>

<style scoped>
@media (min-width: 768px) {
  .case-study-quote-row > :first-child {
    flex: 2 1 0;
  }

  .case-study-quote-row > :last-child {
    flex: 1 1 0;
  }
}
</style>
