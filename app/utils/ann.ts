import type { Ref } from 'vue'

// Shared state of one <ann> block, provided to its figure, dots and list items.
export interface AnnItem {
  position: string
  el: HTMLElement
}

export interface AnnContext {
  cid?: string
  items: Ref<AnnItem[]>
  hoverIndex: Ref<number | null>
}
