<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    :class="[variantClasses, sizeClasses, $attrs.class]"
  >
    <span
      v-if="loading"
      class="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"
    />

    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as () => "primary" | "outline" | "ghost",
    default: "primary",
  },
  size: {
    type: String as () => "sm" | "md" | "lg",
    default: "md",
  },
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "outline":
      return "border border-main text-main hover:bg-main hover:text-white";
    case "ghost":
      return "text-main hover:bg-main/10";
    default:
      return "bg-main text-white hover:bg-main/90";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "py-2 px-5 text-sm";
    case "lg":
      return "py-5 px-10 text-lg";
    default:
      return "py-4 px-8 text-base";
  }
});
</script>
