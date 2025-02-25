import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import type { Config } from '../types'

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
        ...pluginPrettierRecommended.rules,
        'prettier/prettier': [
          'warn',
          {
            singleQuote: true,
            semi: false,
          },
        ],
      },
    },
  ]
}
