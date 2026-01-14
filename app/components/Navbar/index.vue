<template>
  <nav
    class="fixed z-50 w-full bg-white transition-all duration-500 ease-in-out"
    :class="isSticky ? 'top-0 translate-y-0 shadow-lg' : 'translate-y-12'"
  >
    <div class="container mx-auto px-5 md:px-0 flex items-center gap-9 py-2">
      <NuxtLink :to="localePath('/')">
        <NuxtImg src="/logo.png" alt="logo" class="size-14 md:size-18 object-contain" />
      </NuxtLink>

      <div class="flex flex-1 items-center justify-between">
        <ul class="hidden lg:flex gap-8 text-base font-medium">
          <li v-for="item in items" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="transition hover:text-main hover:decoration-main hover:underline-offset-5 hover:underline duration-500 ease-in-out"
              active-class="text-main decoration-main underline-offset-5 underline "
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="flex ms-auto items-center gap-4">
          <ul class="hidden lg:flex gap-6">
            <li><Icon name="carbon:search" class="size-8" /></li>
            <li>
              <NuxtLink :to="localePath('/cart')" class="relative">
                <Icon name="solar:bag-5-outline" class="size-8" />
                <span
                  class="absolute -top-3 -right-1 bg-main text-white text-xs rounded-full size-4 flex items-center justify-center"
                >
                  2
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/wishlist')">
                <Icon name="solar:heart-linear" class="size-8" />
              </NuxtLink>
            </li>
          </ul>

          <NuxtLink
            v-if="!isLoggedIn"
            :to="localePath('/auth/sign-up')"
            class="hidden lg:flex btn rounded-[24px] text-lg font-semibold py-3 px-8 text-white"
          >
            {{ t("BUTTONS.create account") }}
          </NuxtLink>

          <div class="relative hidden lg:block" ref="langRef">
            <button
              @click="langOpen = !langOpen"
              class="flex items-center gap-1 font-bold text-main"
            >
              <Icon
                :name="langOpen ? 'eva:arrow-up-fill' : 'eva:arrow-down-fill'"
                class="size-5"
              />
              {{ t(`locale.${locale}`) }}
            </button>

            <div
              v-if="langOpen"
              class="absolute -start-4 mt-4 w-32 bg-white rounded-lg shadow-2xl overflow-hidden z-50"
            >
              <NuxtLink
                v-for="lang in languages"
                :key="lang.code"
                :to="switchLocalePath(lang.code)"
                class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                @click="langOpen = false"
              >
                <Icon :name="lang.flag" class="size-5" />
                <span class="font-medium">{{ lang.label }}</span>
              </NuxtLink>
            </div>
          </div>

          <button
            @click="toggle"
            class="lg:hidden size-10 flex items-center justify-center"
          >
            <Icon :name="isOpen ? 'fe:close' : 'fe:bar'" class="text-3xl" />
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="lg:hidden min-h-screen px-6 py-10 bg-white space-y-6">
        <NuxtLink
          v-if="!isLoggedIn"
          :to="localePath('/auth/sign-up')"
          class="btn w-full text-center py-2 px-5 text-white rounded-3xl"
        >
          {{ t("BUTTONS.create account") }}
        </NuxtLink>

        <ul class="flex flex-col gap-4 mt-5">
          <li v-for="item in items" :key="item.to">
            <NuxtLink :to="item.to" @click="isOpen = false">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
          <ul class="flex gap-6">
            <li><Icon name="carbon:search" class="size-6" /></li>
            <li>
              <NuxtLink :to="localePath('/cart')" class="relative">
                <Icon name="solar:bag-5-outline" class="size-6" />
                <span
                  class="absolute -top-2 -right-1 bg-main text-white text-xs rounded-full size-4 flex items-center justify-center"
                >
                  2
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/wishlist')">
                <Icon name="solar:heart-linear" class="size-6" />
              </NuxtLink>
            </li>
          </ul>


        <NuxtLink
          :to="switchLocalePath(targetLocale)"
          class="flex items-center gap-2 font-bold text-main"
        >
          <Icon name="fluent:globe-48-filled" class="size-5" />
          {{ t(`locale.${locale}`) }}
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const { locale, t } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const isSticky = ref(false);
const isOpen = ref(false);
const langOpen = ref(false);
const langRef = ref<HTMLElement | null>(null);

const locales = ["en", "ar"];
const targetLocale = computed(() => (locale.value === "ar" ? "en" : "ar"));

const isLoggedIn = false;

const items = computed(() => [
  { label: t("TITLES.home"), to: localePath("/") },
  { label: t("TITLES.gold alloys"), to: localePath("/gold-alloys") },
  { label: t("TITLES.silver alloys"), to: localePath("/silver-alloys") },
  { label: t("TITLES.who us"), to: localePath("/who-us") },
  { label: t("TITLES.contact us"), to: localePath("/contact-us") },
]);
const languages = [
  {
    code: "en",
    label: "English",
    flag: "twemoji:flag-united-states",
  },
  {
    code: "ar",
    label: "العربية",
    flag: "twemoji:flag-saudi-arabia",
  },
];

const toggle = () => (isOpen.value = !isOpen.value);

const handleScroll = () => {
  isSticky.value = window.scrollY > 40;
};

const handleClickOutside = (e: MouseEvent) => {
  if (langRef.value && !langRef.value.contains(e.target as Node)) {
    langOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
