// Per-page title, description, social preview and structured data, matching what the
// old PHP server rendered, plus a correct canonical URL.

const siteUrl = 'https://www.cryptouxhandbook.com'
const defaultTitle = 'The Crypto UX Handbook by GBKS'
const defaultDescription = 'Best practices, examples and considerations for designing great blockchain and cryptocurrency users experiences.'
const defaultKeywords = 'ux, user experience, design, cryptocurrency, blockchain, mobile, desktop, ui, interface, crypto'
const author = { '@type': 'Person', 'name': 'Christoph Ono', 'url': 'http://www.germanysbestkeptsecret.com' }
const publisher = {
  '@type': 'Organization',
  'name': 'Crypto UX Handbook',
  'logo': { '@type': 'ImageObject', 'url': siteUrl + '/images/crypto-ux-handbook-logo.png', 'width': '536', 'height': '60' },
}
const dates = { datePublished: '2018-09-20T07:01:56+00:00', dateModified: '2018-09-20T07:01:56+00:00' }

export function usePageMeta(contentId: Ref<string>) {
  const { previews } = useRuntimeConfig().public as { previews: string[] }

  const previewUrl = (id: string) => siteUrl + '/images/previews/' + (previews.includes(id) ? id : 'crypto-ux-handbook') + '.jpg'
  const pageUrl = (id: string) => siteUrl + '/' + (id === defaultContentId ? '' : id)

  const meta = computed(() => {
    const id = contentId.value
    const item = toc.find(entry => entry.id === id && entry.id !== '')
    return {
      title: item ? item.name + ' | Crypto UX Handbook' : defaultTitle,
      description: item?.description || defaultDescription,
      image: previewUrl(id),
      url: pageUrl(id),
    }
  })

  useSeoMeta({
    title: () => meta.value.title,
    description: () => meta.value.description,
    keywords: defaultKeywords,
    ogTitle: () => meta.value.title,
    ogDescription: () => meta.value.description,
    ogType: 'product',
    ogImage: () => meta.value.image,
    ogUrl: () => meta.value.url,
    twitterCard: 'summary',
    twitterTitle: () => meta.value.title,
    twitterDescription: () => meta.value.description,
    twitterImage: () => meta.value.image,
  })

  const structuredData = computed(() => {
    const { title, description, image, url } = meta.value
    const data: object[] = [
      {
        '@context': 'http://schema.org',
        '@type': 'Article',
        'headline': title,
        description,
        author,
        ...dates,
        'image': [image],
        'mainEntityOfPage': url,
        publisher,
      },
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        'url': siteUrl,
        'logo': siteUrl + '/images/crypto-ux-handbook-logo.png',
        'sameAs': ['https://twitter.com/gbks'],
      },
    ]

    if (contentId.value === defaultContentId) {
      data.push({
        '@context': 'http://schema.org',
        '@type': 'ItemList',
        'itemListElement': toc.map((item, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'Article',
            'headline': item.name,
            'description': item.description,
            author,
            ...dates,
            'image': [previewUrl(item.id || defaultContentId)],
            'mainEntityOfPage': url,
            publisher,
            'url': pageUrl(item.id || defaultContentId),
          },
        })),
      })
    }

    return data
  })

  useHead({
    link: [{ rel: 'canonical', href: () => meta.value.url }],
    script: () => structuredData.value.map(item => ({ type: 'application/ld+json', innerHTML: JSON.stringify(item) })),
  })
}
