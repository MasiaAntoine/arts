<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import collectionPaintings from "@/data/collectionPaintings";

const route = useRoute();
const router = useRouter();
const painting = ref(null);

onMounted(() => {
  const nameCat = route.params.nameCat;
  const paintingRouterName = route.params.routerName;

  const category = collectionPaintings.categories.find(
    (cat) => cat.routerName === nameCat,
  );

  if (category) {
    painting.value = category.paintings.find(
      (p) => p.routerName === paintingRouterName,
    );
  }

  if (!painting.value) {
    router.push("/");
  }
});

const goToHome = () => {
  const nameCat = route.params.nameCat;
  router.push(`/${nameCat}`);
};
</script>

<template>
  <div v-if="painting" class="h-screen bg-white p-8">
    <div
      class="bg-black text-white cursor-pointer p-2 mt-4 inline-block"
      @click="goToHome"
    >
      Retour
    </div>
    <h1 class="text-4xl font-bold mb-4">{{ painting.title }}</h1>
    <img :src="painting.imageURL" :alt="painting.title" class="mb-4 h-44" />
    <p class="text-lg mb-2"><strong>Artiste:</strong> {{ painting.artist }}</p>
    <p class="text-lg mb-2"><strong>Date:</strong> {{ painting.date }}</p>
    <p class="text-lg mb-2">
      <strong>Dimensions:</strong> {{ painting.dimensions.width }} x
      {{ painting.dimensions.height }}
    </p>
    <p class="text-lg mb-2">
      <strong>Technique:</strong> {{ painting.technique }}
    </p>
    <p class="text-lg mb-2">
      <strong>Description:</strong> {{ painting.description }}
    </p>
  </div>
</template>
