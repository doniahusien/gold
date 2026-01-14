<template>
  <div dir="ltr" class="w-full bg-black text-secondary p-5 overflow-hidden">
    <Vue3Marquee :clone="true" :duration="info?.length * 2 * 5">
      <div
        v-for="item in info"
        v-bind="item"
        :key="item.id"
        class="lg:h-[30px] h-[35px] mx-8 "
      >
        <div class="flex items-center gap-2">
          <p>{{ item.title }}</p>
          <Icon name="ph:sparkle-light" class="text-main" />

        </div>
      </div>
      <div
        v-for="item in info"
        v-bind="item"
        :key="item.id"
        class="lg:h-[30px] h-[35px] mx-8 "
      >
        <div class="flex items-center gap-2">
          <p>{{ item.title }}</p>
          <Icon name="ph:sparkle-light" class="text-main" />

        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";
const { t, locale } = useI18n();
const localePath = useLocalePath();

const info = computed(() => [
  {
    id: 1,
    title: t("LABELS.FEATURES.price"),
  },
  {
    id: 2,
    title: t("LABELS.FEATURES.quilty"),
  },
  {
    id: 3,
    title: t("LABELS.FEATURES.best"),
  },
  {
    id: 4,
    title: t("LABELS.FEATURES.secure"),
  },
]);
</script>
