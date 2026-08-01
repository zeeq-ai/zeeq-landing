import { MarkerType, Position } from '@vue-flow/core'
import type { Edge, Node } from '@vue-flow/core'

export interface HandleSpec {
  id: string
  type: 'source' | 'target'
  position: Position
  offset?: string
}

export interface GroupNodeData {
  label?: string
  handles: HandleSpec[]
}

export interface IconNodeData {
  icon?: string
  image?: string
  alt?: string
}

export interface PillNodeData {
  label: string
  icon: string
  handles: HandleSpec[]
}

const GITHUB_SIZE = { width: 220, height: 220 }
const AGENTS_SIZE = { width: 240, height: 220 }
const ZEEQ_SIZE = { width: 400, height: 600 }

const PILL_SIZE = { width: 300, height: 56 }
// b1 (top row) and b4 (bottom row) originate from the pill and point out to
// the boxes; b3 and b2 (middle rows) are reversed and point in from the
// boxes toward the pill. Row order top-to-bottom is the same on both sides.
const ROW_OFFSETS = ['20%', '40%', '60%', '80%']

const ZEEQ_POSITION = { x: 360, y: 260 }
// Center the side boxes on the zeeq box vertically instead of pinning them
// to the top of the canvas.
const SIDE_BOX_Y = ZEEQ_POSITION.y + ZEEQ_SIZE.height / 2 - GITHUB_SIZE.height / 2

export const agentFlowNodes: Node[] = [
  {
    id: 'github',
    type: 'group',
    position: { x: 0, y: SIDE_BOX_Y },
    ...GITHUB_SIZE,
    data: {
      label: 'GitHub',
      handles: [
        { id: 'b1', type: 'source', position: Position.Right, offset: ROW_OFFSETS[0] },
        { id: 'b3', type: 'source', position: Position.Right, offset: ROW_OFFSETS[1] },
        { id: 'b2', type: 'source', position: Position.Right, offset: ROW_OFFSETS[2] },
        { id: 'b4', type: 'source', position: Position.Right, offset: ROW_OFFSETS[3] },
      ],
    } satisfies GroupNodeData,
  },
  {
    id: 'gh-icon',
    type: 'icon',
    parentNode: 'github',
    extent: 'parent',
    position: { x: 50, y: 50 },
    width: 120,
    height: 120,
    data: { icon: 'i-ri-github-fill', alt: 'GitHub' } satisfies IconNodeData,
  },
  {
    id: 'agents',
    type: 'group',
    position: { x: 900, y: SIDE_BOX_Y },
    ...AGENTS_SIZE,
    data: {
      label: 'Coding Agents',
      handles: [
        { id: 'b1', type: 'target', position: Position.Left, offset: ROW_OFFSETS[0] },
        { id: 'b3', type: 'source', position: Position.Left, offset: ROW_OFFSETS[1] },
        { id: 'b2', type: 'source', position: Position.Left, offset: ROW_OFFSETS[2] },
        { id: 'b4', type: 'target', position: Position.Left, offset: ROW_OFFSETS[3] },
      ],
    } satisfies GroupNodeData,
  },
  {
    id: 'a1',
    type: 'icon',
    parentNode: 'agents',
    extent: 'parent',
    position: { x: 32, y: 22 },
    width: 80,
    height: 80,
    data: { icon: 'i-ri-openai-fill', alt: 'OpenAI' } satisfies IconNodeData,
  },
  {
    id: 'a2',
    type: 'icon',
    parentNode: 'agents',
    extent: 'parent',
    position: { x: 128, y: 22 },
    width: 80,
    height: 80,
    data: { icon: 'i-ri-claude-line', alt: 'Anthropic' } satisfies IconNodeData,
  },
  {
    id: 'a3',
    type: 'icon',
    parentNode: 'agents',
    extent: 'parent',
    position: { x: 32, y: 118 },
    width: 80,
    height: 80,
    data: { icon: 'i-ri-copilot-fill', alt: 'GitHub Copilot' } satisfies IconNodeData,
  },
  {
    id: 'a4',
    type: 'icon',
    parentNode: 'agents',
    extent: 'parent',
    position: { x: 128, y: 118 },
    width: 80,
    height: 80,
    data: { icon: 'i-ri-cursor-ai-line', alt: 'Cursor' } satisfies IconNodeData,
  },
  {
    id: 'zeeq',
    type: 'group',
    position: ZEEQ_POSITION,
    ...ZEEQ_SIZE,
    data: { handles: [] } satisfies GroupNodeData,
  },
  {
    id: 'logo',
    type: 'icon',
    parentNode: 'zeeq',
    extent: 'parent',
    position: { x: 165, y: 24 },
    width: 70,
    height: 70,
    data: { image: '/logo.svg', alt: 'Zeeq' } satisfies IconNodeData,
  },
  {
    id: 'b1',
    type: 'pill',
    parentNode: 'zeeq',
    extent: 'parent',
    position: { x: 50, y: 130 },
    ...PILL_SIZE,
    data: {
      label: 'Knowledge Layer',
      icon: 'i-ri-book-ai-line',
      handles: [
        { id: 'left', type: 'target', position: Position.Left },
        { id: 'right', type: 'source', position: Position.Right },
        { id: 'bottom-source', type: 'source', position: Position.Bottom },
      ],
    } satisfies PillNodeData,
  },
  {
    id: 'b3',
    type: 'pill',
    parentNode: 'zeeq',
    extent: 'parent',
    position: { x: 50, y: 250 },
    ...PILL_SIZE,
    data: {
      label: 'Telemetry',
      icon: 'i-ri-broadcast-line',
      handles: [
        { id: 'left', type: 'target', position: Position.Left },
        { id: 'right', type: 'target', position: Position.Right },
        { id: 'top-target', type: 'target', position: Position.Top },
        { id: 'bottom-target', type: 'target', position: Position.Bottom },
      ],
    } satisfies PillNodeData,
  },
  {
    id: 'b2',
    type: 'pill',
    parentNode: 'zeeq',
    extent: 'parent',
    position: { x: 50, y: 370 },
    ...PILL_SIZE,
    data: {
      label: 'Code Reviews',
      icon: 'i-ri-chat-ai-4-line',
      handles: [
        { id: 'left', type: 'target', position: Position.Left },
        { id: 'right', type: 'target', position: Position.Right },
        { id: 'top-source', type: 'source', position: Position.Top },
        { id: 'bottom-target', type: 'target', position: Position.Bottom },
      ],
    } satisfies PillNodeData,
  },
  {
    id: 'b4',
    type: 'pill',
    parentNode: 'zeeq',
    extent: 'parent',
    position: { x: 50, y: 490 },
    ...PILL_SIZE,
    data: {
      label: 'World Model',
      icon: 'i-ri-planet-line',
      handles: [
        { id: 'left', type: 'target', position: Position.Left },
        { id: 'right', type: 'source', position: Position.Right },
        { id: 'top-source', type: 'source', position: Position.Top },
      ],
    } satisfies PillNodeData,
  },
]

