<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavLink from './NavLink.vue'
const { navigation } = defineProps<{
  navigation: {
    href: string
    text: string
  }[]
}>()

const navbar = ref<HTMLElement>()

const titles = ref([])

const viewedTitle = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    // Revisa si esta en el tope de la pagina o no
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.value.classList.add('scrolled-navbar')
    } else {
      navbar.value.classList.remove('scrolled-navbar')
    }

    // Actualiza la posición de los titulos
    titles.value = [...document.querySelectorAll('h2')].sort((a, b) => {
      return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
    })

    // Actualiza el titulo en el viewport actualmente
    viewedTitle.value = [...document.querySelectorAll('h2')].indexOf(titles.value[0])
    document
      .querySelectorAll('.selected-option')
      .forEach((c) => c.classList.remove('selected-option'))
    document.querySelectorAll('.nav-option')[viewedTitle.value].classList.add('selected-option')
  })
})
</script>

<template>
  <nav ref="navbar"
    class="fixed z-50 overflow-hidden flex justify-between w-full items-center mx-auto px-14 py-5 bg-item rounded-b-3xl transition-all duration-700 font-text">
    <div class="text-lg font-semibold">
      <a href="#">BachaCode</a>
    </div>
    <div class="flex space-x-3 items-center">
      <!-- Nav Links -->
      <ul class="hidden md:flex space-x-6 items-center">
        <li v-for="link in navigation">
          <NavLink :href="link.href" :text="link.text" />
        </li>
      </ul>
      <!-- Lang Selector -->
      <slot name="lang-selector" />
      <!-- Burger Menu -->
      <slot name="burger-menu" />
    </div>
  </nav>
</template>

<style>
.scrolled-navbar {
  --tw-bg-opacity: 0.7;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

[x-cloak] {
  display: none;
}

.selected-skill {
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(237 91 45 / var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgb(237 91 45 / var(--tw-text-opacity));
}

.selected-option {
  @apply border-b-2 border-opacity-100 border-orange-600 text-opacity-100 text-orange-600
}
</style>
