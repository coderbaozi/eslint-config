import pluginJsonc from 'eslint-plugin-jsonc'
import parserJsonc from 'jsonc-eslint-parser'
import type { Config } from '../types'
import type { Linter } from 'eslint'

const jsoncRules = pluginJsonc.configs['recommended-with-jsonc']
  .rules as Linter.RulesRecord

export function jsonc(): Config[] {
  return [
    {
      name: 'coderbaozi/jsonc',
      files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
      languageOptions: {
        parser: parserJsonc,
      },
      plugins: {
        jsonc: pluginJsonc as any,
      },
      rules: {
        ...jsoncRules,
        'jsonc/quote-props': 'off',
        'jsonc/quotes': 'off',
      },
    },
  ]
}
