<script setup>
import { useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";
import SectionApp from "./SectionApp.vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["set-active-category"]);

const router = useRouter();

const setActiveCategory = (id) => {
  const category = props.categories.find((category) => category.id === id);
  if (category) {
    props.categories.forEach((category) => {
      category.isActive = category.id === id;
    });
    emit("set-active-category", id);
    router.push(`/${category.routerName}`);
  }
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
