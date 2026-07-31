<template>
  <div
    class="h-full w-full rounded-2xl border-2 border-default bg-default/60 dark:bg-default/20"
  >
    <span
      v-if="data.label"
      class="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap text-lg font-semibold text-highlighted"
    >
      {{ data.label }}
    </span>

    <Handle
      v-for="handle in data.handles"
      :id="handle.id"
      :key="handle.id"
      :type="handle.type"
      :position="handle.position"
      :style="handleStyle(handle)"
    />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { GroupNodeData, HandleSpec } from '../agentFlowData'

defineProps<{
  data: GroupNodeData
}>()

function handleStyle(handle: HandleSpec) {
  if (!handle.offset) return undefined
  if (handle.position === Position.Top || handle.position === Position.Bottom) {
    return { left: handle.offset }
  }
  return { top: handle.offset }
}
</script>
