<script setup lang="ts">
const props = defineProps<{
  src: string
  width: number | string
  height: number | string
  alt?: string
  caption?: string
  title?: string
  link?: string
}>()

const gridWidth = inject<Ref<number | string>>('imageGridWidth', ref(200))
const lightbox = useLightbox()
const loaded = ref(false)
const error = ref(false)
const img = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (img.value?.complete) {
    if (img.value.naturalWidth) loaded.value = true
    else error.value = true
  }
})

const classObject = computed(() => ['image-grid-img', { '-loaded': loaded.value, '-error': error.value }])

const styleObject = computed(() => {
  let width = String(gridWidth.value)
  if (!width.includes('%')) width += 'px'
  return { width }
})

const imageStyleObject = computed(() => ({ paddingBottom: (Number(props.height) / Number(props.width) * 100) + '%' }))

const formattedCaption = computed(() => {
  let result = props.caption ?? ''

  if (props.link) {
    if (props.title) {
      result += `<br/><small><a href="${props.link}" target="_blank">${props.title}</a></small>`
    } else {
      result = `<a href="${props.link}" target="_blank">${props.caption}</a>`
    }
  }

  return result
})

function click() {
  lightbox.value = {
    src: props.src,
    width: props.width,
    height: props.height,
    caption: props.caption,
    title: props.title,
    link: props.link,
  }
}
</script>

<template>
  <figure :class="classObject" :style="styleObject">
    <div class="image" :style="imageStyleObject">
      <img
        ref="img"
        :src="src"
        :width="width"
        :height="height"
        :alt="alt"
        @load="loaded = true"
        @error="error = true"
        @click="click"
      >
    </div>
    <figcaption v-if="caption" v-html="formattedCaption" />
  </figure>
</template>

<style scoped lang="scss">
.image-grid-img {
	display: inline-block;
	vertical-align: top;
	padding-bottom: 20px;
	scroll-snap-align: center;

	.image {
		position: relative;
		background-color: #f8f8f8;
		border-radius: 5px;

		img {
			position: absolute;
			left: 0;
			top: 0;
			display: block;
			margin: 0;
			width: 100%;
			height: auto;
			opacity: 0;
			border-radius: 5px;
			transition: opacity 250ms $ease;
		}
	}

	figcaption {
		margin-top: 25px;
		text-align: center;
		font-size: 15px;
		font-style: italic;
		white-space: normal;
	}

	&:first-child {
		margin-left: 20px;
	}

	&:last-child {
		margin-right: 20px;
	}

	& + .image-grid-img {
		margin-left: 20px;
	}

	&.-loaded {
		.image {
			img {
				opacity: 1;
			}
		}
	}
}
</style>
