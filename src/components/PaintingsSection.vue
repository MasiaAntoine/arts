<script setup>
import SectionApp from "./SectionApp.vue";
import FooterApp from "./FooterApp.vue";
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
  <SectionApp class="flex flex-col justify-between gap-10">
    <div class="overflow-y-auto">
      <h1 class="text-5xl font-extrabold uppercase italic">
        {{ activeCategory?.name }}
      </h1>
      <div>
        <PopularPaintings :paintings="popularPaintings" />
        <NoPopularPaintings :paintings="noPopularPaintings" />
      </div>
    </div>
    <FooterApp />
  </SectionApp>
</template>
