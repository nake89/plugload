export interface PlugLoadConfig {
    plugins: string[];
}
export declare class PlugLoad {
    loadedPlugins: any[];
    config: PlugLoadConfig | null;
    path: string | null;
    constructor(nameOfConfigOrArray: string[] | string, path: string | null);
    getPlugins(): Promise<void>;
}
//# sourceMappingURL=plugload.d.ts.map