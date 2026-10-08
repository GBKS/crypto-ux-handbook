// Links to the old hash-based URLs (/#/wallets) go to the real page (/wallets).
export default defineNuxtPlugin(() => {
  const match = window.location.hash.match(/^#\/(.*)$/)
  if (match) onNuxtReady(() => navigateTo('/' + match[1], { replace: true }))
})
