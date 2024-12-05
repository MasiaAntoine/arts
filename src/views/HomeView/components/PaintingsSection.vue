<script setup>
import SectionApp from "@/components/SectionApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import PopularPaintings from "./PopularPaintings.vue";
import NoPopularPaintings from "./NoPopularPaintings.vue";

defineProps({
  activeCategory: {
    type: Object,
    required: true,
  },
  popularPaintings: {
    type: Array,
    required: true,
  },
  noPopularPaintings: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="lg:flex flex-col gap-4 h-full">
    <h1 class="mb-4 lg:mb-0 text-5xl font-extrabold uppercase italic">
      {{ activeCategory?.name }}
    </h1>
    <SectionApp class="h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] xl:h-full">
      <div class="overflow-y-auto no-scrollbar h-full">
        <PopularPaintings :paintings="popularPaintings" />
        <NoPopularPaintings :paintings="noPopularPaintings" />
        <FooterApp />
      </div>
    </SectionApp>
  </div>
</template>
