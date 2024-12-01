<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li
    class="bg-gray-100 px-5 flex items-center rounded-2xl justify-between cursor-pointer group hover:bg-orange-400 transition-all"
  >
    <span class="uppercase font-extrabold group-hover:text-white text-lg">
      {{ category.name }}
    </span>
    <img
      :src="category.coverImage"
      :alt="category.name"
      class="h-20 rounded-md transition-all group-hover:scale-125 group-hover:rotate-6"
    />
  </li>
</template>
