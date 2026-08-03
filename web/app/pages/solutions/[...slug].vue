<template>
  <ContentRenderer v-if="page" :value="page" />
  <UError
    v-else
    :error="{
      statusCode: 404,
      statusMessage: 'Solution page not found',
      message: 'The requested solution page could not be found.',
    }"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'solution',
})

const route = useRoute()

const { data: page } = await useAsyncData(`solution-${route.path}`, () =>
  queryCollection('solutions').path(route.path).first(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Solution page not found',
  })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})
</script>
