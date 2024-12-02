<script setup>
import MenuItem from "./MenuItem.vue";
import SectionApp from "./SectionApp.vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["set-active-category"]);

const setActiveCategory = (id) => {
  props.categories.forEach((category) => {
    category.isActive = category.id === id;
  });
  emit("set-active-category", id);
};
</script>

<template>
  <SectionApp>
    <nav>
      <ul class="flex flex-col gap-4">
        <MenuItem
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :isActive="category.isActive"
          @click="setActiveCategory(category.id)"
        />
      </ul>
    </nav>
  </SectionApp>
</template>
