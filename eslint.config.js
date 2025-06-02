// eslint.config.js
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser', // optional: support embedded TypeScript
      },
    },
    plugins: {
      astro,
    },
    rules: {
      // ⚠️ Remove or replace invalid rules — keep this empty or only include valid Astro rules
    },
  },

  // JS/TS files
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]