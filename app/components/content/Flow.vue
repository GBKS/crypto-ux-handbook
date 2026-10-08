<script setup lang="ts">
const { canvas, margins } = useBreakout()
</script>

<template>
  <div ref="canvas" class="flow">
    <div class="wrap" :style="margins">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
// The <ol> and its steps come from the Markdown, so they're styled through :deep().
.flow {
	margin-top: 30px;

	> .wrap {
		background-color: #f8f8f8;
	}

	:deep(ol) {
		counter-reset: steps;
		list-style-type: none;

		li {
			counter-increment: steps;
			position: relative;

			&:before {
				display: block;
				content: counter(steps);
				font-size: 15px;
				line-height: 32px;
				width: 34px;
				height: 34px;
				color: white;
				border-radius: 100px;
				text-align: center;
				font-weight: 700;
				background-color: $green;
			}

			.arrow {
				position: absolute;

				svg {
					width: 18px;
					height: 18px;
					fill: #bbbbbb;
					stroke: #bbbbbb;
				}
			}

			h4 {
				margin: 15px 0 0 0;
				white-space: normal;
				text-align: left;
			}

			p {
				margin: 5px 0 0 0;
				font-size: 17px;
				white-space: normal;
				text-align: left;
			}
		}
	}

	@include media-query(small) {
		> .wrap {
			padding-top: 20px;
			padding-bottom: 30px;
			padding-left: 20px;
			padding-right: 20px;
		}

		:deep(ol) {
			li {
				.arrow {
					left: 8px;
					bottom: -45px;
				}

				h4 {
					font-size: 22px;
				}

				&:last-child {
					.arrow {
						display: none;
					}
				}

				& + li {
					margin-top: 60px;
				}
			}
		}
	}

	@include media-query(medium-up) {
		> .wrap {
			padding-top: 50px;
			padding-bottom: 20px;
		}

		:deep(ol) {
			font-size: 0;
			overflow: hidden;
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			white-space:nowrap;
			text-align: center;
			scroll-snap-type: x mandatory;
			padding: 0 30px 30px 30px;

			li {
				display: inline-block;
				vertical-align: top;
				width: 250px;
				scroll-snap-align: center;
				position: relative;

				.arrow {
					top: 9px;
					right: 0;
				}

				&:last-child {
					.arrow {
						display: none;
					}
				}

				& + li {
					padding-left: 20px;
				}
			}
		}
	}
}
</style>
