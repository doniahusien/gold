<template>
  <div class="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6  px-4 md:px-0">
<div
  class="col-span-1 md:col-span-2 flex justify-center flex-col gap-5
         bg-[url('/images/bg_about.png')] bg-no-repeat bg-center"
>      <p class="text-base font-medium bg-bg-light text-main rounded-md w-fit inline-block p-2">
        {{ t("TITLES.who us") }}
      </p>
       <h2 class="text-2xl md:text-4xl font-semibold leading-relaxed">
        {{ t("LABELS.WHO_US.title") }}
      </h2>
      <p class="text-base md:text-lg lg:text-xl text-gray-dark  font-normal w-full lg:w-2xl">
        {{ t("LABELS.WHO_US.desc") }}
      </p>
      <NuxtLink :to="localePath('/who-us')" 
      class="group border text-base md:text-lg font-semibold border-main mt-8 bg-white  text-main hover:bg-gold hover:text-white transition duration-700 ease-in-out w-30 md:w-40 py-2.5 px-4 h-12 md:h-14 
      flex justify-center items-center rounded-[24px]">{{ t("BUTTONS.know more") }}
      </NuxtLink>
    </div>

    <div class="col-span-1 mx-auto rounded-t-full h-85 md:h-100  w-55 lg:w-87 overflow-hidden">
     <NuxtImg src="/images/slider1.jpg" class="w-full h-full object-cover "/>
    </div>
  </div>
</template>

<script setup>
  const localePath= useLocalePath();
const {t}= useI18n();
</script>
