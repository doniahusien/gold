<template>
  <div
    class="bg-[#00000083] flex items-center justify-center fixed bottom-0 left-0 w-full h-full z-50 px-5 md:p-0"
    @click="close"
  >
    <div
      class="bg-white rounded-2xl w-full md:w-135 p-5 md:p-8 overflow-y-auto text-center"
    >
      <NuxtImg
        src="/images/success.gif"
        alt="success"
        class="w-50 h-30 md:w-90 md:h-45  object-cover mx-auto"
      />
      <p class="text-primary text-base md:text-2xl font-semibold ">{{ message || 'Default message' }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  persist: {
    required: false,
    default: false,
  },
  title: {
    required: false,
  },
  message: {
    required: false,
  },
  classes: {
    type: String,
    required: false,
    default: null,
  },
  titleClasses: {
    type: String,
    required: false,
    default: null,
  },
  iconColor: {
    type: String,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["close"]);

function close() {
  if (props.persist) return;

  emit("close");
}
</script>

<style scoped>
.success-modal-content {
  animation: show-modal 0.3s 0.1s forwards ease-in-out;
}

@keyframes show-modal {
  0% {
    bottom: -100%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
</style>
