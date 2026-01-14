import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  runtimeConfig: {
   
    public: {
    /*   googleMapsApiKey: "AIzaSyA8qi0TK3EDod0LlTXbQFf_DyEptiGgPFU", */
      baseURL: "",
      general: "",
    },
  },

  app: {
    head: {
            title: 'بن عبدالله -متجر الذهب والفضة',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'متجر بن عبدالله للذهب والفضة - أفضل العروض على المجوهرات الذهبية والفضية' },
                 { rel: 'icon', type: 'image/png', href: '/logo.png' },
                {
                    name: 'robots',
                    content: `index,follow`,
                },
            ],
    },
  },

  modules: ['unplugin-icons/nuxt', 'nuxt-swiper', "@nuxt/image", "@nuxt/ui", 'nuxt-icon', [
    "@vee-validate/nuxt",
    {
      autoImports: true,
      componentNames: {
        Form: "VeeForm",
        Field: "VeeField",
        FieldArray: "VeeFieldArray",
        ErrorMessage: "VeeErrorMessage",
      },
    },
  ], [
    "@nuxtjs/i18n",
    {
      defaultLocale: "ar",
      langDir: "locales",
      lazy: true,
      locales: [
        { code: "en", file: "en.json", dir: "ltr", name: "English" },
        { code: "ar", file: "ar.json", dir: "rtl", name: "عربي" },
      ],
      detectBrowserLanguage: false,
      strategy: "prefix_except_default",
      vueI18n: "./i18n.config.ts",

    },
  ], "@pinia/nuxt", "@stefanobartoletti/nuxt-social-share", "nuxt-marquee"],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },

  css: ["@/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});