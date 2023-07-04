import { defineConfig } from 'astro/config'

// Alpinejs integration
import alpinejs from '@astrojs/alpinejs'

// TailwindCSS integration
import tailwind from '@astrojs/tailwind'

// astroI18next integration
import astroI18next from 'astro-i18next'

// Vue 3 integration
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://bachacode.github.io/',
  integrations: [alpinejs(), tailwind(), astroI18next(), vue()]
})
