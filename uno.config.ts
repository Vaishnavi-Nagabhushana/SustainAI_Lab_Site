import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      mono: '"DM Mono", monospace',
    },
  },

  shortcuts: [
    {
      'bg-main': 'bg-hex-eef5fc dark:bg-hex-0d1117',
      'text-main': 'text-hex-555555 dark:text-hex-bbbbbb',
      'text-link': 'text-dark dark:text-white',
      'border-main': 'border-truegray-300 dark:border-truegray-600',
    },
    {
      'text-title': 'text-link text-4xl font-800',
      'nav-link':
        'text-link opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link':
        'text-link text-nowrap cursor-pointer border-b border-neutral-500/30 hover:border-opacity-100 hover:border-truegray-600 dark:border-neutral-500 dark:hover:border-truegray-400 transition-colors duration-200 no-underline',
      'container-link':
        'p-2 opacity-60 hover:opacity-100 cursor-pointer hover:bg-truegray-500/10 transition-colors duration-200',
    },
    {
      'hr-line':
        'w-14 mx-auto my-8 border border-solid border-truegray-200 dark:border-truegray-800',
    },
  ],

  presets: [
    presetUno(),
    presetAttributify(),

    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),

    presetTypography(),

    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
      },
    }),
  ],

  transformers: [
    transformerVariantGroup(),
  ],

  safelist: [
    'i-ri-file-list-2-line',
    'i-carbon-campsite',
    'i-simple-icons-github',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-youtube',
    'i-simple-icons-bilibili',
    'i-simple-icons-zhihu',
    'i-simple-icons-sinaweibo',
    'i-ri-github-line',
    'i-ri-twitter-x-line',
  ],
})
