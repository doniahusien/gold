<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  path: { type: String, default: "icons" },
  classes: String,
});

const svgContent = ref("");

// Fetch SVG from /public
onMounted(async () => {
  try {
    const res = await fetch(`/${props.path}/${props.name}.svg`);
    if (res.ok) svgContent.value = await res.text();
  } catch (e) {
    console.warn("SVG not found:", props.name);
  }
});
</script>

<template>
  <span v-html="svgContent" :class="classes"></span>
</template>
