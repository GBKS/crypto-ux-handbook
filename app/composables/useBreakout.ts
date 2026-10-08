// Full-bleed blocks (marquee, image grids, flows) stretch to the window edges by
// pulling their wrapper out by half the difference between window and canvas width.
export function useBreakout() {
  const canvas = ref<HTMLElement | null>(null)
  const x = ref<number | null>(null)
  const windowSize = useWindowSize()

  const update = () => {
    if (canvas.value) x.value = (document.documentElement.clientWidth - canvas.value.clientWidth) / 2
  }

  onMounted(update)
  watch(() => windowSize.value.width, update)

  // Until mounted, approximate with viewport units so prerendered HTML is already full-bleed.
  const margins = computed(() => x.value === null
    ? { marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }
    : { marginLeft: -x.value + 'px', marginRight: -x.value + 'px' })

  return { canvas, margins }
}
