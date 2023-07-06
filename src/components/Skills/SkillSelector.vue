<script setup lang="ts">
const { skillTypes, isActive } = defineProps<{
    skillTypes: {
        name: string
        id: number
    }[];
    isActive: number
}>()
defineEmits(['selectSkill']);
</script>

<template>
    <div
        class="flex flex-col bg-item border-third border-2 py-10 px-4 md:flex-row md:space-x-6 justify-center text-center shadow-lg shadow-item">
        <template v-for="skill in skillTypes">
            <button @click="$emit('selectSkill', skill.id)" :class="`${isActive === skill.id ? 'selected-skill' : ''} p-2`">
                {{ skill.name }}
            </button>
        </template>
    </div>
</template>
<style scoped>
.selected-skill {
    @apply border-2 border-highlight text-highlight;
}
</style>