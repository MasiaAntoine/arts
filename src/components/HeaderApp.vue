<script setup>
import signature from "@/assets/signature.png";
</script>

<template>
  <header
    class="flex flex-col gap-2 lg:flex-row justify-center lg:justify-between items-center px-10"
  >
    <img
      class="h-full"
      :src="signature"
      alt="signature Masia Antoine Arts logo"
    />
    <div class="text-1xl">Arts Antoine Masia</div>
  </header>
</template>
