<script setup lang="ts">
const { href, text } = defineProps<{
  href: string
  text: string
}>()
defineEmits(['close'])
</script>

<template>
  <a
    :href="href"
    @click="$emit('close')"
    class="nav-option hover:transition-all text-sm lg:text-base hover:text-highlight hover:border-b-2 hover:border-b-highlight"
  >
    {{ text }}
  </a>
</template>

<style>
.selected-option {
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(237 91 45 / var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgb(237 91 45 / var(--tw-text-opacity));
}
</style>
