import { ref, computed } from "vue";
import collectionPaintings from "../data/collectionPaintings";

export default function useCategories() {
  const categories = ref(
    collectionPaintings.categories.map((category, index) => ({
      ...category,
      id: index + 1,
      isActive: index === 0,
    })),
  );

  const activeCategory = computed(() =>
    categories.value.find((category) => category.isActive),
  );

  const setActiveCategory = (id) => {
    categories.value.forEach((category) => {
      category.isActive = category.id === id;
    });
  };

  return {
    categories,
    activeCategory,
    setActiveCategory,
  };
}
