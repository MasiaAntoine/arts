<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <li
    @click="$emit('click')"
    :class="[
      'bg-gray-100 px-5 flex gap-4 items-center rounded-2xl justify-between cursor-pointer group transition-all duration-300 hover:bg-orange-200 w-full',
      { 'bg-orange-400': isActive },
    ]"
  >
    <span
      :class="[
        'uppercase font-extrabold text-lg group-hover:text-black',
        { 'text-white': isActive },
      ]"
    >
      {{ category.name }}
    </span>
    <img
      :src="category.coverImage"
      :alt="category.name"
      :class="[
        'h-20 rounded-md transition-all group-hover:scale-125 group-hover:rotate-6',
        { 'scale-110 ': isActive },
      ]"
    />
  </li>
</template>
