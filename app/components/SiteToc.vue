<script setup lang="ts">
const navExpanded = useNavExpanded()
</script>

<template>
  <div :class="['site-toc', { '-expanded': navExpanded }]">
    <Transition name="site-toc-transition" :duration="1000" appear>
      <div class="wrap">
        <div class="content">
          <h3>Table of Contents</h3>
          <Toc />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.site-toc {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 0;
	transition: all 500ms $ease;
	background-color: $purple;
	z-index: 1000;
	overflow: hidden;

	&.-expanded {
		height: 100%;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}

	> .wrap {
		padding-left: 20px;
		padding-right: 20px;

		> .content {
			max-width: 600px;
			margin-left: auto;
			margin-right: auto;
			padding-top: 50px;
			padding-bottom: 50px;

			h3 {
				text-transform: uppercase;
				color: rgba(white, 0.25);
			}

			:deep(ol) {
				margin-top: 20px;

				&:first-child {
					counter-reset: list;
				}

				li {
					position: relative;
					counter-increment: list;
					padding-left: 30px;

					&:before {
						content: counter(list)'.';
						display: block;
						position: absolute;
						left: 0;
						top: 8px;
						font-size: 15px;
						line-height: 32px;
						color: rgba(white, 0.25);
						font-weight: 700;
						width: 20px;
						text-align: right;
					}

					a {
						color: white;
						font-size: 24px;
						line-height: 1.75;
						font-weight: 600;

						&.router-link-active,
						&:hover {
							color: $yellow;
							cursor: default;
						}
					}
				}
			}
		}
	}

	@include media-query(small) {
		> .wrap {
			padding-top: 30px;
		}
	}

	@include media-query(medium-up) {
		> .wrap {
			padding-top: 64px;
		}
	}
}
</style>
