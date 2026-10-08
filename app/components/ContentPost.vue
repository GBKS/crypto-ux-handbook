<script setup lang="ts">
defineProps<{
  contentId: string
  page: any
}>()
</script>

<template>
  <div :class="['content-post', '-post-' + contentId]">
    <ContentRenderer :value="page" class="article" />
    <NextPrev :content-id="contentId" />
  </div>
</template>

<!--
  Prose styles for the rendered Markdown. They apply to plain elements and to the
  content components alike, so they're deliberately unscoped (scoping would raise
  their specificity above the components' own styles and change the cascade).
  Everything is namespaced under .article.
-->
<style lang="scss">

.article {
	font-size: 22px;
	line-height: 1.45;
	color: #606060;
	@include clearfix;

	// Super general properties.

	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1.2;
        font-weight: 700;
	}

    > h1 {
        font-size: 40px;
		line-height: 1.2;
        font-weight: 900;

        b {
        	// color: #bbbbbb;
        }
    }

    > h2 {
        font-size: 32px;
        letter-spacing: 0.025rem;
    }

	> h3 {
		font-size: 24px;
	}

	> h4 {
		font-size: 22px;
	}

	> p {
		font-size: 22px;
		line-height: 32px;
		color: #606060;

		b,
		strong {
			color: #000000;
			font-weight: 700;
		}

		&.--wide {
			margin-left: -30px;
			margin-right: -30px;
		}

		img {
			&.-right {
				float: right;
			}
		}
	}

	small {
		font-style: italic;
		color: #808080;
	}

	code {
		display: block;
		word-wrap: break-word;
		position: relative;

		&:before {
			display: block;
			content: '';
			position: absolute;
			left: -20px;
			top: 0;
			height: 100%;
			width: 2px;
			border-radius: 2px;
			background-color: #dedede;
		}
	}

	a,
	p a {
		// color: var(--linkHex);
		transition: all 150ms $ease;
		color: $blue;

		&:visited {
			// color: $purple;
		}

		&:hover {
			color: $green;
		}
	}

	.footnote {
		font-style: italic;
	}

	@include media-query(small) {
		font-size: 20px;
		line-height: 30px;

		> p {
			font-size: 20px;
			line-height: 30px;
		}
	}

	> blockquote {
		padding: 30px 0 0 0;
		float: left;
		border-top: 4px solid var(--highlightHex);
		width: 50%;
		font-size: 24px;
		line-height: 32px;
		color: var(--highlightHex);
		display: block;
	}

	> img,
	> .image img,
	> figure img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
		height: auto;
		border-radius: 5px;

		&.-right {
			max-width: calc(50% - 15px);
			height: auto;
			float: right;
			margin-left: 30px;
			margin-bottom: 15px;
		}
	}

	> .image,
	> figure {
		margin-top: 20px;
		box-sizing: border-box;

		&.-third { max-width: 33.33%; }
		&.-fourth { max-width: 25%; }
		&.-half { max-width: 50%; }
		&.-two-thirds { max-width: 66.66%; }

		&.-left {
			float: left;
			padding-right: 30px;
		}

		&.-right {
			float: right;
			padding-left: 30px;
		}

		&.-drop {
			img {
				box-shadow: 0 25px 75px -20px rgba(black, 0.25);
			}
		}

		&.-border {
			position: relative;

			&:after {
				position: absolute;
				display: block;
				content: " ";
				top: 0;
				left: 0;
				right: 32px;
				bottom: 0;
				border: 1px solid rgba(0,0,0,.1);
			}
		}
	}

	figure {
		margin: 0;

		figcaption {
			margin-top: 15px;
			text-align: center;
			font-size: 15px;
			line-height: 1.2;
			font-style: italic;

			small {
				display: inline-block;
				margin-top: 10px;
				color: #bbbbbb;

				a,
				a:visited {
					color: #bbbbbb;

					&:hover {
						color: var(--linkHex);
					}
				}
			}
		}
	}

	// Prevent inlined, floated figures from being "covered" by text, preventing hovers and clicks.
	> figure {
		position: relative;
		z-index: 1;
		padding-bottom: 20px;
	}

	hr {
		display: block;
		@include clearfix;
		width: 100%;
		height: 80px;
		border-width: 0;
		position: relative;

		&:before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		    width: 75px;
		    height: 3px;
			background-color: $yellow;
			border-radius: 10px;
		}

		& + h2 {
			margin-top: 0;
		}

		&.-break {
			height: 1px;

			&:before {
				display: none;
			}
		}
	}


	> ol,
	> ul,
	.toc ol {
		margin-top: 16px;
		padding-left: 40px;

		li {

		}
	}

	> ol {
		counter-reset: list;
	}

	> ol,
	.toc ol {
		list-style-type: none;

		li {
			position: relative;
			counter-increment: list;

			&:before {
				content: counter(list)'.';
				display: block;
				position: absolute;
				left: -40px;
				top: 1px;
				font-size: 15px;
				line-height: 32px;
				color: #aaaaaa;
				font-weight: 700;
				width: 30px;
				text-align: right;
			}
		}
	}

	> ul {
		list-style-type: none;

		li {
			position: relative;

			&:before {
				content: '';
				display: block;
				position: absolute;
				left: -20px;
				top: 14px;
				width: 5px;
				height: 5px;
				border-radius: 2px;
				background-color: #cccccc;
			}
		}
	}

	// General top spacing.

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
        margin: 30px 0 0 0;
	}

    > h1 {
    	margin-top: 0;
    }

	> p {
        margin-top: 30px;
	}

	> blockquote {
		margin: 30px 0 0 0;
	}

	> figure {
		margin-top: 30px;
	}

	code {
		margin: 10px 0 0 0;
	}

	.ann {
		margin-top: 30px;
	}

	.image-grid {
		margin-top: 50px;
		padding-bottom: 20px;
	}

	// Spacing for consecutive elements.

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		& + p {
			margin-top: 10px;
		}
	}

    > h1 {
        & + p,
        & + ul,
        & + ol {
        	margin-top: 30px;
        }
    }

	> p {
		& + p {
			margin-top: 30px;
		}
	}
}

@include media-query(small) {
	.article {
		padding: 45px 15px 45px 15px;
		
		h2 {
			// font-size: 18px;
			// letter-spacing: 0.025rem;
			// text-transform: uppercase;
			// font-weight: 400;
		}

		h1 {
			font-size: 36px;
		}
	}
}

@include media-query(medium-up) {
	.article {
		padding: 45px 30px 45px 30px;
	}
}
</style>
