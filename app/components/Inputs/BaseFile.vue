<template>
  <div class="w-full flex flex-col items-center">
    <div class="relative">
      <div
        class="w-27 h-27 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center cursor-pointer hover:border-main transition"
        @click="triggerFile"
      >
        <img
          v-if="preview"
          :src="preview"
          alt="preview"
          class="w-full h-full object-cover"
        />

        <NuxtImg
          v-else
          src="/images/user.png"
          class="w-full h-full bg-bottom p-2 mt-8.5 object-cover "
        />
      </div>

      <div
        class="absolute bottom-0 end-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white border border-white cursor-pointer"
        @click="triggerFile"
      >
        +
      </div>

      <input
        ref="refFile"
        type="file"
        :accept="accept"
        :multiple="multiple"
        class="hidden"
        @change="onFileChange"
      />
    </div>

    <label v-if="label" class="mt-2 text-sm font-medium text-primary">{{
      label
    }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  accept: { type: String, default: "image/*" },
  multiple: { type: Boolean, default: false },
  itemValue: { required: false },
  returnFile: { type: Boolean, default: false },
});

const emit = defineEmits(["update:itemValue", "update:image"]);

const preview = ref(props.itemValue || "");
const refFile = ref(null);

watch(
  () => props.itemValue,
  (v) => {
    if (v) preview.value = v;
  }
);

onMounted(() => {
  if (props.itemValue) preview.value = props.itemValue;
});

function triggerFile() {
  if (refFile.value) refFile.value.click();
}

function onFileChange(e) {
  const files = e.target.files;
  if (!files || !files.length) return;
  handleFile(files[0]);
}

function handleFile(file) {
  if (!file) return;

  preview.value = URL.createObjectURL(file);
  emit("update:itemValue", preview.value);

  if (props.returnFile) {
    emit("update:image", file);
    return;
  }

  // If you want to upload to server, you can add axios logic here
  emit("update:image", file);
}
</script>

<style scoped>
/* Primary color, you can adjust */
.bg-primary {
  background-color: #f6b93b; /* match your screenshot gold/yellow */
}
</style>
