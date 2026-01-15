<template>
  <VeeForm :validation-schema="schema" @submit="onSubmit" class="space-y-10">
    <InputsPhoneInput
      name="phone"
      v-model="form.phone"
      :placeholder="t('INPUTS.enter_phone')"
      :label="t('INPUTS.phone')"
    />
    <InputsPasswordInput
      name="password"
      v-model="form.password"
      :label="t('INPUTS.password')"
      :placeholder="t('INPUTS.enter_password')"
    />
    <NuxtLink
      :to="localePath('/auth/forgot-password')"
      class="text-sm my-5 text-main hover:underline block text-end font-medium"
    >
      {{ t("BUTTONS.forgot_password") }}
    </NuxtLink>
    <AuthButton type="submit" :loading="isSubmitting" class="w-full">
      {{ t("BUTTONS.login") }}
    </AuthButton>
  </VeeForm>
   <teleport to="body">
    <ModalSuccess :message="t('LABELS.success_login')" :persist="true" v-if="successModal"
  /></teleport>
</template>

<script setup lang="ts">
import * as yup from "yup";
const isSubmitting = ref(false);
const localePath = useLocalePath();
const router = useRouter();
const { t } = useI18n();
const successModal = ref(false);
function showSuccessModal() {
  successModal.value = true;
}

const schema = yup.object({
  phone: yup.object({
    code: yup.string().required(),
    number: yup.string().min(6).required(),
  }),
  password: yup.string().min(8).required(),
});

const form = ref({
  phone: {
    code: "+966",
    number: "",
  },
  password: "",
});


async function onSubmit(values: any) {
  isSubmitting.value = true;

  try {
    
    console.log("Form values:", values);
    showSuccessModal();
    setTimeout(() => {
      
    router.push(localePath({ path: "/" }));
    }, 4000);
  } catch (err: any) {
    console.error("Registration failed:", err);
  } finally {
    isSubmitting.value = false;
  }
}
</script>
