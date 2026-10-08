// Animated window scroll (easeInOutCubic, 500ms), like the old gbks.Scroller.
export function smoothScrollTo(position: number, duration = 500) {
  const start = window.scrollY
  const startTime = performance.now()

  const step = (now: number) => {
    const t = Math.min((now - startTime) / duration, 1)
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    window.scrollTo(0, start + (position - start) * eased)
    if (t < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
