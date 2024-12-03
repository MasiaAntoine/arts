<script setup>
import { ref } from "vue";
import MobileMenu from "@/components/MobileMenu.vue";

const isMiddleLineVisible = ref(true);

const toggleMiddleLine = () => {
  isMiddleLineVisible.value = !isMiddleLineVisible.value;
};

const closeMenu = () => {
  isMiddleLineVisible.value = true;
};
</script>

<template>
  <div
    class="absolute top-2 left-3 size-10 transition-all duration-500 cursor-pointer z-50 lg:hidden"
    @click="toggleMiddleLine"
  >
    <div
      :class="
        isMiddleLineVisible
          ? 'top-1/4 bg-orange-600'
          : 'rotate-45 top-1/2 bg-red-700'
      "
      class="absolute w-8 h-1 rounded-xl transition-all duration-500 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      :class="isMiddleLineVisible ? 'w-6' : 'w-0'"
      class="absolute bg-orange-600 h-1 rounded-xl transition-all duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      :class="
        isMiddleLineVisible
          ? 'top-3/4 bg-orange-600'
          : '-rotate-45 top-1/2 bg-red-700'
      "
      class="absolute w-8 h-1 rounded-xl transition-all duration-500 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
  </div>

  <MobileMenu
    :isMiddleLineVisible="isMiddleLineVisible"
    @category-clicked="closeMenu"
  />
</template>
