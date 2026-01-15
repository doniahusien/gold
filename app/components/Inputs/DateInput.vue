<template>
  <div class="w-full flex flex-col gap-2">
    <label class="text-primary font-semibold text-sm  " >{{label??''}} *</label>

    <VueDatePicker
      v-model="internalValue"
      :locale="dateFnsLocale"
      mode="date"
      :time-config="{ enableTimePicker: false }"
      auto-apply
      :min-date="minDate"
      :placeholder="placeholder"
      class="datepicker-wrapper"
      :class="isError ? 'datepicker-error' : ''"
    >
      <template #input-icon>
        <Icon
          name="solar:calendar-bold-duotone"
          class="absolute start-2 size-5 text-gray-dark pointer-events-none"
        />
      </template>
    </VueDatePicker>

    <VeeErrorMessage :name="name" class="mt-1 text-xs text-red-500" />
  </div>
</template>


<script setup lang="ts">
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import en from "date-fns/locale/en-US";
import ar from "date-fns/locale/ar";

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String, default: "Select date" },
  minDate: { type: Date, default: () => new Date() },
  checkout: { type: Boolean, default: false },
  label: { type: String, default: "" },
});

const { locale } = useI18n();
const dateFnsLocale = computed(() => (locale.value === "ar" ? ar : en));
const { value: internalValue, meta } = useField(props.name);
const isError = computed(() => meta.touched && !meta.valid);

</script>

<style scoped>

.datepicker-wrapper :deep(.dp__input) {
  width: 100%;
  padding-left: 2.2rem;
  padding-right: 2.2rem; 
  padding-top:0.8rem;
  padding-bottom:0.8rem;
  background: transparent;
  border-radius:30px; 
  outline: none;
  background-color: rgba(247, 248, 250, 1);
  border:0;
  color: rgb(17 24 39);
}

.datepicker-wrapper :deep(.dp__input::placeholder) {
  color:  #9ca3af !important;
  opacity: 1;
}

.datepicker-wrapper :deep(.dp__input_icon) {
  left: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.datepicker-error :deep(.dp__input) {
  border-color: #ef4444 !important;
}
</style>