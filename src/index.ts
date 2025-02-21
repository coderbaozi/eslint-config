import type { Config } from './types'
import { prettier, unusedImport } from './configs'
import { jsonc } from './configs/jsonc'
import { regex } from './configs/regex'
import { sortImports, sortPackageJson, sortTsconfig } from './configs/sort'
import { typescript } from './configs/typescript'

export function coderbaozi(config: Config | Config[]): Config[] {
  const configs: Config[] = []

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }

  configs.push(...prettier(), ...typescript(), ...jsonc(), ...unusedImport(), ...regex(), ...sortImports(), ...sortPackageJson(), ...sortTsconfig())

  return configs
}
