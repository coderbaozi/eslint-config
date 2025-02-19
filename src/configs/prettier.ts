import type { Config } from '../types'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

const prettierRules = configPrettier.rules

export function prettier(): Config[] {
  return [
    {
      name: 'coderbaozi/prettier',
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...prettierRules,
        ...pluginPrettier.rules,
        'prettier/prettier': 'warn',
      },
    },
  ]
}
