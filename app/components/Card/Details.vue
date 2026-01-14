<template>
 <div
  class="relative overflow-hidden w-full flex items-center justify-center text-white group"
>
  
  <div
    class="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
    :style="{ backgroundImage: `url('${item.image}')` }"
  ></div>

  <div class="absolute inset-0 bg-primary opacity-50 rounded-inherit"></div>

  <div class="relative z-10 flex flex-col items-center p-5 gap-4 md:gap-6 text-center">
    <h3 class="text-lg md:text-2xl lg:text-4xl font-bold">{{ item.title }}</h3>
    <p class="text-sm md:text-lg lg:text-2xl font-medium">{{ item.desc }}</p>
   <NuxtLink
  :to="item.link"
  class="
    inline-flex items-center justify-center 
    font-semibold 
    text-main 
    bg-white 
    rounded-full 
    transition-all duration-300 
    hover:shadow-lg    
    min-w-[140px] 
    px-5 sm:px-6 md:px-8 
    py-2.5 sm:py-3 
    text-sm md:text-base 
    h-11 sm:h-12 md:h-14
  "
>
  {{ t("BUTTONS.start investing") }}
</NuxtLink>
  </div>
</div>

</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
