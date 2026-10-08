<script setup lang="ts">
// Markdown links, as the old renderer made them: external links open in a new tab,
// everything else is an in-app link.
const props = defineProps<{
  href: string
  title?: string
}>()

const external = computed(() => /^https?:\/\//.test(props.href))
const to = computed(() => props.href.startsWith('/') || props.href.includes(':') ? props.href : '/' + props.href)
</script>

<template>
  <a v-if="external" :href="href" :title="title" target="_blank"><slot /></a>
  <a v-else-if="href.startsWith('mailto:')" :href="href" :title="title"><slot /></a>
  <NuxtLink v-else :to="to" :title="title"><slot /></NuxtLink>
</template>
