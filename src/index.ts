import type { Config, Options } from './types'
import { jsonc, prettier, react, regex, sortImports, sortPackageJson, sortTsconfig, typescript, unusedImport } from './configs'

export function coderbaozi(options: Options): Config[] {
  const configs: Config[] = []

  if (options.react) {
    configs.push(...react())
  }

  configs.push(...prettier(), ...typescript(), ...jsonc(), ...unusedImport(), ...regex(), ...sortImports(), ...sortPackageJson(), ...sortTsconfig())

  return configs
}
