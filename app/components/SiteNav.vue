<script setup lang="ts">
const navExpanded = useNavExpanded()
const route = useRoute()

// Rendered only once the app is running, so the nav animates in like the original.
const mounted = ref(false)
onMounted(() => { mounted.value = true })

watch(() => route.path, () => { navExpanded.value = false })

const logo = icons.logo + '<span><b>Crypto UX</b><br/>Handbook</span>'
</script>

<template>
  <div :class="['site-nav', { '-expanded': navExpanded }]">
    <Transition name="site-nav-transition" :duration="1000" appear>
      <div v-if="mounted" class="wrap">
        <div class="content">
          <NuxtLink to="/" class="logo" v-html="logo" />
          <a href="#" class="menu" @click.prevent="navExpanded = !navExpanded"><p /></a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.site-nav {
	> .wrap {
		background-color: $purple;
		position: relative;
		z-index: 1001;
		box-shadow: 0 1px 0 rgba(white, 0.2);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		> .content {
			> a.logo {
				display: inline-block;
				padding: 10px;
				font-size: 16px;
				line-height: 1;
				font-weight: 900;
				color: white;

				:deep(svg) {
					width: 28px;
					height: 28px;
					fill: white;
					vertical-align: middle;
				}

				:deep(span) {
					margin-left: 10px;
					display: inline-block;
					vertical-align: middle;
					text-transform: uppercase;
					font-weight: 500;

					b {
						font-weight: 900;
					}
				}
			}

			> a.menu {
				display: block;
				position: absolute;

				p {
					position: relative;
					width: 30px;
					height: 30px;

					&:before,
					&:after {
						display: block;
						width: 10px;
						height: 2px;
						background-color: white;
						position: absolute;
						top: 50%;
						left: 0;
						width: 100%;
						content: '';
						border-radius: 10px;
						transition: all 350ms $ease;
					}

					&:before {
						transform: translateY(-6px);
					}

					&:after {
						transform: translateY(4px);
					}
				}
			}
		}
	}

	&.-expanded {
		> .wrap {
			> .content {
				> a.menu {
					p {
						&:before {
							transform: translateY(-1px) rotate(-45deg);
						}

						&:after {
							transform: translateY(-1px) rotate(225deg);
						}
					}
				}
			}
		}
	}

	&.-expanded {
		> .wrap {
			> .content {
				> a.logo {
					z-index: 69;
					position: relative;

					:deep(svg) {
						fill: white;
					}
				}

				> a.menu {
					z-index: 70;
				}
			}
		}
	}

	@include media-query(small) {
		height: 53px;

		> .wrap {
			padding: 0 5px;

			> .content {
				> a.menu {
					right: 20px;
					top: 12px;
				}
			}
		}
	}

	@include media-query(medium-up) {
		height: 63px;

		> .wrap {
			padding: 5px 10px;

			> .content {
				> a.menu {
					right: 30px;
					top: 16px;
				}
			}
		}
	}
}

.site-nav-transition-enter-active {
	> .content {
		> a {
			transition: all 600ms $easeOutCubic;
		}
	}
}

.site-nav-transition-enter-from {
	> .content {
		> a {
			opacity: 0;
			transform: translateY(-20px);
		}
	}
}

.site-nav-transition-enter-to {
	> .content {
		> a {
			opacity: 1;
			transform: translateY(0px);
		}
	}
}
</style>
