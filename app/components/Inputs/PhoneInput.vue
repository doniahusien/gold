<template>
  <VeeField :name="name" v-slot="{ value, handleChange }">
    <div class=" w-full flex flex-col gap-2">
    <label class="text-primary font-semibold text-sm  " >{{label??''}} *</label>
      <div
        class=" flex w-full items-stretch rounded-full  bg-graish transition-all outline:-none py-4"
        :class="error ? 'border-red-500 focus-within:ring-red-500/30' : ''"
      >
        <div class="relative flex items-center px-3 border-e border-primary">
          <Icon name="ri:arrow-down-s-line" class="absolute start-4 text-primary text-sm" />

          <select
            v-model="localValue.code"
            @change="updateField(handleChange)"
            class="appearance-none bg-transparent ps-6 pe-2 text-xs font-normal focus:outline-none  "
          >
            <option v-for="country in countries" :key="country.id" :value="country.code">
              {{ country.code }}
            </option>
          </select>
          <Icon :name="selectedCountry.flag" class="size-4 " />
        </div>

        <div class="flex-1">
          <input
            v-model="localValue.number"
            @input="updateField(handleChange)"
            type="text"
            inputmode="numeric"
            :placeholder="placeholder"
            class="w-full px-4 text-sm bg-transparent focus:outline-none"
          />
        </div>
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
  label:string;
  placeholder?: string;
}>();

const modelValue = defineModel<{
  code: string;
  number: string;
}>();

const countries = [
  { id: 2, name: "Saudi Arabia", code: "+966", flag: "twemoji:flag-saudi-arabia" },
  { id: 3, name: "UAE", code: "+971", flag: "twemoji:flag-united-states" },
];

const error = useFieldError(() => props.name);

const localValue = ref(
  modelValue.value ?? {
    code: countries[0].code,
    number: "",
  }
);

watch(
  localValue,
  (val) => {
    modelValue.value = val;
  },
  { deep: true }
);
const selectedCountry = computed(
  () => countries.find((c) => c.code === localValue.value.code)!
);

function updateField(handleChange: (val: any) => void) {
  handleChange(localValue.value);
}
</script>

<style scoped>
input::placeholder {
  color: #9ca3af;
}
</style>
