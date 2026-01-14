<template>
  <Html :lang="locale" :dir="dir">
    <Body :dir="dir">
      <div class="flex min-h-screen flex-col md:mb-0">
      <NavbarSliderNav />
        <Navbar />
       <!--  <NoInternetConnection v-if="!isOnline" /> -->
        <div >
          <div class="app_wrapper" id="app_wrapper">
            <slot />
          </div>
        </div>
        <Footer class="mt-auto" />
      </div>
    </Body>
  </Html>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import {useAppAuth} from "~/store/auth";
const appStore = useAppStore();
const appAuth = useAppAuth();
const i18n = useI18n();
const locale = computed(() => i18n.locale.value);
const isOnline = ref(true);
const { $api } = useNuxtApp();
const dir = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));


let headSettings = {
  titleTemplate: "",
  link: [],
  htmlAttrs: {
    lang: "",
  },
  meta: [],
  style: [],
};



onMounted(async () => {
  isOnline.value = window.navigator.onLine;
  window.addEventListener("online", () => (isOnline.value = true));
  window.addEventListener("offline", () => (isOnline.value = false));
});

useSeoMeta({
  ogImage: "/logo.png",
  ogSiteName: "SaaS",
  description: "",
  keywords: "",
  twitterTitle: "",
  twitterDescription: "",
  twitterImage: "/logo.png",
});


</script>

