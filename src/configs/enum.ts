import enumPlugin from 'eslint-plugin-enum'
import { Config } from '../types'

export function constEnum(): Config[] {
  return [
    {
      name: 'coderbaozi/const-enum',
      plugins: {
        enum: enumPlugin,
      },
      rules: {
        'enum/must-enum-const': 'error',
      },
    },
  ]
}
