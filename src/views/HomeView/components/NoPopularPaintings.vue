<script setup>
import { computed } from "vue";
import { reformatDate } from "@/shared/utils";

const props = defineProps({
  paintings: {
    type: Array,
    required: true,
  },
});

const shouldCenter = computed(() => {
  const length = props.paintings.length;
  if (window.innerWidth >= 1280) {
    return length >= 6;
  } else if (window.innerWidth >= 1024) {
    return length >= 5;
  } else if (window.innerWidth >= 768) {
    return length >= 4;
  } else if (window.innerWidth >= 640) {
    return length >= 2;
  } else {
    return false;
  }
});
</script>

<template>
  <div v-if="paintings.length >= 1">
    <h2 class="text-2xl pb-3">Autres Œuvres</h2>

    <ul
      :class="{
        'flex flex-wrap gap-y-4 gap-x-10 mx-2': true,
        'justify-center': shouldCenter,
        'justify-start': !shouldCenter,
      }"
    >
      <li
        class="flex flex-col items-center gap-2 cursor-pointer group xl:flex-[1_1_calc((100%/6)-40px)] xl:max-w-[calc((100%/6)-40px)] lg:flex-[1_1_calc((100%/5)-40px)] lg:max-w-[calc((100%/5)-40px)] md:flex-[1_1_calc((100%/3)-40px)] md:max-w-[calc((100%/3)-40px)] sm:flex-[1_1_calc((100%/2)-40px)] sm:max-w-[calc((100%/2)-40px)]"
        v-for="painting in paintings"
        :key="painting.title"
      >
        <img
          class="h-36 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md shadow-gray-800 min-w-28"
          :src="painting.imageURL"
          :alt="painting.title"
        />
        <div class="text-center w-full">
          <h3 class="text-base">{{ painting.title }}</h3>
          <div class="text-sm text-gray-900 pt-1">
            {{ reformatDate(painting.date) }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
