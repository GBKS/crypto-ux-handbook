<script setup lang="ts">
const props = defineProps<{
  position: string
}>()

const ann = inject<AnnContext>('ann')
const canvas = ref<HTMLElement | null>(null)

const index = computed(() => ann?.items.value.findIndex(item => item.el === canvas.value) ?? -1)
const hover = computed(() => index.value !== -1 && ann?.hoverIndex.value === index.value)

onMounted(() => {
  if (ann && canvas.value) ann.items.value.push({ position: props.position, el: canvas.value })
})

onBeforeUnmount(() => {
  if (ann) ann.items.value = ann.items.value.filter(item => item.el !== canvas.value)
})

function mouseenter() {
  if (ann) ann.hoverIndex.value = index.value
}

function mouseleave() {
  if (ann) ann.hoverIndex.value = null
}
</script>

<template>
  <li ref="canvas" :class="['ann-list-item', { '-hover': hover }]">
    <p @mouseenter="mouseenter" @mouseleave="mouseleave"><slot /></p>
  </li>
</template>

<style scoped lang="scss">
.ann-list-item {
	position: relative;
	counter-increment: section;

	&:before {
		display: block;
		position: absolute;
		top: 2px;
		left: -40px;
		content: counter(section);
		font-size: 15px;
		line-height: 24px;
		width: 30px;
		height: 30px;
		border-radius: 100px;
		text-align: center;
		font-weight: 700;
		border: 2px solid var(--linkHex);
		color: var(--linkHex);
		box-shadow: 0 8px 16px -6px rgba(black, 0.25);
		transition: all 150ms $ease;
	}

	p {
		font-size: 18px;
	}

	&.-active,
	&.-hover {
		&:before {
			background-color: var(--linkHex);
			color: white;
		}
	}

	& + .ann-list-item {
		margin-top: 20px;
	}
}
</style>
