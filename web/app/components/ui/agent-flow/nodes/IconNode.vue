<template>
  <div
    class="flex h-full w-full items-center justify-center rounded-2xl border border-default bg-default shadow-sm"
  >
    <img v-if="data.image" :src="data.image" :alt="data.alt" class="h-2/3 w-2/3 object-contain">
    <UIcon v-else-if="data.icon" :name="data.icon" class="h-1/2 w-1/2 text-highlighted" />

    <Handle id="left" type="source" :position="Position.Left" class="opacity-0" />
    <Handle id="right" type="source" :position="Position.Right" class="opacity-0" />
    <Handle id="top" type="target" :position="Position.Top" class="opacity-0" />
    <Handle id="bottom" type="target" :position="Position.Bottom" class="opacity-0" />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { IconNodeData } from '../agentFlowData'

defineProps<{
  data: IconNodeData
}>()
</script>
