<template>
  <div
    class="relative w-full rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    <button
      class="absolute top-3 start-3 z-10 size-8 flex items-center justify-center rounded-full  bg-white shadow "
    >
      <Icon name="ph:heart" class="text-main  hover:text-red-500 transition duration-400  size-6 " />
    </button>

    <span
      v-if="product.discount"
      class="absolute flex gap-1 items-center  justify-center top-3 end-3 z-10 bg-light-red text-white text-xs h-6 p-1 rounded-md"
    >
     % {{ product.discount }}-
    <SvgIcon name="label" class="mt-0.5"/>

    </span>
  
    <div class="w-full h-48  flex items-center justify-center overflow-hidden">
      <NuxtLink :to="localePath('/products/' + product.id)" class="w-full h-full block">
      <NuxtImg
        :src="product.image"
        :alt="t(product.titleKey)"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      </NuxtLink>
    </div>

    <div class="p-4 flex flex-col gap-2">
      <h3 class="text-sm font-medium text-gray-800 line-clamp-2">
        {{ t(product.titleKey) }}
      </h3>

      <div class="flex items-center gap-1 text-sm">
        <div class="flex text-yellow-400">
          <Icon
            v-for="i in 5"
            :key="i"
            name="ph:star-fill"
            class="w-4 h-4"
          />
        </div>
        <span class="text-gray-500 text-xs">
          ({{ product.reviews }})
        </span>
      </div>

      <div class="flex items-center justify-between mt-2">
        <span class="text-lg font-semibold text-gray-900 flex justify-center items-center gap-1">
          {{ product.price.toLocaleString() }}
         <SvgIcon name="curr"  />

        </span>

        <button
          class="w-8 h-6  bg-white text-main border border-main rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-500"
        >
        <SvgIcon name="shopping-cart"  />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath= useLocalePath();
defineProps<{
  product: {type:Object
  }
}>()
</script>
