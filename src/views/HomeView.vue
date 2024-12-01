<script setup>
import useCategories from "../hooks/useCategories";
import CategoryMenu from "../components/CategoryMenu.vue";
import SectionApp from "@/components/SectionApp.vue";
import FooterApp from "@/components/FooterApp.vue";

const { categories } = useCategories();
</script>

<template>
  <div class="flex justify-between gap-4 h-full">
    <div class="w-96">
      <CategoryMenu :categories="categories" />
    </div>
    <SectionApp>
      <div class="flex flex-col justify-between h-full">
        <div>démo</div>
        <FooterApp />
      </div>
    </SectionApp>
  </div>
</template>
