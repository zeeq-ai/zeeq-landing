<template>
  <UPageSection
    :title="title"
    :description="description"
    :features="features"
    :ui="{
      header: 'max-w-5xl mx-auto',
      body: 'max-w-5xl mx-auto w-full',
      features: 'sm:grid-cols-2 lg:grid-cols-2',
    }"
  />
</template>

<script setup lang="ts">
interface SolutionFeature {
  icon: string
  title: string
  description: string
}

defineProps<{
  title: string
  description: string
  features: SolutionFeature[]
}>()
</script>
