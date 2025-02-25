import { configs } from 'eslint-plugin-regexp'
import type { Config } from '../types'

export function regex(): Config[] {
  return [
    {
      ...configs['flat/recommended'],
      name: 'coderbaozi/regex',
    },
  ]
}
