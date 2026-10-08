<script setup lang="ts">
const isMobile = useIsMobile()
</script>

<template>
  <li class="flow-step">
    <slot />
    <div class="arrow" v-html="isMobile ? icons.down : icons.right" />
  </li>
</template>
