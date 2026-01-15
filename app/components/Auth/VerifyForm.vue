<template>
  <AuthContainer>
    <div class="space-y-4 mx-auto text-center">
      <h2 class="title">{{ t("TITLES.identity_confirmation") }}</h2>
      <p class="text-base font-medium text-gray-500">
        {{ t("LABELS.verification_code_prompt") }}
      </p>
    </div>
    <VeeForm :validation-schema="schema" @submit="onSubmit" class="w-full space-y-8">
      <InputsPinInput v-model="form.code" />
      <AuthButton type="submit" :loading="isSubmitting" class="w-full">
        {{ t("BUTTONS.send") }}
      </AuthButton>
    </VeeForm>
    <div class="flex justify-between w-full items-center">
      <span class="text-gray-400 font-normal text-sm">
        {{ t("BUTTONS.didnt_receive_code") }}
        <button
          class="text-main font-medium"
          @click="resendCode"
          :disabled="isResending || countdown > 0"
        >
          {{ t("BUTTONS.resend") }}
        </button>
      </span>
      <span class="text-gray-400 text-sm">{{ formatCountdown }}</span>
    </div>
  </AuthContainer>
  <teleport to="body">
    <ModalSuccess :message="t('LABELS.success_login')" :persist="true" v-if="successModal" />
  </teleport>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { ref, reactive, computed } from "vue";
const { t } = useI18n();
const successModal = ref(false);
const countdown = ref(0); 
const isResending = ref(false);
const form = reactive({ code: "" });
const isSubmitting = ref(false);
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

const formatCountdown = computed(() => {
  const minutes = Math.floor(countdown.value / 60);
  const seconds = countdown.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

async function resendCode() {
  if (countdown.value > 0 || isResending.value) return;

  isResending.value = true;
  countdown.value = 60; 
  const interval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--; 
    } else {
      clearInterval(interval); 
      isResending.value = false; 
    }
  }, 1000); 
  try {
    console.log("Resending verification code...");
   
  } catch (err) {
    console.error("Error resending code:", err);
  }
}

function showSuccessModal() {
  successModal.value = true;
}

const schema = yup.object({
  // code: yup.string().required(t("VALIDATION.code_required")),
});

async function onSubmit(values: any) {
  isSubmitting.value = true;
  try {
    console.log("Form values:", values);
    if (route.query.type === "forgot") {
      await router.push(localePath("/auth/change-password"));
    } else {
      showSuccessModal();
      setTimeout(() => {
        router.push(localePath({ path: "/" }));
      }, 4000);
    }
  } catch (err: any) {
    console.error("Registration failed:", err);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped></style>
