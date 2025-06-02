import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  astro: true,
  formatters: {
    astro: true,
    css: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json', // Ensure ESLint uses your tsconfig.json
      },
    },
  },
})
