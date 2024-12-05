<script setup>
import { watch } from "vue";
import mediumZoom from "medium-zoom";

const props = defineProps({
  options: Object,
});

let zoom = null;

const getZoom = () => {
  if (zoom === null) zoom = mediumZoom(props.options);
  return zoom;
};

const attachZoom = (ref) => {
  const image = ref;
  const zoom = getZoom();

  if (image) zoom.attach(image);
  else zoom.detach();
};

watch(
  () => props.options,
  (options) => {
    const zoom = getZoom();
    zoom.update(options || {});
  },
);
</script>

<template>
  <img :ref="attachZoom" />
</template>
