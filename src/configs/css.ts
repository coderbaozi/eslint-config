import css from '@eslint/css'
import { Config } from '../types'

const recommended = css.configs.recommended

export function cssConfig(): Config[] {
  return [
    {
      name: 'coderbaozi/css',
      files: ['**/*.css'],
      language: 'css/css',
      ...recommended,
    },
  ]
}
