<template>
  <ol class="ann-list">
    <slot />
  </ol>
</template>

<style scoped lang="scss">
.ann-list {
	list-style-type: none;
	counter-reset: section;

	@include media-query(small) {
		display: none;
	}
}
</style>
