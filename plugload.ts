import { cosmiconfigSync } from "cosmiconfig"

export interface PlugLoadConfig {
  plugins: string[]
}

export class PlugLoad {
  loadedPlugins = [] as any[]
  config: PlugLoadConfig | null
  path: string | null
  constructor(nameOfConfigOrArray: string[] | string, path: string | null) {
    this.path = path ?? "plugins"
    if (Array.isArray(nameOfConfigOrArray)) {
      this.config = { plugins: nameOfConfigOrArray }
    } else {
      const moduleName = nameOfConfigOrArray
      const explorer = cosmiconfigSync(moduleName)
      const result = explorer.search()
      if (result === null) throw new Error("Cant find config file.")
      this.config = result.config as PlugLoadConfig
    }
  }

  async getPlugins() {
    const path = this.path
    if (this.config === null) throw new Error("no config")
    for (const plugin of this.config.plugins) {
      const importedPlugin = await import("./" + path + "/" + plugin + ".js")
      this.loadedPlugins.push(importedPlugin.default)
    }
  }
}
