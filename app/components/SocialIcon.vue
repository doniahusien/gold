<template>
  <a
    :href="social.url"
    class="w-8 h-8 p-2 flex items-center justify-center rounded-lg
           bg-white text-main
           hover:bg-primary hover:text-white transition"
  >
    <Icon :name="social.icon" class="size-5" />
  </a>
</template>

<script setup>
defineProps({
  social: {
    type: Object,
    required: true
  }
})
</script>
