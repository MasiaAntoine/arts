<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import collectionPaintings from "@/data/collectionPaintings";
import SectionApp from "@/components/SectionApp.vue";
import { reformatDateFullMonth } from "@/shared/utils";
import CustomButton from "@/components/CustomButton.vue";

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
  <div v-if="painting" class="p-4 sm:p-8">
    <CustomButton class="mb-4" type="secondary" @click="goToHome"
      >Retour</CustomButton
    >

    <div class="sm:px-20">
      <div
        class="flex flex-col sm:flex-row items-center gap-6 sm:gap-20 sm:px-20"
      >
        <img
          :src="painting.imageURL"
          :alt="painting.title"
          class="my-4 h-[40vh] sm:h-72 shadow-2xl shadow-black cursor-pointer hover:scale-125 transition-all duration-300"
        />

        <div class="w-full text-center sm:text-left">
          <h1 class="text-4xl font-bold">{{ painting.title }}</h1>

          <p class="text-lg my-3 font-semibold">{{ painting.artist }}</p>
        </div>
      </div>

      <SectionApp class="mt-10 sm:px-24 sm:py-12">
        <div
          class="flex flex-col sm:flex-row justify-between items-top gap-5 sm:gap-28"
        >
          <div class="w-full sm:w-2/4">
            <h2 class="text-lg font-semibold mb-4">Description</h2>
            <p class="text-sm">{{ painting.description }}</p>
          </div>

          <div class="w-full sm:w-2/4 flex flex-col gap-5 sm:gap-5">
            <div v-if="painting.date">
              <h2 class="text-lg font-semibold mb-4">Date</h2>
              <p class="text-sm">{{ reformatDateFullMonth(painting.date) }}</p>
            </div>
            <div v-if="painting.dimensions.width && painting.dimensions.height">
              <h2 class="text-lg font-semibold mb-4">Dimensions</h2>
              <p class="text-sm">
                {{ painting.dimensions.width }} x
                {{ painting.dimensions.height }}
              </p>
            </div>
            <div v-if="painting.technique">
              <h2 class="text-lg font-semibold mb-4">Technique</h2>
              <p class="text-sm">
                {{ painting.technique }}
              </p>
            </div>
          </div>
        </div>
      </SectionApp>
    </div>
  </div>
</template>
