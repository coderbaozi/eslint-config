import tseslint from 'typescript-eslint'
import type { Config } from '../types'

const tsConfigs = tseslint.config({
  extends: [...tseslint.configs.recommended],
  files: ['**/*.?([cm])ts', '**/*.tsx'],
  name: 'coderbaozi/tseslint',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}) as Config[]

export function typescript(): Config[] {
  return [...tsConfigs]
}
