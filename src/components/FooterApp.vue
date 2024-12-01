<template>
  <footer class="w-full pt-1 text-center border-t border-gray-900">
    Copyright © {{ currentYear }}. Tous droits réservés - Arts Antoine Masia
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
