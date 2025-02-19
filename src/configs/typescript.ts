import type { Config } from '../types'
import tseslint from 'typescript-eslint'

const tsConfigs = tseslint.config({
  extends: [...tseslint.configs.recommended],
  files: ['**/*.?([cm])ts', '**/*.tsx'],
  name: 'coderbaozi/tseslint',
}) as Config[]

export function typescript(): Config[] {
  return [
    ...tsConfigs,
  ]
}
