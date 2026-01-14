<template>
    <div class="container mx-auto flex flex-col justify-center items-center gap-5 px-4 md:px-0">
        <h2 class="title">{{ t("TITLES.recent products") }}</h2>
        <p class="text-center max-w-2xl text-gray-600">
            {{ t("LABELS.recent_desc") }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        <CardProduct  v-for="product in products" :key="product.id" :product="product" />
            
        </div>
        <NuxtLink :to="localePath('/products')" class="cursor-pointer border border-main text-main bg-white hover:bg-gold hover:text-white  rounded-full flex items-center justify-center h-12 w-62 transition-colors duration-500 ease-in-out">{{t('BUTTONS.see all products')}}</NuxtLink>
        
    </div>
</template>
<script setup>
const { t } = useI18n();
const localePath= useLocalePath();

const products = computed(() => [
  {
    id: 1,
    titleKey: "products.gold_bar_50g_999",
    price: 32000,
    currency: "EGP",
    rating: 4,
    reviews: 12,
    image:  "/images/gold2.jpg",
    discount: null,
  },
  {
    id: 2,
    titleKey: "products.silver_bar_100g_999",
    price: 1500,
    currency: "EGP",
    rating: 4,
    reviews: 14,
    image:  "/images/gold3.png",
    discount: 10,
  },
  {
    id: 3,
    titleKey: "products.gold_bar_100g_24k",
    price: 55000,
    currency: "EGP",
    rating: 3,
    reviews: 10,
    image:  "/images/silver1.png",
    discount: null,
  },
  {
    id: 4,
    titleKey: "products.gold_bar_1kg_24k",
    price: 545000,
    currency: "EGP",
    rating: 2,
    reviews: 12,
    image:  "/images/gold2.jpg",
    discount: 10,
  },
  {
    id: 5,
    titleKey: "products.silver_bar_1kg_999",
    price: 9500,
    currency: "EGP",
    rating: 3,
    reviews: 25,
    image:  "/images/silver2.png",
    discount: null,
  },
  {
    id: 6,
    titleKey: "products.gold_bar_50g_24k",
    price: 32000,
    currency: "EGP",
    rating: 5,
    reviews: 12,
    image:  "/images/gold4.png",
    discount: 10,
  },
  {
    id: 7,
    titleKey: "products.gold_bar_025g_24k",
    price: 1000,
    currency: "EGP",
    rating: 4,
    reviews: 10,
    image:  "/images/silver3.jpg",
    discount: null,
  },
  {
    id: 8,
    titleKey: "products.gold_bar_025g_24k",
    price: 1000,
    currency: "EGP",
    rating: 4,
    reviews: 10,
    image:  "/images/gold5.jpg",
    discount: null,
  }
]);
</script>