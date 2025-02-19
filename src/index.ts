import type { Config } from './types'
import { prettier, unusedImport } from './configs'
import { typescript } from './configs/typescript'

export function coderbaozi(config: Config | Config[]): Config[] {
  const configs: Config[] = []

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }

  configs.push(...prettier(), ...typescript(), ...unusedImport())

  return configs
}
