<template>
  <div class="container mx-auto flex items-center justify-center py-2 md:py-10 min-h-screen px-4 md:px-0">
    <div
      class="border border-border rounded-3xl flex flex-col gap-10 justify-center items-center w-150 p-5 md:p-10 bg-white"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
