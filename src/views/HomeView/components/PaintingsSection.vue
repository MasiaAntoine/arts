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
  <div class="flex flex-col gap-4 h-[calc(100%-2rem)] sm:h-full">
    <h1 class="text-5xl font-extrabold uppercase italic">
      {{ activeCategory?.name }}
    </h1>
    <SectionApp
      class="flex flex-col justify-between h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] xl:h-full"
    >
      <div class="overflow-y-auto no-scrollbar">
        <div>
          <PopularPaintings :paintings="popularPaintings" />
          <NoPopularPaintings :paintings="noPopularPaintings" />
        </div>
        <FooterApp />
      </div>
    </SectionApp>
  </div>
</template>
