<script setup lang="ts">
const { href, text } = defineProps<{
  href: string
  text: string
}>()
defineEmits(['close'])
</script>

<template>
  <a :href="href" @click="$emit('close')"
    class="nav-option hover:transition-all text-sm lg:text-base hover:text-highlight hover:border-b-2 hover:border-b-highlight">
    {{ text }}
  </a>
</template>

<style scoped>
.selected-option {
  @apply border-b-2 border-opacity-100 border-orange-600 text-opacity-100 text-orange-600
}
</style>
