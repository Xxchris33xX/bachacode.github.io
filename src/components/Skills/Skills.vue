<script setup lang="ts">
import { ref } from 'vue';
import SkillCard from './SkillCard.vue';
import SkillSelector from './SkillSelector.vue';
const { skillGroups, skillTypes } = defineProps<{
  skillGroups: {
    id: Number
    set: {
      icon: string
      name: string
    }[]
  }[]
  skillTypes: {
    id: number
    name: string
  }[]
}>()

const selectSkill = (id: number) => {
  activeId.value = id;
}

const activeId = ref(0)
</script>

<template>
  <div class="flex flex-col justify-between items-center mx-auto px-6 pt-16 pb-3">
    <div class="flex flex-col items-center relative">
      <SkillSelector :skill-types="skillTypes" @select-skill="selectSkill" :is-active="activeId" />
      <ul>
        <li v-for="skillGroup in skillGroups">
          <div v-if="activeId === skillGroup.id" :key="`${skillGroup.id}-skill`"
            class="grid grid-cols-2 md:grid-cols-4 text-center mt-6 w-72 md:w-skills">
            <span v-for="skill in skillGroup.set">
              <SkillCard :icon="skill.icon" :name="skill.name" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  @apply transition-all duration-500 ease-out;
}

.list-enter-from,
.list-leave-to {
  @apply opacity-0 translate-x-8;
}
</style>
