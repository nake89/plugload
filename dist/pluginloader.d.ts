interface PluginLoaderConfig {
    plugins: string[];
}
export declare class PluginLoader {
    loadedPlugins: any[];
    config: PluginLoaderConfig | null;
    constructor(nameOfConfigOrArray: string[] | string);
    getPlugins(): Promise<void>;
}
export {};
//# sourceMappingURL=pluginloader.d.ts.map