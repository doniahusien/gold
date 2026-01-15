<template>
  <VeeField :name="name" v-slot="{ value, handleChange,meta }">
    <div class=" w-full flex flex-col gap-2">
      <label class="text-primary font-semibold text-sm ">
        {{ label ?? "" }} *
      </label>

      <div
        class="group flex w-full items-center rounded-full  bg-graish transition-all py-4"
        :class="error ? 'border-red-500 focus-within:ring-red-500/30' : ''"
      >
       
        <div class="flex-1">
          <input
            :type="showPassword ? 'text' : 'password'"
            :value="value"
            @input="handleChange(($event.target as HTMLInputElement).value)"
            :placeholder="placeholder"
            class="w-full px-4 text-sm bg-transparent focus:outline-none"
          />
        </div>

        <button
          type="button"
          class="px-4 flex justify-center items-center text-primary"
          @click="showPassword = !showPassword"
        >
          <Icon
            :name="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
            class="text-lg"
          />
        </button>
      </div>

      <VeeErrorMessage :name="name" class="mt-1 text-xs text-red-500" />
    </div>
  </VeeField>
</template>
<script setup lang="ts">
import {
  Field as VeeField,
  ErrorMessage as VeeErrorMessage,
  useFieldError,
} from "vee-validate";

const props = defineProps<{
  name: string;
  label: string;
  placeholder?: string;
}>();

const showPassword = ref(false);
const error = useFieldError(() => props.name);
</script>
<style scoped>
input::placeholder {
  color: #9ca3af;
}
</style>
