<script setup lang="ts">
const ann = inject<AnnContext>('ann')!
const activeIndex = ref<number | null>(null)
const note = ref('')

function coords(item: AnnItem) {
  const [x, y] = item.position.split(',').map(parseFloat)
  return { x: Math.round(x! * 10000) / 100, y: Math.round(y! * 10000) / 100 }
}

const noteClassObject = computed(() => {
  const item = activeIndex.value === null ? null : ann.items.value[activeIndex.value]
  return ['note', item && coords(item).y > 50 ? '-top' : '-bottom']
})

function toggle(index: number) {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    note.value = ann.items.value[index]!.el.querySelector('p')?.innerHTML ?? ''
    activeIndex.value = index
  }
}
</script>

<template>
  <div class="ann-dots">
    <div
      v-for="(item, index) in ann.items.value"
      :key="index"
      :class="['ann-dot', { '-active': index === activeIndex, '-hover': index === ann.hoverIndex.value }]"
      :style="{ left: coords(item).x + '%', top: coords(item).y + '%' }"
    >
      <p
        @mouseenter="ann.hoverIndex.value = index"
        @mouseleave="ann.hoverIndex.value = null"
        @click.prevent="toggle(index)"
      >{{ index + 1 }}</p>
    </div>

    <div v-if="activeIndex !== null" :class="noteClassObject" @click.prevent="activeIndex = null">
      <div class="wrap">
        <p>{{ activeIndex + 1 }}</p>
        <p v-html="note" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ann-dots {
	.ann-dot {
		position: absolute;

		> p {
			transform: translate(-50%, -50%);
			font-size: 15px;
			line-height: 26px;
			width: 30px;
			height: 30px;
			border-radius: 100px;
			text-align: center;
			font-weight: 700;
			background-color: rgba(white, 0.9);
			border: 2px solid var(--linkHex);
			color: var(--linkHex);
			box-shadow: 0 8px 16px -6px rgba(black, 0.25);
			transition: all 150ms $ease;
		}

		&:hover,
		&.-active,
		&.-hover {
			> p {
				background-color: var(--linkHex);
				color: white;
			}
		}
	}

	> .note {
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0;
		background-color: var(--linkHex);
		z-index: 10;
		box-shadow: 0 20px 60px -15px rgba(black, 0.5);

		> .wrap {
			position: relative;
			padding: 12px 15px 12px 55px;

			p {
				font-size: 15px;
				font-weight: 600;

				&:first-child {
					display: block;
					position: absolute;
					left: 15px;
					top: 15px;
					font-size: 15px;
					line-height: 26px;
					width: 30px;
					height: 30px;
					border-radius: 100px;
					text-align: center;
					font-weight: 700;
					border: 2px solid white;
					background-color: white;
					color: var(--linkHex);
				}

				&:nth-child(2) {
					color: white;
				}
			}
		}
	}
}
</style>
