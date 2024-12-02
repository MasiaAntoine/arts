<script setup>
import SectionApp from "@/components/SectionApp.vue";

import signature from "@/assets/signature.png";
</script>

<template>
  <SectionApp>
    <header class="flex h-20 justify-between items-center">
      <img
        class="h-full"
        :src="signature"
        alt="signature Masia Antoine Arts logo"
      />
      <div class="text-1xl">Arts Masia Antoine</div>
    </header>
  </SectionApp>
</template>
