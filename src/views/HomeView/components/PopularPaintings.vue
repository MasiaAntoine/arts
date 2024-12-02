<script setup>
import { reformatDate } from "@/shared/utils";

defineProps({
  paintings: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div v-if="paintings.length >= 1">
    <h2 class="text-2xl pt-12 pb-2">Œuvres Populaires</h2>

    <div class="w-[67vw] flex gap-8 overflow-x-auto h-52 no-scrollbar">
      <div
        class="flex-none w-[25rem] p-5 rounded-xl h-36 relative top-14 group cursor-pointer"
        v-for="painting in paintings"
        :key="painting.title"
        :style="{
          backgroundImage: `url(${painting.imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <img
          class="h-44 absolute bottom-4 rounded-xl group-hover:scale-105 group-hover:-rotate-2 transition-all duration-300 z-30 shadow-md shadow-gray-100"
          :src="painting.imageURL"
          :alt="painting.title"
        />

        <div class="h-full ml-40 flex items-center absolute z-20 top-0">
          <div class="text-white max-w-48">
            <h3 class="text-xl">
              {{ painting.title }}
            </h3>
            <div>{{ reformatDate(painting.date) }}</div>
          </div>
        </div>

        <div
          class="size-full rounded-xl absolute left-0 top-0 z-10 bg-black opacity-40 group-hover:opacity-20 transition-all duration-300"
        ></div>
      </div>
    </div>
  </div>
</template>
