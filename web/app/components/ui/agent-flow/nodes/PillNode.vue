<template>
  <div
    class="relative flex h-full w-full items-center justify-center rounded-full border border-default bg-default px-4 text-lg font-medium text-highlighted shadow-sm"
  >
    <div
      class="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-muted"
    >
      <UIcon :name="data.icon" class="h-5 w-5 text-highlighted" />
    </div>

    {{ data.label }}

    <Handle
      v-for="handle in data.handles"
      :id="handle.id"
      :key="handle.id"
      :type="handle.type"
      :position="handle.position"
    />
  </div>
</template>

<script setup lang="ts">
import { Handle } from '@vue-flow/core'
import type { PillNodeData } from '../agentFlowData'

defineProps<{
  data: PillNodeData
}>()
</script>
