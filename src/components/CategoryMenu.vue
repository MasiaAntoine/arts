<script setup>
import MenuItem from "./MenuItem.vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const setActiveCategory = (id) => {
  props.categories.forEach((category) => {
    category.isActive = category.id === id;
  });
};
</script>

<template>
  <nav class="size-full p-3 bg-white">
    <ul class="flex flex-col gap-4">
      <MenuItem
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :isActive="category.isActive"
        @click="setActiveCategory(category.id)"
      />
    </ul>
  </nav>
</template>
