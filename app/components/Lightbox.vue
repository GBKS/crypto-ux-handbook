<script setup lang="ts">
const lightbox = useLightbox()
</script>

<template>
  <div :class="['lightbox', { '-active': lightbox }]" @click="lightbox = null">
    <Transition name="lightbox-transition" :duration="1000" appear>
      <div v-if="lightbox" class="wrap">
        <div class="content">
          <LightboxImage :data="lightbox" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.lightbox {
	display: none;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1001;

	&.-active {
		display: block;
		width: 100%;
		height: 100%;
		background-color: rgba(black, 0.85);
	}

	> .wrap {
		height: 100%;

		> .content {
			height: 100%;
		}
	}
}

.lightbox-transition-enter-active {
	transition: all 400ms $easeOutCubic;
}

.lightbox-transition-enter-from {
	opacity: 0;
	transform: translate3d(0, 50px, 0);
}

.lightbox-transition-enter-to {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.lightbox-transition-leave-active {
	transition: all 400ms $easeOutCubic;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transform-origin: center 20%;
	transition-delay: 25ms;
}

.lightbox-transition-leave-from {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.lightbox-transition-leave-to {
	opacity: 0;
	transform: translate3d(0, -50px, 0);
}
</style>
