<script setup>
import { onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import useCategories from "@/hooks/useCategories";
import usePaintings from "@/hooks/usePaintings";
import CategoryMenu from "@/components/CategoryMenu.vue";
import PaintingsSection from "./components/PaintingsSection.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
import { updateMetaTags } from "@/shared/utils";

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
    updateMetaTags(category.name, category.description, category.coverImage);
  } else {
    const firstCategory = categories.value[0];
    if (firstCategory) {
      router.push(`/${firstCategory.routerName}`);
      updateMetaTags(category.name, category.description, category.coverImage);
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
  <BurgerMenu />

  <div class="flex flex-col h-full gap-6 lg:justify-between">
    <HeaderApp class="h-16 sm:h-24 mt-4" />

    <div class="flex justify-between gap-4 h-full">
      <CategoryMenu
        class="min-w-72"
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
