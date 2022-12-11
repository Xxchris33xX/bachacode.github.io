import { defineConfig } from 'astro/config';

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://bachacode.github.io',
  integrations: [alpinejs(), tailwind()]
});