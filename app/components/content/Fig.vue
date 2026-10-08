<script setup lang="ts">
const props = defineProps({
  // A missing `drop` must stay undefined (shadow on); a typed boolean prop would default to false.
  drop: { type: [Boolean, String], default: undefined },
  desktop: String,
  tablet: String,
  mobile: String,
  align: String,
})

const classObject = computed(() => {
  const c = ['fig']

  for (const bit of props.desktop?.split(',') ?? []) c.push('-l-' + bit)
  for (const bit of props.tablet?.split(',') ?? []) c.push('-l-' + bit)
  for (const bit of props.mobile?.split(',') ?? []) c.push('-s-' + bit)

  if (props.drop !== false && props.drop !== 'false') c.push('-drop')

  return c
})
</script>

<template>
  <figure :class="classObject">
    <slot />
  </figure>
</template>

<style scoped lang="scss">
.fig {
	@include media-query(small) {
		&.-s-full {
			float: none;
			width: 100%;
		}

		&.-s-half {
			width: 50%;
		}

		&.-s-third {
			width: 33.33%;
		}

		&.-s-left {
			float: right;
			margin-left: 20px;
		}

		&.-s-right {
			float: right;
			margin-left: 20px;
		}
	}

	@include media-query(medium-up) {
		&.-l-full {
			float: none;
			width: 100%;
		}

		&.-l-half {
			width: 50%;
		}

		&.-l-third {
			width: 33.33%;
		}

		&.-l-fourth {
			width: 25%;
		}

		&.-l-fifth {
			width: 20%;
		}

		&.-l-left {
			float: right;
			margin-left: 30px;
		}

		&.-l-right {
			float: right;
			margin-left: 30px;
		}
	}
}
</style>
