<script setup>
defineProps({
  paintings: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div v-if="paintings.length >= 1">
    <h2 class="text-3xl font-bold">Autres Œuvres</h2>
    <ul>
      <li v-for="painting in paintings" :key="painting.title">
        {{ painting.title }} - {{ painting.artist }}
        <img class="h-36" :src="painting.imageURL" :alt="painting.title" />
      </li>
    </ul>
  </div>
</template>
