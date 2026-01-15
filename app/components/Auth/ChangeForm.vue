<template>
  <AuthContainer>
    <div class="space-y-5 mx-auto text-center">
      <h2 class="title">{{ t("TITLES.change_password") }}</h2>
      <p class="text-base font-medium text-gray-500">
        {{ t("LABELS.change_password") }}
      </p>
    </div>
    <VeeForm :validation-schema="schema" @submit="onSubmit" class="w-full space-y-8">
      <InputsPasswordInput
        name="password"
        v-model="form.password"
        :label="t('INPUTS.new_password')"
        :placeholder="t('INPUTS.enter_new_password')"
      />
      <InputsPasswordInput
        name="password_confirmation"
        v-model="form.password_confirmation"
        :label="t('INPUTS.confirm_new_password')"
        :placeholder="t('INPUTS.enter_new_password')"
      />
      <AuthButton type="submit" :loading="isSubmitting" class="w-full">
        {{ t("BUTTONS.confirm") }}
      </AuthButton>
    </VeeForm>
  </AuthContainer>
  <teleport to="body">
    <ModalSuccess :message="t('LABELS.success_change')" :persist="true" v-if="successModal"
  /></teleport>
</template>

<script setup lang="ts">
import * as yup from "yup";
const localePath = useLocalePath();
const successModal = ref(false);
function showSuccessModal() {
  successModal.value = true;
}

const { t } = useI18n();
const isSubmitting = ref(false);
const schema = yup.object({
  password: yup.string().required(t("VALIDATION.password_required")),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], t("VALIDATION.password_mismatch"))
    .required(t("VALIDATION.password_required")),
});

const router = useRouter();

const form = ref({
  password: "",
  password_confirmation: "",
});
async function onSubmit(values: any) {
  isSubmitting.value = true;

  try {
    console.log("Form values:", values);
    showSuccessModal();
     setTimeout(() => {
      router.push(
        localePath({
          path: "/auth/sign-up",
          query: { tab: "login" },
        })
      );
    }, 3000);
  } catch (err: any) {
    console.error("Registration failed:", err);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped></style>
