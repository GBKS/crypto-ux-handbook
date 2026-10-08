<script setup lang="ts">
const props = defineProps<{
  contentId: string
}>()

const index = computed(() => toc.findIndex(item => item.id === props.contentId))
const previousItem = computed(() => index.value > 0 ? toc[index.value - 1] : undefined)
const nextItem = computed(() => index.value !== -1 && index.value < toc.length - 1 ? toc[index.value + 1] : undefined)
</script>

<template>
  <div :class="['next-prev', { '-hide': !previousItem && !nextItem }]">
    <NuxtLink v-if="previousItem" class="-prev" :to="'/' + previousItem.id">
      <span v-html="icons.rightInCircleFilled" />{{ previousItem.name }}
    </NuxtLink>
    <NuxtLink v-if="nextItem" class="-next" :to="'/' + nextItem.id">
      {{ nextItem.name }}<span v-html="icons.rightInCircleFilled" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.next-prev {
	@include clearfix;
	border-top: 2px solid #f4f4f4;
	margin-top: 30px;
	padding-top: 30px;
	padding-bottom: 60px;

	&.-hide {
		display: none;
	}

	a {
		display: block;
		font-weight: 700;
		font-size: 16px;
		color: #808080;
		transition: all 150ms $ease;

		span {
			display: inline-block;
			vertical-align: middle;

			:deep(svg) {
				width: 18px;
				height: 18px;
				fill: #dedede;
				vertical-align: middle;
				transition: all 150ms $ease;
			}
		}

		&:hover {
			color: var(--linkHex);

			span {
				:deep(svg) {
					fill: var(--linkHex);
				}
			}
		}

		&.-prev {
			float: left;

			span {
				margin-right: 10px;

				:deep(svg) {
					transform: translateY(-2px) rotate(180deg);
				}
			}
		}

		&.-next {
			float: right;

			span {
				margin-left: 10px;

				:deep(svg) {
					transform: translateY(-2px);
				}
			}
		}
	}

	@include media-query(small) {
		margin-left: 15px;
		margin-right: 15px;
	}

	@include media-query(medium-up) {
		margin-left: 30px;
		margin-right: 30px;
	}
}
</style>
