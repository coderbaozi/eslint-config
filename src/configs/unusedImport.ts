import type { Config } from '../types'
import unusedImports from 'eslint-plugin-unused-imports'

export function unusedImport(): Config[] {
  return [{
    name: 'unusedImport',
    plugins: {
      unusedImports,
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
  }]
}
