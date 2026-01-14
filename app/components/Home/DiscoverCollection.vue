<template>
  <div class="container mx-auto flex flex-col justify-center items-center gap-5 px-4 md:px-0">
    <h2 class="title">{{ t("TITLES.discover collection") }}</h2>
    <div class="flex flex-col md:flex-row gap-5 md:gap-0 w-full h-95 md:h-75">
      <CardDetails
        v-for="(collection, index) in collections"
        :key="collection.id"
        :item="collection"
       class="
    bg-white p-6
    rounded-2xl
    md:rounded-none
    md:first:rounded-s-2xl
    md:last:rounded-e-2xl
  "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const collections = computed(() => [
  {
    id: 1,
    link: localePath("/gold-alloys"),
    title: t("TITLES.gold alloys"),
    desc: t("LABELS.DISCOVER.gold"),
    image: "/images/gold1.jpg",
  },
  {
    id: 2,
    link: localePath("/silver-alloys"),
    title: t("TITLES.silver alloys"),
    desc: t("LABELS.DISCOVER.silver"),
    image: "/images/slider2.jpg",
  },
]);
</script>

<style scoped></style>
