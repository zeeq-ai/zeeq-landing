<template>
  <div class="zsvg-diagram rounded-lg border border-default bg-muted/30 p-4">
    <img
      :src="src"
      :alt="alt"
      class="mx-auto max-w-full dark:invert dark:hue-rotate-180"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>
