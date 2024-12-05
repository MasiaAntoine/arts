<script setup>
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="text-black">
    <RouterView v-slot="{ Component }">
      <transition
        :name="route.name === 'painting' ? 'slide-fade' : 'slide-fade-reverse'"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter {
  transform: translateX(100%);
}
.slide-fade-enter-to {
  transform: translateX(0);
}
.slide-fade-leave {
  transform: translateX(0);
}
.slide-fade-leave-to {
  transform: translateX(-100%);
}

.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-reverse-enter {
  transform: translateX(-100%);
}
.slide-fade-reverse-enter-to {
  transform: translateX(0);
}
.slide-fade-reverse-leave {
  transform: translateX(0);
}
.slide-fade-reverse-leave-to {
  transform: translateX(100%);
}
</style>
