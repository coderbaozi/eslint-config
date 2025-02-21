import type { Config } from '../types'
import { configs } from 'eslint-plugin-regexp'

export function regex(): Config[] {
  return [{
    ...configs['flat/recommended'],
    name: 'coderbaozi/regex',
  }]
}
