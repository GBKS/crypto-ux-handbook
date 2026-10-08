<script setup lang="ts">
const props = defineProps<{
  location?: string
}>()

const isMobile = useIsMobile()

// The overview entry (index 0) is the homepage itself and is left out.
const half = Math.ceil(toc.length / 2) + 1
const firstRow = computed(() => isMobile.value ? toc.slice(1) : toc.slice(1, half))
const secondRow = computed(() => isMobile.value ? [] : toc.slice(half))

const classObject = computed(() => ['toc', props.location ? '-' + props.location : null, { '-columns': !isMobile.value }])
</script>

<template>
  <div :class="classObject">
    <ol>
      <li v-for="item in firstRow" :key="item.id" class="toc-item">
        <NuxtLink :to="'/' + item.id">{{ item.name }}</NuxtLink>
      </li>
    </ol>
    <ol v-if="!isMobile">
      <li v-for="item in secondRow" :key="item.id" class="toc-item">
        <NuxtLink :to="'/' + item.id">{{ item.name }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.toc {
	ol {
		li {
			a {
				display: inline-block;

				&:hover {
					cursor: $green;
				}

				&.router-link-active {
					color: #606060;

					&:hover {
						cursor: default;
					}
				}
			}
		}
	}

	&.-overview {
		ol {
			li {
				a {
					line-height: 60px;
					font-weight: 600;
				}

				&:before {
					font-size: 17px;
					line-height: 60px;
					font-weight: 600;
					top: 1px;
				}

				& + li {
					border-top: 1px solid #ededed;
				}
			}
		}
	}

	&.-columns {
		@include clearfix;

		ol {
			width: calc(50% - 40px);

			&:first-child {
				float: left;
				counter-reset: list;
			}

			&:last-child {
				float: right;
			}
		}
	}
}
</style>
