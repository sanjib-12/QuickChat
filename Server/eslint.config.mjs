import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
   {
      files: ['**/*.js'],
      ignores: ['**/node_modules/**'],
      languageOptions: { sourceType: 'commonjs' },
   },

   { languageOptions: { globals: globals.browser } },
   pluginJs.configs.recommended,
   eslintConfigPrettier,
];
