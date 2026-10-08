<script setup lang="ts">
const props = defineProps<{
  src: string
  width: number | string
  height: number | string
  alt?: string
  caption?: string
  link?: string
}>()

const ann = inject<AnnContext>('ann')

const formattedCaption = computed(() => props.link
  ? `<a href="${props.link}" target="_blank">${props.caption}</a>`
  : props.caption)
</script>

<template>
  <figure class="ann-figure --large">
    <div class="image">
      <img
        :src="src"
        :width="width"
        :height="height"
        :alt="alt"
      >
      <AnnDots v-if="ann" />
    </div>
    <figcaption v-if="caption" v-html="formattedCaption" />
  </figure>
</template>

<style scoped lang="scss">
.ann-figure {
	.image {
		position: relative;

		img {
			margin: 0;
			display: block;
			margin-left: auto;
			margin-right: auto;
			max-width: 100%;
			height: auto;
			border-radius: 5px;
			box-shadow: 0 25px 75px -20px rgba(black, 0.25);
		}
	}

	figcaption {
		margin-top: 15px;
		text-align: center;
		font-size: 15px;
		font-style: italic;
	}
}
</style>
