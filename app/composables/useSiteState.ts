// Replaces the old Vuex store: viewport info, menu state and the lightbox image.

export interface LightboxData {
  src: string
  retina?: string
  width: number | string
  height: number | string
  alt?: string
  caption?: string
  title?: string
  link?: string
}

export const useIsMobile = () => useState('isMobile', () => false)
export const useWindowSize = () => useState('windowSize', () => ({ width: 0, height: 0 }))
export const useNavExpanded = () => useState('navExpanded', () => false)
export const useLightbox = () => useState<LightboxData | null>('lightbox', () => null)
