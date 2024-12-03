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
  <div class="justify-center flex">
    <div
      class="size-8 flex justify-center items-center cursor-pointer"
      v-for="(painting, index) in paintings"
      :key="painting.title"
      @click="$emit('dot-click', index)"
    >
      <div
        :class="index === activeIndex ? 'bg-orange-600' : 'bg-orange-400'"
        class="size-3 rounded-full"
      ></div>
    </div>
  </div>
</template>
