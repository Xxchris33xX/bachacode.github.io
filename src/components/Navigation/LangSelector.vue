<script setup lang="ts">
import { useModal } from '@js/modal'
import { vOnClickOutside } from '@vueuse/components'
import type { OnClickOutsideHandler } from '@vueuse/core'
const { selectedFlag, selected } = defineProps<{
  selectedFlag: string
  selected: string
}>()
const { modal, toggle } = useModal()

const dropdownHandler: OnClickOutsideHandler = (event) => {
  modal.value = false
}
</script>

<template>
  <div class="flex space-x-3">
    <div class="md:flex flex-col space-x-3 items-center">
      <div class="pl-4 md:hidden">
        <button aria-label="language" @click.stop="toggle"><i class="icon-language"></i></button>
      </div>
      <div class="hidden md:inline w-20">
        <button @click.stop="toggle">
          <span :class="`fi ${selectedFlag} mx-1`"></span>{{ selected
          }}<i class="mx-1" :class="modal ? 'icon-close' : 'icon-chevdown'"></i>
        </button>
      </div>
      <Teleport to="header">
        <Transition name="dropdown">
          <ul v-if="modal" v-on-click-outside.bubble="dropdownHandler"
            class="fixed z-40 right-3 top-16 md:right-28 md:top-20 bg-item py-6 px-14 border rounded-lg border-primary">
            <li>
              <a href="/" class="cursor-pointer"><span :class="`fi fi-es cursor-pointer mx-1`"></span>Español</a>
            </li>
            <li>
              <a href="/en" class="cursor-pointer"><span :class="`fi fi-us cursor-pointer mx-1`"></span>English</a>
            </li>
          </ul>
        </Transition>
      </Teleport>
    </div>
  </div>
</template>

<style>
.dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
