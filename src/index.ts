import {
  constEnum,
  jsonc,
  prettier,
  react,
  regex,
  sortImports,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unusedImport,
} from './configs'
import { cssConfig } from './configs/css'
import type { Config, Options } from './types'

export function coderbaozi(options: Options): Config[] {
  const configs: Config[] = []

  if (options.react) {
    configs.push(...react())
  }

  configs.push(
    ...prettier(),
    ...typescript(),
    ...jsonc(),
    ...unusedImport(),
    ...regex(),
    ...sortImports(),
    ...sortPackageJson(),
    ...sortTsconfig(),
    ...constEnum(),
    ...cssConfig(),
  )

  return configs
}
