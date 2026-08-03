<template>
  <div class="relative">
    <FlickeringGrid
      class="absolute inset-0 z-0 mask-[radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
      color="#c4d814"
      :square-size="6"
      :grid-gap="6"
      :max-opacity="colorMode.value === 'dark' ? 0.25 : 0.5"
      :flicker-chance="0.05"
    />

    <UPageHero :ui="{ container: 'pt-16 sm:pt-20 lg:pt-24' }">
      <template v-if="slots.headline" #headline>
        <slot name="headline" mdc-unwrap="p" />
      </template>

      <template v-if="slots.title" #title>
        <slot name="title" mdc-unwrap="p" />
      </template>

      <template v-if="slots.description" #description>
        <slot name="description" mdc-unwrap="p" />
      </template>

      <template v-if="slots.links" #links>
        <slot name="links" />
      </template>

      <template #body>
        <slot v-if="slots.body" name="body" />
        <SolutionHeroShowcase />
      </template>

      <template v-if="slots.default" #default>
        <slot />
      </template>

      <template v-if="slots.bottom" #bottom>
        <slot name="bottom" />
      </template>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import FlickeringGrid from '~/components/ui/flickering-grid/FlickeringGrid.vue'

const colorMode = useColorMode()
const slots = useSlots()
</script>
