<script setup>
import MenuItem from "./MenuItem.vue";

defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav class="w-[25vw] h-screen p-3 bg-white">
    <ul class="flex flex-col gap-4">
      <MenuItem
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </ul>
  </nav>
</template>
