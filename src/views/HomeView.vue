<script setup>
import useCategories from "../hooks/useCategories";
import usePaintings from "../hooks/usePaintings";
import CategoryMenu from "../components/CategoryMenu.vue";
import SectionApp from "@/components/SectionApp.vue";
import FooterApp from "@/components/FooterApp.vue";

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
    <SectionApp class="flex flex-col justify-between gap-10">
      <div class="overflow-y-auto">
        <h1 class="text-5xl font-extrabold uppercase italic">
          {{ activeCategory?.name }}
        </h1>
        <div>
          <div v-if="popularPaintings.length >= 1">
            <h2 class="text-3xl font-bold">Œuvres Populaires</h2>
            <ul>
              <li v-for="painting in popularPaintings" :key="painting.title">
                {{ painting.title }} - {{ painting.artist }}
                <img
                  class="h-36"
                  :src="painting.imageURL"
                  :alt="painting.title"
                />
              </li>
            </ul>
          </div>
          <div v-if="noPopularPaintings.length >= 1">
            <h2 class="text-3xl font-bold">Autres Œuvres</h2>
            <ul>
              <li v-for="painting in noPopularPaintings" :key="painting.title">
                {{ painting.title }} - {{ painting.artist }}
                <img
                  class="h-36"
                  :src="painting.imageURL"
                  :alt="painting.title"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterApp />
    </SectionApp>
  </div>
</template>
