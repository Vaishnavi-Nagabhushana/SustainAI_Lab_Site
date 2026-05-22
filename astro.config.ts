import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: 'https://sustainai-lab.pages.dev',

  integrations: [
    vue(),
    UnoCSS(),
  ],
})
