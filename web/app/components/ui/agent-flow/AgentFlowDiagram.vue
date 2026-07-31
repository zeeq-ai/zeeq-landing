<template>
  <div ref="containerRef" class="agent-flow-diagram h-[720px] w-full sm:h-[620px]">
    <VueFlow
      :nodes="agentFlowNodes"
      :edges="agentFlowEdges"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :edges-updatable="false"
      :elements-selectable="false"
      :pan-on-drag="false"
      :zoom-on-scroll="false"
      :zoom-on-pinch="false"
      :zoom-on-double-click="false"
      fit-view-on-init
      :min-zoom="0.1"
      :max-zoom="1"
    >
      <template #node-group="props">
        <GroupNode :data="props.data" />
      </template>
      <template #node-icon="props">
        <IconNode :data="props.data" />
      </template>
      <template #node-pill="props">
        <PillNode :data="props.data" />
      </template>
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
// Vue Flow references:
// - Docs: https://vueflow.dev/
// - Basic usage (nodes/edges/animated prop): https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Basic/Basic.vue
// - Custom node slots (#node-<type>): https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/CustomNode/CustomNode.vue
// - Custom edges + EdgeLabelRenderer: https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Edges/CustomEdge.vue
//   and https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Edges/CustomEdge2.vue
// - Multi-node graph with custom node types (pattern this diagram follows):
//   https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Math/MathExample.vue
//   https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Math/OperatorNode.vue
//   https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Math/ResultNode.vue
//   https://github.com/bcakmakoglu/vue-flow/blob/master/examples/vite/src/Math/initialElements.ts
import { VueFlow, useVueFlow } from '@vue-flow/core'
import '@vue-flow/core/dist/style.css'

import GroupNode from './nodes/GroupNode.vue'
import IconNode from './nodes/IconNode.vue'
import PillNode from './nodes/PillNode.vue'
import { agentFlowEdges, agentFlowNodes } from './agentFlowData'

const containerRef = ref<HTMLElement>()
const { fitView } = useVueFlow()

// fitViewOnInit only fits once on mount; re-fit whenever the container is
// resized so the whole diagram (including text) scales with it instead of
// staying pinned to its initial-load zoom level.
let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    fitView({ padding: 0.1 })
  })
  if (containerRef.value) resizeObserver.observe(containerRef.value)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})
</script>

<style>
.agent-flow-diagram .vue-flow__handle {
  width: 8px;
  height: 8px;
  background: var(--ui-border-accented);
  border: none;
}

.agent-flow-diagram .vue-flow__edge-path {
  stroke: var(--ui-text-dimmed);
  stroke-width: 2.5;
  stroke-dasharray: 8 6;
}

.agent-flow-diagram .agent-flow-edge--inner .vue-flow__edge-path {
  stroke-dasharray: 3 5;
}

.agent-flow-diagram .vue-flow__edge.animated .vue-flow__edge-path {
  animation: agent-flow-dash 1.2s linear infinite;
}

.agent-flow-diagram .vue-flow__arrowhead polyline,
.agent-flow-diagram .vue-flow__arrowhead path {
  stroke: var(--ui-text-dimmed);
  fill: var(--ui-text-dimmed);
}

@keyframes agent-flow-dash {
  to {
    stroke-dashoffset: -22;
  }
}
</style>
