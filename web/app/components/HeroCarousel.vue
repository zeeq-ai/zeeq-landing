<template>
  <div
    class="grid items-center gap-8 text-left lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.8fr)] lg:gap-12"
  >
    <div class="w-full">
      <UCarousel
        ref="carousel"
        v-slot="{ item }"
        loop
        arrows
        wheel-gestures
        :items="items"
        :autoplay="{ delay: 30000 }"
        :prev="{ variant: 'solid', color: 'neutral' }"
        :next="{ variant: 'solid', color: 'neutral' }"
        :ui="{
          item: 'ps-0',
          container: 'ms-0',
          prev: 'start-3 sm:start-4',
          next: 'end-3 sm:end-4',
        }"
        @select="onSelect"
      >
        <div
          class="relative overflow-hidden rounded-xl border border-default bg-elevated/50 ring-1 ring-white/2"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            width="1200"
            height="650"
            :loading="item === items[0] ? 'eager' : 'lazy'"
            class="aspect-1586/859 w-full object-cover object-top"
          />

          <div
            class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-4 pt-12 sm:p-6 sm:pt-16"
          >
            <p class="text-sm font-bold text-white sm:text-base">
              {{ item.description }}
            </p>
          </div>
        </div>
      </UCarousel>

      <div class="mt-4 flex gap-2 sm:gap-3">
        <button
          v-for="thumbnail in thumbnails"
          :key="thumbnail.src"
          type="button"
          :aria-label="`Show ${thumbnail.title}`"
          :aria-current="thumbnail.active"
          class="min-w-0 flex-1 cursor-pointer overflow-hidden rounded-md border transition-opacity"
          :class="
            thumbnail.active
              ? 'border-primary opacity-100'
              : 'border-default opacity-40 hover:opacity-75'
          "
          @click="select(thumbnail.index)"
        >
          <img
            :src="thumbnail.src"
            :alt="thumbnail.alt"
            width="200"
            height="108"
            loading="lazy"
            class="aspect-1586/859 w-full object-cover object-top"
          />
        </button>
      </div>
    </div>

    <div class="lg:min-h-56">
      <Motion
        :key="activeIndex"
        :initial="{ opacity: 0, y: 8 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.35 }"
      >
        <h3 class="text-xl font-semibold text-highlighted sm:text-2xl">
          {{ activeItem.title }}
        </h3>
        <p class="mt-3 text-sm text-muted sm:text-base">
          {{ activeItem.narrative }}
        </p>
      </Motion>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HeroCarouselItem {
  title: string
  narrative: string
  description: string
  src: string
  alt: string
}

const { items } = defineProps<{
  items: HeroCarouselItem[]
}>()

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

const activeItem = computed(() => items[activeIndex.value] ?? items[0]!)

const thumbnails = computed(() =>
  items.map((item, index) => ({
    src: item.src,
    alt: item.alt,
    title: item.title,
    index,
    active: index === activeIndex.value,
  })),
)

function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  const embla = carousel.value?.emblaApi
  // Once the visitor picks a slide, stop yanking them to the next one.
  embla?.plugins()?.autoplay?.stop()
  embla?.scrollTo(index)
}
</script>
