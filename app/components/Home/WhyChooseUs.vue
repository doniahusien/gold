<template>
     <div class="container mx-auto flex flex-col justify-center items-center gap-5 px-4 md:px-0 ">
        <h2 class="title">{{ t("TITLES.why choose us") }}</h2>
        <p class="text-center text-xl font-normal max-w-2xl text-gray-dark">
            {{ t("LABELS.why_desc") }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        <CardFeature v-for="(feature, index) in features" :key="index" :feature="feature" :number="index+1"/>
        </div>
        
    </div>
</template>

<script setup>
const { t } = useI18n()

const features = [
    {
    icon: 'gold-bar',
    title: t('FEATURES.investment_title'),
    desc: t('FEATURES.investment_desc')
  },
   {
    icon: 'certificate-line',
    title: t('FEATURES.experience_title'),
    desc: t('FEATURES.experience_desc')
  },

  {
    icon: 'check-circle',
    title: t('FEATURES.reliability_title'),
    desc: t('FEATURES.reliability_desc')
  },
 
    {
    icon: 'shield-yes',
    title: t('FEATURES.quality_title'),
    desc: t('FEATURES.quality_desc')
  },

]
</script>
