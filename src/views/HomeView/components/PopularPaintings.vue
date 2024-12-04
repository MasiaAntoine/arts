<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { reformatDate } from "@/shared/utils";
import PaginationDots from "./PaginationDots.vue";

const props = defineProps({
  paintings: {
    type: Array,
    required: true,
  },
});

const paintingRefs = ref([]);
const activeIndex = ref(0);
const router = useRouter();

const scrollToPainting = async (index) => {
  activeIndex.value = index;
  await nextTick();
  const paintingElement = paintingRefs.value[index];
  if (paintingElement) {
    paintingElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

const updateActiveIndexOnScroll = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = paintingRefs.value.indexOf(entry.target);
      if (index !== -1) {
        activeIndex.value = index;
      }
    }
  });
};

const observer = new IntersectionObserver(updateActiveIndexOnScroll, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

onMounted(async () => {
  scrollToPainting(0);
  updatePaintingRefs();
  paintingRefs.value.forEach((el) => observer.observe(el));
});

watch(
  () => props.paintings,
  async () => {
    await nextTick();
    updatePaintingRefs();
    paintingRefs.value.forEach((el) => observer.observe(el));
  },
);

const updatePaintingRefs = () => {
  paintingRefs.value = [];
  const paintingElements = document.querySelectorAll("[data-painting-ref]");
  paintingElements.forEach((el, index) => {
    paintingRefs.value[index] = el;
  });
};

const goToPainting = (routerName) => {
  const nameCat = router.currentRoute.value.params.nameCat;
  router.push({ name: "painting", params: { nameCat, routerName } });
};
</script>

<template>
  <div class="pb-12" v-if="paintings.length >= 1">
    <h2 class="text-2xl pb-2">Œuvres Populaires</h2>

    <div class="w-full flex gap-8 overflow-x-auto h-52 no-scrollbar">
      <div
        v-for="painting in paintings"
        :key="painting.title"
        class="flex-none w-full sm:w-[25rem] p-5 rounded-xl h-36 relative top-14 group cursor-pointer"
        :style="{
          backgroundImage: `url(${painting.imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
        data-painting-ref
        @click="goToPainting(painting.routerName)"
      >
        <img
          class="h-44 absolute bottom-4 rounded-xl group-hover:scale-105 group-hover:-rotate-2 transition-all duration-300 z-30 shadow-md shadow-gray-100"
          :src="painting.imageURL"
          :alt="painting.title"
        />

        <div class="h-full ml-40 flex items-center absolute z-20 top-0">
          <div class="text-white max-w-48">
            <h3 class="text-xl">{{ painting.title }}</h3>
            <div>{{ reformatDate(painting.date) }}</div>
          </div>
        </div>

        <div
          class="size-full rounded-xl absolute left-0 top-0 z-10 bg-black opacity-40 group-hover:opacity-20 transition-all duration-300"
        ></div>
      </div>
    </div>

    <PaginationDots
      :paintings="paintings"
      :activeIndex="activeIndex"
      @dot-click="scrollToPainting"
    />
  </div>
</template>
