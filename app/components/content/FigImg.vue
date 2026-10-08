<script setup lang="ts">
const props = defineProps<{
  src: string
  retina?: string
  width: number | string
  height: number | string
  alt?: string
}>()

const lightbox = useLightbox()
const loaded = ref(false)
const error = ref(false)
const img = ref<HTMLImageElement | null>(null)

// The image may finish loading before hydration, in which case no load event fires.
onMounted(() => {
  if (img.value?.complete) {
    if (img.value.naturalWidth) loaded.value = true
    else error.value = true
  }
})

const classObject = computed(() => ['fig-img', { '-loaded': loaded.value, '-error': error.value }])
const styleObject = computed(() => ({ paddingBottom: (Number(props.height) / Number(props.width) * 100) + '%' }))
const srcset = computed(() => props.retina ? `${props.src} 1x, ${props.retina} 2x` : undefined)

function click() {
  lightbox.value = { src: props.src, retina: props.retina, width: props.width, height: props.height }
}
</script>

<template>
  <div :class="classObject" :style="styleObject">
    <img
      ref="img"
      :src="src"
      :srcset="srcset"
      :width="width"
      :height="height"
      :alt="alt"
      @load="loaded = true"
      @error="error = true"
      @click="click"
    >
  </div>
</template>

<style scoped lang="scss">
.fig-img {
	position: relative;
	background-color: #f8f8f8;
	border-radius: 5px;

	img {
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		width: 100%;
		height: auto;
		opacity: 0;
		border-radius: 5px;
		transition: opacity 250ms $ease;
	}

	&.-loaded {
		img {
			opacity: 1;
		}
	}
}
</style>
