<script setup>
import { onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import useCategories from "@/hooks/useCategories";
import usePaintings from "@/hooks/usePaintings";
import CategoryMenu from "@/components/CategoryMenu.vue";
import PaintingsSection from "./components/PaintingsSection.vue";
import HeaderApp from "@/components/HeaderApp.vue";

const { categories, activeCategory, setActiveCategory } = useCategories();
const { popularPaintings, noPopularPaintings } = usePaintings(
  categories,
  activeCategory,
);

const router = useRouter();
const route = useRoute();

const updateActiveCategory = (nameCat) => {
  const category = categories.value.find((cat) => cat.routerName === nameCat);
  if (category) {
    setActiveCategory(category.id);
  } else {
    const firstCategory = categories.value[0];
    if (firstCategory) {
      router.push(`/${firstCategory.routerName}`);
    }
  }
};

onMounted(() => {
  const nameCat = route.params.nameCat;
  updateActiveCategory(nameCat);
});

watch(
  () => route.params.nameCat,
  (newNameCat) => {
    updateActiveCategory(newNameCat);
  },
);
</script>

<template>
  <div class="flex flex-col h-full gap-6 justify-between">
    <HeaderApp class="h-24" />

    <div class="flex justify-between gap-4 h-full">
      <CategoryMenu
        class="w-96"
        :categories="categories"
        @set-active-category="setActiveCategory"
      />
      <PaintingsSection
        class="w-full"
        :activeCategory="activeCategory"
        :popularPaintings="popularPaintings"
        :noPopularPaintings="noPopularPaintings"
      />
    </div>
  </div>
</template>
