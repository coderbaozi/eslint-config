import type { Linter } from 'eslint'

export type Config = Linter.Config<Linter.RulesRecord>

export interface Options {
  /** 是否启用 react 相关的配置 */
  react?: boolean
}
