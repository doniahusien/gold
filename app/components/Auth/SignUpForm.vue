<template>
  <VeeForm :validation-schema="schema" @submit="onSubmit" class="space-y-8">
    <VeeField name="image" v-slot="{ value, errorMessage, setValue }">
      <InputsBaseFile
        :label="t('LABELS.profile_picture')"
        :item-value="imagePreview"
        @update:image="
          (file) => {
            imageFile = file;
            setValue(file);
          }
        "
        @update:itemValue="(preview) => (imagePreview = preview)"
        accept="image/*"
      />

      <p v-if="errorMessage" class="text-red-500 text-sm text-center">
        {{ errorMessage }}
      </p>
    </VeeField>
    <InputsBaseInput
      id="username"
      name="username"
      type="text"
      :label="t('INPUTS.username')"
      :placeholder="t('INPUTS.enter_username')"
      v-model="form.username"
    />
    <InputsBaseInput
      id="email"
      name="email"
      type="email"
      :label="t('INPUTS.email')"
      :placeholder="t('INPUTS.enter_email')"
      v-model="form.email"
    />
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
    <InputsPasswordInput
      name="password_confirmation"
      v-model="form.password_confirmation"
      :label="t('INPUTS.confirm_password')"
      :placeholder="t('INPUTS.enter_password')"
    />

    <InputsBaseSelect
      v-model="form.country"
      :items="countries"
      :label="t('INPUTS.country')"
    />
    <InputsBaseSelect v-model="form.gender" :items="gender" :label="t('INPUTS.gender')" />
    <!-- <InputsDateInput
      name="date"
      :placeholder="t('INPUTS.enter_DOB')"
      :label="t('INPUTS.DOB')"
    /> -->
    <AuthButton type="submit" :loading="isSubmitting" class="w-full">
      {{ t("BUTTONS.create account") }}
    </AuthButton>
  </VeeForm>
</template>

<script setup lang="ts">
  
import * as yup from "yup";
const { t } = useI18n();
const localePath = useLocalePath();
const isSubmitting = ref(false);

const date = ref(new Date());
const imagePreview = ref("");
const imageFile = ref(null);
const router = useRouter();
const countries = [
  { label: "مصر", value: "eg" },
  { label: "السعودية", value: "sa" },
  { label: "الإمارات", value: "uae" },
  { label: "قطر", value: "qa" },
];
const gender = [
  { label: t("LABELS.gender_male"), value: "male" },
  { label: t("LABELS.gender_female"), value: "female" },
];
const genderType = ref(gender[0]);
const country = ref(countries[0]);

const schema = yup.object({
  image: yup
    .mixed()
    .required(t("VALIDATION.image_required"))
    .test("fileType", t("VALIDATION.image_invalid"), (file: any) => file instanceof File),
  phone: yup.object({
    code: yup.string().required(),
    number: yup
      .string()
      .min(6, t("VALIDATION.phone_min"))
      .required(t("VALIDATION.phone_required")),
  }),
  password: yup
    .string()
    .min(8, t("VALIDATION.password_min"))
    .required(t("VALIDATION.password_required")),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], t("VALIDATION.password_mismatch"))
    .required(t("VALIDATION.password_required")),
  username: yup
    .string()
    .min(3, t("VALIDATION.username_min"))
    .required(t("VALIDATION.username_required")),
  email: yup
    .string()
    .email(t("VALIDATION.email_invalid"))
    .required(t("VALIDATION.email_required")),
});

const form = ref({
  phone: {
    code: "+966",
    number: "",
  },
  password: "",
  username: "",
  email: "",
  password_confirmation: "",
  country: country.value,
  gender: genderType.value,
});

async function onSubmit(values: any) {
  isSubmitting.value = true;

  try {
    console.log("Form values:", values);

    router.push(localePath({ path: "/auth/verify" }));
  } catch (err: any) {
    console.error("Registration failed:", err);
  } finally {
    isSubmitting.value = false;
  }
}
</script>
