<template>
  <AuthContainer>
    <AuthTabs v-model="tab" />
    <div class="w-full">
      <AuthLoginForm v-if="tab == 'login'" />
      <AuthSignUpForm v-if="tab == 'register'" />
    </div>
  </AuthContainer>
</template>

<script setup lang="ts">
const route = useRoute()

const tab = ref<'login' | 'register'>(
  (route.query.tab as 'login' | 'register') || 'register'
)

watch(
  () => route.query.tab,
  (val) => {
    if (val === 'login' || val === 'register') {
      tab.value = val
    }
  }
)
</script>
