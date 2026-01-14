<template>
  <Html :lang="locale" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <Body :dir="locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="min-h-screen flex">
     
            <slot />
         
      </div>
    </Body>
  </Html>
</template>

<script setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const targetLocale = computed(() => (locale.value === "ar" ? "en" : "ar"));

</script>
