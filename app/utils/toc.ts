import data from '~~/content/data.json'

export interface TocItem {
  id: string
  name: string
  description: string
}

export const toc: TocItem[] = data.toc

// The first ToC entry ('') is the overview page served at '/'.
export const defaultContentId = 'overview'

export function tocIndex(contentId: string): number {
  return toc.findIndex(item => (item.id || defaultContentId) === contentId)
}
