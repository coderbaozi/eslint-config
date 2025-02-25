import pluginReact from 'eslint-plugin-react'
import type { Config } from '../types'

const recommendConfig = pluginReact.configs.flat.configs
const jsxRunTime = pluginReact.configs.flat['jsx-runtime']

export function react(): Config[] {
  return [
    {
      name: 'coderbaozi/react',
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
      ...recommendConfig,
      ...jsxRunTime,
    },
  ]
}
