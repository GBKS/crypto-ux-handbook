<script setup lang="ts">
// Unknown pages keep the site chrome around an empty content area, like the old site,
// but are served with a real 404 status.
defineProps<{ error: { statusCode: number } }>()

useSeoMeta({ title: 'The Crypto UX Handbook by GBKS', robots: 'noindex' })
</script>

<template>
  <div id="container" class="-active">
    <SiteNav />
    <SiteToc />
    <div class="pages">
      <div class="page content-page" />
    </div>
  </div>
</template>
