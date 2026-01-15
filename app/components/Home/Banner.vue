<template>
  <div class="relative lg:h-[calc(100vh-80px)] h-64 overflow-hidden">
    <Swiper
      :modules="[Navigation, Autoplay, EffectFade, Pagination]"
      effect="fade"
      :fadeEffect="{ crossFade: true }"
      :slides-per-view="1"
      :loop="true"
      :speed="1200"
      :autoplay="{ delay: 5000 }"
      :navigation="navigationOptions"
      :pagination="{ clickable: true }"
      @swiper="onSwiperInit"
      class="h-full"
    >
      <SwiperSlide
        v-for="item in sliders"
        :key="item.key"
        class="bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: `url('${item.image}')`, objectPosition: 'center' }"
      >
        <div class="overlay"></div>
        <div
          class="absolute space-y-5 inset-0 md:max-w-7xl mx-auto text-white flex flex-col justify-center z-10 opacity-0  slide-content px-4 md:px-0"
        >
          <div
            v-html="item.title"
            class="text-lg md:text-2xl max-w-140 lg:text-5xl font-semibold leading-relaxed"
          ></div>

          <div
            v-html="item.desc"
            class="text-sm md:text-2xl max-w-2xl mb-6 font-medium leading-relaxed"
          ></div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";

const { t } = useI18n();
const localePath = useLocalePath();
const prevEl = ref(null);
const nextEl = ref(null);

const navigationOptions = ref({
  prevEl: null,
  nextEl: null,
});

const onSwiperInit = (swiper) => {
  swiper.params.navigation.prevEl = prevEl.value;
  swiper.params.navigation.nextEl = nextEl.value;

  swiper.navigation.init();
  swiper.navigation.update();
};

const sliders = ref([
  {
    key: "start",
    image: "/images/slider1.jpg",
    title: t("LABELS.SLIDER.gold"),
    desc: t("LABELS.SLIDER.gold_desc"),
  },
  {
    key: "center",
    image: "/images/slider2.jpg",
    title: t("LABELS.SLIDER.silver"),
    desc: t("LABELS.SLIDER.silver_desc"),
  },
]);
</script>
<style scoped>
.slide-content {
  opacity: 0;
  transform: translateY(0);
  transition: opacity 1s ease, transform 1s ease;
}

.swiper-slide-active .slide-content {
  opacity: 1;
  transform: translateY(0);
}
::v-deep(.swiper-pagination) {
  bottom: 20px;
  text-align: center;
  z-index: 20;
}

::v-deep(.swiper-pagination-bullet) {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 6px !important;
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

::v-deep(.swiper-pagination-bullet-active) {
  width: 40px;
  height: 6px; /* thin line */
  background: white; /* active color */
  border-radius: 5px; /* rounded line ends */
}
</style>
