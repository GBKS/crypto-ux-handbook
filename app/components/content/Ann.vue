<script setup lang="ts">
// An annotated screenshot: <ann-figure> shows numbered dots for each <ann-list-item>.
const props = defineProps<{
  screensize?: string
  cid?: string
}>()

const context: AnnContext = { cid: props.cid, items: ref([]), hoverIndex: ref(null) }
provide('ann', context)
</script>

<template>
  <div :class="['ann', '-' + (screensize ? screensize : '-large')]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.ann {
	position: relative;
	@include clearfix;

	@include media-query(medium-up) {
		&.-small {
			:deep(figure) {
				float: left;
				width: calc(33.34% - 20px);
			}

			:deep(ol) {
				float: right;
				width: calc(66.66% - 50px);
			}
		}
	}
}
</style>
