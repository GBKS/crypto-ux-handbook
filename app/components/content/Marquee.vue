<script setup lang="ts">
defineProps<{
  src: string
  retina?: string
  width: number | string
  height: number | string
  alt?: string
  backgroundColor?: string
}>()

const { canvas, margins } = useBreakout()
</script>

<template>
  <div ref="canvas" class="marquee">
    <div class="wrap" :style="{ ...margins, backgroundColor }">
      <div class="content">
        <div class="-copy">
          <h1>The Crypto UX Handbook</h1>
          <p>
            By <a href="http://www.germanysbestkeptsecret.com" target="_blank">Christoph Ono</a>, <a href="https://twitter.com/gbks" target="_blank">@gbks</a>
          </p>
        </div>
        <div class="-pic">
          <img
            :src="src"
            :width="width"
            :height="height"
            :alt="alt"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee {
	// The old renderer wrapped the marquee in a paragraph, whose line-height it inherited.
	line-height: 32px;

	@include media-query(small) {
		line-height: 30px;
	}

	> .wrap {
		> .content {
			padding-left: 15px;
			padding-right: 15px;
			@include clearfix;

			.-copy {
				h1 {
					margin: 0 0 0 0;
					line-height: 1.2;
					font-weight: 900;
					color: white;
				}

				p {
					font-weight: 400;
					font-style: italic;
					color: white;

					a {
						color: white;

						&:hover {
							color: $yellow;
						}
					}
				}
			}

			.-pic {
				img {
					display: inline-block;
					max-width: 100%;
					height: auto;
				}
			}
		}
	}

	@include media-query(small) {
		text-align: center;

		> .wrap {
			> .content {
				padding-top: 40px;
				padding-bottom: 25px;

				.-copy {
					h1 {
						font-size: 32px;
					}

					p {
						margin: 5px 0 0 0;
						font-size: 18px;
					}
				}

				.-pic {
					margin-top: 30px;
				}
			}
		}
	}

	@include media-query(medium-up) {
		> .wrap {
			> .content {
				max-width: 940px;
				margin-left: auto;
				margin-right: auto;
				padding-top: 60px;
				padding-bottom: 40px;
				position: relative;

				.-copy {
					position: absolute;
					left: 0;
					top: 50%;
					width: calc(40% - 20px);
					transform: translate(0, -50%);

					h1 {
						font-size: 48px;
					}

					p {
						margin: 10px 0 0 0;
						font-size: 18px;
					}
				}

				.-pic {
					margin-left: calc(30%);
					text-align: left;
				}
			}
		}
	}

	@include media-query(medium) {
		> .wrap {
			> .content {
				max-width: calc(100% - 40px);

				.-copy {
					width: calc(50% - 20px);
				}

				.-pic {
					margin-left: calc(35%);
				}
			}
		}
	}
}
</style>
