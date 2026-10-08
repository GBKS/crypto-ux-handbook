<script setup lang="ts">
const isMobile = useIsMobile()
const windowSize = useWindowSize()

let resizeTimer: ReturnType<typeof setTimeout> | undefined

function measure() {
  const width = document.documentElement.clientWidth
  isMobile.value = width < 768
  windowSize.value = { width, height: document.documentElement.clientHeight }
}

function onResize() {
  isMobile.value = document.documentElement.clientWidth < 768
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(measure, 25)
}

onMounted(() => {
  measure()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <div id="container" class="-active">
    <SiteNav />
    <SiteToc />
    <Lightbox />
    <div class="pages">
      <NuxtPage />
    </div>
  </div>
</template>
