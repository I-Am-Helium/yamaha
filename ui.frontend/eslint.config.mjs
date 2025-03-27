import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
   { ignores: ['dist'] },
   {
      extends: [
         js.configs.recommended,
         ...tseslint.configs.recommendedTypeChecked,
         {
            languageOptions: {
               parserOptions: {
                  projectService: true,
                  tsconfigRootDir: import.meta.dirname,
               },
            },
         },
      ],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
      },
      plugins: {
         'react-hooks': reactHooks,
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         'no-func-assign': 'error',
         'no-unreachable': 'error',
         '@typescript-eslint/no-unused-vars': 'error',
         '@typescript-eslint/no-deprecated': 'error',
         'no-console': 'warn',
         'no-redeclare': 'error',
         camelcase: [
            'warn',
            { ignoreDestructuring: true, ignoreImports: true },
         ],
      },
   }
)
