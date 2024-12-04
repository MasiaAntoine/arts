<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});

const buttonClasses = computed(() => {
  switch (props.type) {
    case "danger":
      return "bg-red-500";
    case "warning":
      return "bg-yellow-500";
    case "secondary":
      return "bg-gray-800";
    case "primary":
      return "bg-blue-500";
    default:
      return "";
  }
});
</script>

<template>
  <button
    :class="[
      buttonClasses,
      'text-white cursor-pointer py-2 px-4 rounded-xl inline-block hover:scale-105 transition-all duration-300',
    ]"
  >
    <slot />
  </button>
</template>
