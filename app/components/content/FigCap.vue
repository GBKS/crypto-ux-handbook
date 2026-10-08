<script setup lang="ts">
const props = defineProps<{
  caption?: string
  title?: string
  link?: string
}>()

const content = computed(() => {
  let result = props.caption ?? ''

  if (props.link) {
    if (props.title) {
      if (result.length > 0) result += '<br/>'
      result += `<small><a href="${props.link}" target="_blank">${props.title}</a></small>`
    } else {
      result = `<a href="${props.link}" target="_blank">${props.caption}</a>`
    }
  }

  return result
})
</script>

<template>
  <figcaption v-html="content" />
</template>
