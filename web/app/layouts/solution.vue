<template>
  <UPage>
    <slot />

    <UPageSection
      title="Explore solutions"
      description="See how Zeeq fits different AI engineering teams and operating models."
      :ui="{
        header: 'max-w-3xl mx-auto',
        body: 'max-w-5xl mx-auto w-full',
      }"
    >
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <UPageCard
          v-for="solution in solutionItems"
          :key="solution.to"
          v-bind="solution"
        />
      </div>
    </UPageSection>
  </UPage>
</template>

<script setup lang="ts">
import { solutionItems } from '~/utils/solutions'
</script>
