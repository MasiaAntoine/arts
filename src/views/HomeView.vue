<script setup>
import useCategories from "../hooks/useCategories";
import CategoryMenu from "../components/CategoryMenu.vue";

const { categories } = useCategories();
</script>

<template>
  <div class="w-[30%]">
    <CategoryMenu :categories="categories" />
  </div>
</template>
