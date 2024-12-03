<script setup>
defineProps({
  paintings: {
    type: Array,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="justify-center gap-4 mt-3 flex">
    <div
      :class="index === activeIndex ? 'bg-orange-600' : 'bg-orange-400'"
      class="size-3 rounded-full cursor-pointer"
      v-for="(painting, index) in paintings"
      :key="painting.title"
      @click="$emit('dot-click', index)"
    ></div>
  </div>
</template>
