import { ref } from "vue";
import collectionPaintings from "../data/collectionPaintings";

export default function useCategories() {
  const categories = ref(
    collectionPaintings.categories.map((category, index) => ({
      ...category,
      id: index + 1,
      isActive: index === 0,
    })),
  );

  return {
    categories,
  };
}
