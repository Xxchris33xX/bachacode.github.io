<script setup lang="ts">
import NavLink from './NavLink.vue'
import { useModal } from '@js/modal'
const { navigation } = defineProps<{
  navigation: {
    href: string
    text: string
  }[]
}>()

const { modal, toggle, close } = useModal()
</script>

<template>
  <div class="md:hidden">
    <button aria-label="Burger Menu" @click="toggle">
      <svg viewBox="0 0 100 80" width="26" height="18" fill="lightgray">
        <rect width="100" height="20" rx="20" ry="20"></rect>
        <rect y="30" width="100" height="20" rx="20" ry="20"></rect>
        <rect y="60" width="100" height="20" rx="20" ry="20"></rect>
      </svg>
    </button>
    <!-- Menu -->
    <Teleport to="header">
      <div
        v-show="modal"
        class="flex flex-col fixed z-30 top-14 w-full h-full bg-slate-400 bg-opacity-10 backdrop-filter backdrop-blur-lg"
      >
        <div class="flex text-right justify-end p-6 text-6xl text-highlight mb-20">
          <button aria-label="close" @click="close">X</button>
        </div>
        <ul class="flex flex-col text-3xl text-center justify-center space-y-4">
          <li v-for="link in navigation">
            <NavLink :href="link.href" @close="close()" :text="link.text" />
          </li>
        </ul>
      </div>
    </Teleport>
  </div>
</template>