const outerEdgeDefaults = {
  type: 'default',
  animated: true,
  markerEnd: MarkerType.ArrowClosed,
}

const innerEdgeDefaults = {
  type: 'smoothstep',
  animated: true,
  markerEnd: MarkerType.ArrowClosed,
  class: 'agent-flow-edge--inner',
}

export const agentFlowEdges: Edge[] = [
  { id: 'github-b1', source: 'github', sourceHandle: 'b1', target: 'b1', targetHandle: 'left', ...outerEdgeDefaults },
  { id: 'b1-agents', source: 'b1', sourceHandle: 'right', target: 'agents', targetHandle: 'b1', ...outerEdgeDefaults },

  { id: 'github-b3', source: 'github', sourceHandle: 'b3', target: 'b3', targetHandle: 'left', ...outerEdgeDefaults },
  { id: 'agents-b3', source: 'agents', sourceHandle: 'b3', target: 'b3', targetHandle: 'right', ...outerEdgeDefaults },

  { id: 'github-b2', source: 'github', sourceHandle: 'b2', target: 'b2', targetHandle: 'left', ...outerEdgeDefaults },
  { id: 'agents-b2', source: 'agents', sourceHandle: 'b2', target: 'b2', targetHandle: 'right', ...outerEdgeDefaults },

  { id: 'github-b4', source: 'github', sourceHandle: 'b4', target: 'b4', targetHandle: 'left', ...outerEdgeDefaults },
  { id: 'b4-agents', source: 'b4', sourceHandle: 'right', target: 'agents', targetHandle: 'b4', ...outerEdgeDefaults },

  { id: 'b1-b3', source: 'b1', sourceHandle: 'bottom-source', target: 'b3', targetHandle: 'top-target', ...innerEdgeDefaults },
  { id: 'b2-b3', source: 'b2', sourceHandle: 'top-source', target: 'b3', targetHandle: 'bottom-target', ...innerEdgeDefaults },
  { id: 'b4-b2', source: 'b4', sourceHandle: 'top-source', target: 'b2', targetHandle: 'bottom-target', ...innerEdgeDefaults },
]
