<script setup>
import useCategories from "@/hooks/useCategories";
import usePaintings from "@/hooks/usePaintings";
import CategoryMenu from "@/components/CategoryMenu.vue";
import PaintingsSection from "./components/PaintingsSection.vue";

const { categories, activeCategory, setActiveCategory } = useCategories();
const { popularPaintings, noPopularPaintings } = usePaintings(
  categories,
  activeCategory,
);
</script>

<template>
  <div class="flex justify-between gap-4 h-full">
    <CategoryMenu
      class="w-96"
      :categories="categories"
      @set-active-category="setActiveCategory"
    />
    <PaintingsSection
      :activeCategory="activeCategory"
      :popularPaintings="popularPaintings"
      :noPopularPaintings="noPopularPaintings"
    />
  </div>
</template>
