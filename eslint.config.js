import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    plugins: {
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
        },
      ],

      'unused-imports/no-unused-imports': 'warn',

      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'prefer-const': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'warn',
      eqeqeq: ['warn', 'always'],
      curly: ['warn', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
