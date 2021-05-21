import { PluginLoader } from "./pluginloader";

// This example demonstrates the use of two (fake) plugins.

interface EmailPlugin {
  pluginName: string;
  sendEmail(email: string, subject: string, message: string): void;
}

interface MeaniePlugin {
  pluginName: string;
  hurlInsults(): void;
}
async function init() {
  // Your config file must be called .pluginloaderrc.yaml
  // or other cosmiconfig compatible file name and type: https://github.com/davidtheclark/cosmiconfig
  const provider = new PluginLoader("pluginloader");
  await provider.getPlugins();
  for (let plugin of provider.loadedPlugins) {
    const initPlugin = new plugin();
    if (initPlugin.pluginName == "EmailPlugin") {
      const castPlugin = initPlugin as EmailPlugin;
      castPlugin.sendEmail(
        "person@example.com",
        "Title of message",
        "Hello Mr. How are you this fine evening?"
      );
    }
    if (initPlugin.pluginName == "MeaniePlugin") {
      const castPlugin = initPlugin as MeaniePlugin;
      castPlugin.hurlInsults();
    }
  }
}

init();
