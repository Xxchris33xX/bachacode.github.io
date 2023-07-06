<script setup lang="ts">
const { icon, name } = defineProps<{
    icon: string
    name: string
}>()
</script>

<template>
    <div
        class="px-4 py-6 space-y-4 mx-2 w-32 mt-3 bg-item rounded-xl border-secondary border-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
        <i :class="`${icon} text-5xl`" />
        <p class="text-sm">{{ name }}</p>
    </div>
</template>