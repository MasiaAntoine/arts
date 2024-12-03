<script setup>
import { useRouter } from "vue-router";
import HeaderApp from "@/components/HeaderApp.vue";
import MenuItem from "@/components/MenuItem.vue";
import useCategories from "@/hooks/useCategories";

defineProps({
  isMiddleLineVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["set-active-category", "category-clicked"]);

const { categories, setActiveCategory } = useCategories();
const router = useRouter();

const handleSetActiveCategory = (id) => {
  console.log(id);
  const category = categories.value.find((category) => category.id === id);
  if (category) {
    setActiveCategory(id);
    emit("set-active-category", id);
    emit("category-clicked");
    router.push(`/${category.routerName}`);
  }
};
</script>

<template>
  <div
    :class="isMiddleLineVisible ? '-left-[100vw]' : 'left-0'"
    class="bg-white h-screen w-screen absolute z-40 top-0 transition-all duration-500 p-10"
  >
    <HeaderApp class="h-24" />
    <nav class="mt-10">
      <ul class="flex flex-col gap-4">
        <MenuItem
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :isActive="category.isActive"
          @click="handleSetActiveCategory(category.id)"
        />
      </ul>
    </nav>
  </div>
</template>
