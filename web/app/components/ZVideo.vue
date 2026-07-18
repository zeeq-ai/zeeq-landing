<template>
  <video
    class="w-full rounded-lg border border-default"
    :src="src"
    controls
    playsinline
    preload="metadata"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>
