<template>
  <div
    class="relative overflow-hidden flex justify-center items-center flex-col gap-4 p-6 shadow-md rounded-lg text-center bg-white"
  >
    <span
      class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3
             w-10 h-10 rounded-tr-[12px]  rounded-bl-[120px] bg-main
             flex justify-end pe-2 items-center
             text-xs
                          text-white font-semibold"
    >
      0{{ number }}
    </span>

    <SvgIcon :name="feature.icon" class="bg-bg rounded-full p-3"/>
    <h3 class="text-base md:text-xl font-medium">{{ feature.title }}</h3>
    <p class="text-sm md:text-lg ">{{ feature.desc }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  feature: {
    type: Object,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
})
</script>
