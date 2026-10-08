<script setup lang="ts">
const props = defineProps<{
  data: LightboxData
}>()

const windowSize = useWindowSize()
const loaded = ref(false)
const error = ref(false)

const srcset = computed(() => props.data.retina ? `${props.data.src} 1x, ${props.data.retina} 2x` : undefined)

const imageStyle = computed(() => {
  const padding = 30
  const { width: windowWidth, height: windowHeight } = windowSize.value
  const dataWidth = Number(props.data.width)
  const dataHeight = Number(props.data.height)

  let width = Math.min(windowWidth - padding * 2, dataWidth)
  let height = width * dataHeight / dataWidth

  if (height > (windowHeight - padding * 2)) {
    height = Math.min(windowHeight - padding * 2, dataHeight)
    width = height * dataWidth / dataHeight
  }

  return {
    left: (windowWidth - width) / 2 + 'px',
    top: (windowHeight - height) / 2 + 'px',
    width: width + 'px',
    height: height + 'px',
  }
})
</script>

<template>
  <div :class="['lightbox-image', { '-loaded': loaded, '-error': error }]" :style="imageStyle">
    <img
      :src="data.src"
      :srcset="srcset"
      :width="data.width"
      :height="data.height"
      :alt="data.alt"
      @load="loaded = true"
      @error="error = true"
    >
  </div>
</template>

<style scoped lang="scss">
.lightbox-image {
	position: absolute;

	img {
		width: 100%;
		height: auto;
		border-radius: 5px;
		box-shadow: 0 25px 150px -20px rgba(black, 0.5);
		opacity: 0;
		transition: all 250ms $ease;
	}

	&.-loaded {
		img {
			opacity: 1;
		}
	}
}
</style>
