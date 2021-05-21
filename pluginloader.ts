import { cosmiconfigSync } from "cosmiconfig";

interface PluginLoaderConfig {
  plugins: string[];
}

export class PluginLoader {
  loadedPlugins = [] as any[];
  config: PluginLoaderConfig | null;
  constructor(nameOfConfigOrArray: string[] | string) {
    if (Array.isArray(nameOfConfigOrArray)) {
      this.config = { plugins: nameOfConfigOrArray };
    } else {
      const moduleName = nameOfConfigOrArray;
      const explorer = cosmiconfigSync(moduleName);
      const result = explorer.search();
      if (result === null) throw new Error("Cant find config file.");
      this.config = result.config as PluginLoaderConfig;
    }
  }

  async getPlugins() {
    if (this.config === null) throw new Error("no config");
    for (const plugin of this.config.plugins) {
      const importedPlugin = await import("./plugins/" + plugin + ".js");
      this.loadedPlugins.push(importedPlugin.default);
    }
  }
}
