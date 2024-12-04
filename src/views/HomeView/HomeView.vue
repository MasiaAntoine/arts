<script setup>
import { onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import useCategories from "@/hooks/useCategories";
import usePaintings from "@/hooks/usePaintings";
import CategoryMenu from "@/components/CategoryMenu.vue";
import PaintingsSection from "./components/PaintingsSection.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";

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
  <div>
    <BurgerMenu />

    <div class="px-2 lg:px-12 lg:py-10 py-2 sm:h-screen">
      <div
        class="flex flex-col sm:h-full h-[calc(82.5vh-1rem)] gap-6 lg:justify-between"
      >
        <HeaderApp class="h-16 sm:h-24 mt-4" />

        <div class="flex justify-between gap-4 sm:h-full h-[calc(100%-6.5rem)]">
          <CategoryMenu
            class="min-w-72"
            :categories="categories"
            @set-active-category="setActiveCategory"
          />
          <PaintingsSection
            class="w-full lg:w-[calc(100%-18rem-1rem)]"
            :activeCategory="activeCategory"
            :popularPaintings="popularPaintings"
            :noPopularPaintings="noPopularPaintings"
          />
        </div>
      </div>
    </div>
  </div>
</template>
