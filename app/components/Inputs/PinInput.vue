<script setup lang="ts">
const value = ref([])
</script>

<template>
  <UPinInput
    v-model="value"
    :ui="{
      root: 'relative  flex gap-7 items-center justify-center ',
      base: 'w-17 h-17 rounded-3xl border border-gray-300 ring-0 focus-visible:ring-0 bg-white text-center text-primary font-bold text-lg  focus:outline-none focus:border-main'
    }"
    length="4"
    size="lg"
  />
</template>
