<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

type SelectItem = {
  label: string
  value: string | number
}

const props = defineProps<{
  items: SelectItem[]
  modelValue: SelectItem
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: SelectItem): void
}>()

const selected = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="mb-1 block text-sm font-medium">
      {{ label }} *
    </label>

    <Listbox v-model="selected">
      <div class="relative w-full">
        <ListboxButton
          class="flex items-center w-full rounded-full bg-graish py-3.5 px-4 text-right"
        >
          {{ selected.label }} 
          <Icon name="oui:arrow-down" class="size-4 ms-auto" />
        </ListboxButton>

        <ListboxOptions
          class="absolute z-10 mt-1 w-full rounded-2xl bg-graish shadow-lg p-2"
        >
          <ListboxOption
            v-for="item in items"
            :key="item.value"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              class="cursor-pointer rounded-xl px-4 py-2 text-right transition-colors"
              :class="{
                'bg-main text-white': selected,
                'bg-main/80 text-white': active && !selected,
              }"
            >
              {{ item.label }}
            </li>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  </div>
</template>
