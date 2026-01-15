<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div class="w-full flex flex-col gap-2">
      <label v-if="label" :for="id" class="text-primary font-semibold text-sm flex gap-2 items-center">
        {{ label }}
        <span v-if="optional" class="text-sub">(Optional)</span>
      </label>

      <div
        class="group flex items-center w-full rounded-full bg-graish transition-all relative py-3.5"
        
      >
        <div v-if="$slots.prepend" class="absolute start-3 flex items-center">
          <slot name="prepend"></slot>
        </div>

        <textarea
          v-if="type === 'textarea'"
          v-bind="field"
          :id="id"
          :rows="rows"
          :placeholder="placeholder"
          @input="$emit('update:value', $event.target.value)"
          class="input resize-none h-40 pl-4 pr-4 w-full"
        ></textarea>

        <input
          v-else
          v-bind="field"
          :id="id"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :minlength="minlength"
          :maxlength="maxlength"
          :size="size"
          :pattern="pattern"
          :autocomplete="autocomplete"
          @input="$emit('update:value', $event.target.value)"
          @change="$emit('change')"
          class="input flex-1 text-sm px-4 w-full bg-transparent focus:outline-none"
        />

        <div v-if="$slots.append" class="absolute end-3 flex items-center">
          <slot name="append"></slot>
        </div>
      </div>

      <VeeErrorMessage
        :name="name"
        as="div"
        class="text-red-500 mt-1 text-xs"
      />
    </div>
  </VeeField>
</template>

<script setup lang="ts">
import { Field as VeeField, ErrorMessage as VeeErrorMessage, useField } from "vee-validate";

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: String,
  placeholder: String,
  type: { type: String, default: "text" },
  rows: { type: Number, default: 4 },
  disabled: Boolean,
  minlength: Number,
  maxlength: Number,
  size: Number,
  pattern: String,
  autocomplete: { type: String, default: "off" },
  optional: { type: Boolean, default: false },
  value: [String, Number],
});

const field = useField(props.name);

watch(
  () => props.value,
  (value) => {
    if (value || value === 0) field.setValue(value);
  },
  { immediate: true }
);
</script>

<style scoped>
.input::placeholder {
  color: #9ca3af;
}

</style>
