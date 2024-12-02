import { computed } from "vue";

export default function usePaintings(categories, activeCategory) {
  const paintings = computed(() => activeCategory.value?.paintings || []);

  const popularPaintings = computed(() =>
    paintings.value.filter((painting) => painting.isPopular),
  );

  const noPopularPaintings = computed(() =>
    paintings.value.filter((painting) => !painting.isPopular),
  );

  return {
    paintings,
    popularPaintings,
    noPopularPaintings,
  };
}
