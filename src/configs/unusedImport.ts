import unusedImports from 'eslint-plugin-unused-imports'
import type { Config } from '../types'

export function unusedImport(): Config[] {
  return [
    {
      name: 'unusedImport',
      plugins: {
        'unused-imports': unusedImports,
      },
      rules: {
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ]
}
