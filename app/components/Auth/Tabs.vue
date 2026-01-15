<script setup lang="ts">
const modelValue = defineModel<'login' | 'register'>()
const {t}= useI18n();

const tabs = [
  { label: t('BUTTONS.login'), value: 'login' },
  { label: t('BUTTONS.create account'), value: 'register' }
]
</script>

<template>
  <div class="flex rounded-full bg-lightten  w-full p-2 md:p-2.5">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="modelValue = tab.value"
      class="flex-1 rounded-full p-2 md:p-3.5 text-base font-semibold transition duration-500 ease-in-out"
      :class="
        modelValue === tab.value
          ? 'btn shadow text-white'
          : 'text-primary hover:text-gray-700'
      "
    >
      {{ tab.label }}
    </button>
  </div>
</template>
