<script setup lang="ts">
const props = defineProps({
  // A missing `drop` must stay undefined (shadow on); a typed boolean prop would default to false.
  drop: { type: [Boolean, String], default: undefined },
  count: [Number, String],
  width: [Number, String],
  mobileWidth: [Number, String],
})

const isMobile = useIsMobile()
const { canvas, margins } = useBreakout()

const imageWidth = computed(() => {
  if (isMobile.value) return props.mobileWidth ?? 200
  return props.width ?? 200
})

provide('imageGridWidth', imageWidth)
</script>

<template>
  <div ref="canvas" :class="['image-grid', { '-drop': drop !== false }]">
    <div class="wrap" :style="margins">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-grid {
	> .wrap {
		> .content {
			font-size: 0;
			overflow: hidden;
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			white-space:nowrap;
			text-align: center;
			scroll-snap-type: x mandatory;
			background-color: #f8f8f8;
		}
	}

	&.-drop {
		:deep(figure) {
			img {
				box-shadow: 0 25px 100px -20px rgba(black, 0.35);
			}
		}
	}

	@include media-query(small) {
		> .wrap {
			> .content {
				padding-top: 20px;
				padding-bottom: 30px;
			}
		}
	}

	@include media-query(medium-up) {
		> .wrap {
			> .content {
				padding-top: 50px;
				padding-bottom: 20px;
			}
		}
	}
}
</style>
