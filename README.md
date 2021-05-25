![banner](https://i.imgur.com/2vF4zV7.png)
Have you ever wanted to add the possibility of plugins to your existing app (or new project)? It's never been simpler!

## Usage

Install the library

```bash
npm i plugload
mkdir plugins # or name it to what you want, but remember to put that change in code
```

Create a file called `.plugload.yaml` and put the following contents

```yaml
plugins:
  - plugin1
  - plugin2
```

Now create `plugin1.ts` and `plugin2.ts` and put your plugins. You can just create 1 plugin if you don't need two. Remember to change the `.plugloadrc.yaml` to mirror that. You can name the plugin files how ever you want. Again remember to edit `.plugloadrc.yaml` to mirror that too.

Import it to your code

```typescript
import { PlugLoad } from "plugload"
```

Declare your the interfaces of your plugins

```typescript
interface EmailPlugin {
	pluginName: string
	sendEmail(email: string, subject: string, message: string): void
}

interface MeaniePlugin {
	pluginName: string
	hurlInsults(): void
}
```

`pluginName` is necessary, but everything else is just what methods and vars you want to export from your plugin.

Example of usage:

```typescript
;(async () => {
	// Your config file must be called .plugloadrc.yaml
	// or other cosmiconfig compatible file name and type: https://github.com/davidtheclark/cosmiconfig
	const provider = new PlugLoad("plugload", "plugins")
	await provider.getPlugins()
	for (let plugin of provider.loadedPlugins) {
		const initPlugin = new plugin()
		if (initPlugin.pluginName == "EmailPlugin") {
			const castPlugin = initPlugin as EmailPlugin
			castPlugin.sendEmail(
				"person@example.com",
				"Title of message",
				"Hello Mr. How are you this fine evening?"
			)
		}
		if (initPlugin.pluginName == "MeaniePlugin") {
			const castPlugin = initPlugin as MeaniePlugin
			castPlugin.hurlInsults()
		}
	}
})()
```

If you need more info look at the `example.ts` and the `plugins` folder.
