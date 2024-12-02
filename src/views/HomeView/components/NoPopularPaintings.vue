<script setup>
import { computed } from "vue";

const props = defineProps({
  paintings: {
    type: Array,
    required: true,
  },
});

const isSixPaintings = computed(() => props.paintings.length >= 6);
</script>

<template>
  <div v-if="paintings.length >= 1">
    <h2 class="text-2xl pt-12 pb-3">Autres Œuvres</h2>

    <ul
      :class="
        isSixPaintings
          ? 'flex flex-wrap justify-center gap-y-4 gap-x-10'
          : 'flex flex-wrap justify-start gap-y-4 gap-x-10'
      "
    >
      <li
        class="flex flex-col items-center gap-2 cursor-pointer group flex-[1_1_calc((100%/6)-40px)] max-w-[calc((100%/6)-40px)]"
        v-for="painting in paintings"
        :key="painting.title"
      >
        <img
          class="h-36 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md shadow-gray-800"
          :src="painting.imageURL"
          :alt="painting.title"
        />
        <h3 class="w-32 text-center text-md">{{ painting.title }}</h3>
      </li>
    </ul>
  </div>
</template>
