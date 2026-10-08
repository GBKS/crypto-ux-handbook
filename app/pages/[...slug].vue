<script setup lang="ts">
// One page instance serves every article (/, /:id and the legacy /bdh/:id), so that
// switching articles animates the post out and the next one in, as on the old site.
definePageMeta({ key: 'content-page' })

const route = useRoute()
const router = useRouter()

const contentId = computed(() => {
  const slug = ([] as string[]).concat(route.params.slug || []).filter(Boolean)
  return slug.at(-1) || defaultContentId
})

const { data: page } = await useAsyncData(
  () => 'page:' + contentId.value,
  () => queryCollection('pages').path('/' + contentId.value).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

usePageMeta(contentId)

// Slide right when moving forward in the ToC, left when moving back.
const previousContentId = ref<string | null>(null)
watch(contentId, (_, previous) => { previousContentId.value = previous })

const transitionName = computed(() => {
  const currentIndex = tocIndex(contentId.value)
  const previousIndex = previousContentId.value === null ? -1 : tocIndex(previousContentId.value)
  return currentIndex !== -1 && previousIndex !== -1 && currentIndex < previousIndex
    ? 'content-post-transition-reverse'
    : 'content-post-transition'
})

function afterLeave() {
  window.scrollTo(0, 0)
}

// Arrow keys step through the ToC.
function onKeyUp(event: KeyboardEvent) {
  const index = tocIndex(contentId.value)
  if (index === -1) return
  if (event.keyCode === 39 && index < toc.length - 1) router.push('/' + toc[index + 1]!.id)
  if (event.keyCode === 37 && index > 0) router.push('/' + toc[index - 1]!.id)
}

onMounted(() => window.addEventListener('keyup', onKeyUp))
onBeforeUnmount(() => window.removeEventListener('keyup', onKeyUp))

// In-page anchors scroll smoothly, leaving room for the fixed nav.
watch(() => route.hash, (hash) => {
  const id = decodeURIComponent(hash.slice(1))
  if (!id || id.startsWith('/')) return
  const element = document.getElementById(id)
  if (element) smoothScrollTo(element.getBoundingClientRect().top + window.scrollY - 75)
})
</script>

<template>
  <div class="page content-page">
    <div class="wrap">
      <div class="content">
        <Transition :name="transitionName" :duration="400" mode="out-in" @after-leave="afterLeave">
          <ContentPost v-if="page" :key="page.path" :content-id="page.path.slice(1)" :page="page" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-page {
	> .wrap {
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;

		> .content {
			position: relative;

			> :deep(.content-post) {
				&.-post-overview {
					padding-top: 0;

					> .article {
						padding-top: 0;

						> p {
							&:first-child {
								margin-top: 0;
							}
						}
					}
				}
			}
		}
	}
}

.content-post-transition-enter-active {
	transition: all 400ms $easeOutCubic;
}

.content-post-transition-enter-from {
	opacity: 0;
	transform: translate3d(50px, 0, 0);
}

.content-post-transition-enter-to {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.content-post-transition-leave-active {
	transition: all 400ms $easeOutCubic;
}

.content-post-transition-leave-from {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.content-post-transition-leave-to {
	opacity: 0;
	transform: translate3d(-50px, 0, 0);
}

.content-post-transition-reverse-enter-active {
	transition: all 400ms $easeOutCubic;
}

.content-post-transition-reverse-enter-from {
	opacity: 0;
	transform: translate3d(-50px, 0, 0);
}

.content-post-transition-reverse-enter-to {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.content-post-transition-reverse-leave-active {
	transition: all 400ms $easeOutCubic;
}

.content-post-transition-reverse-leave-from {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.content-post-transition-reverse-leave-to {
	opacity: 0;
	transform: translate3d(50px, 0, 0);
}
</style>
