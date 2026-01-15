<template>
  <AuthContainer>
    <div class="space-y-5 mx-auto text-center">
      <h2 class="title">{{ t("TITLES.restore_password") }}</h2>
      <p class="text-base font-medium text-gray-500">
        {{ t("LABELS.restore_password") }}
      </p>
    </div>
    <VeeForm :validation-schema="schema" @submit="onSubmit" class="w-full space-y-5">
      <InputsPhoneInput
        name="phone"
        v-model="form.phone"
        :placeholder="t('INPUTS.enter_phone')"
        :label="t('INPUTS.phone')"
      />
      <AuthButton  type="submit" :loading="isSubmitting" class="w-full">
      {{ t("BUTTONS.continue") }}
    </AuthButton>
    </VeeForm>
    
    <NuxtLink
      :to="localePath('/auth/sign-up')"
      class="text-sm text-gray-400 hover:underline block text-center font-medium"
    >
      {{ t("BUTTONS.back_to_login") }}
    </NuxtLink>
  </AuthContainer>
</template>

<script setup lang="ts">
import * as yup from "yup";
const isSubmitting = ref(false);
const localePath = useLocalePath();
const { t } = useI18n();
const router = useRouter();
const schema = yup.object({
  phone: yup.object({
    code: yup.string().required(),
    number: yup.string().min(6, t("VALIDATION.phone_min")).required(t("VALIDATION.phone_required")),
  }),
});


const form = ref({
  phone: {
    code: "+966",
    number: "",
  },
});
async function onSubmit(values: any) {
  isSubmitting.value = true;

  try {
    console.log("Form values:", values);

    router.push(localePath({ path: "/auth/verify", query: { type: "forgot" } }));
  } catch (err: any) {
    console.error("Registration failed:", err);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped></style>
