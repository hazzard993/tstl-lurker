# TSTL Lurker

Declarations for [lurker](https://github.com/rxi/lurker), a small module which automatically hotswaps changed Lua files in a running LÖVE project.

<div align="center">
  <img src="https://i.imgur.com/BoYr2Hj.gif" />
</div>

| Command | Description |
|-|-|
| `yarn add -D tstl-lurker` | Install these declarations |
| `yarn add rxi/lume rxi/lurker` | Install Lurker |
| `tstl -p tsconfig.json --watch` | Transpile and continue to transpile changed _.ts_ files |
| `love /path/to/game/directory` | Run the game. Make sure `lurker.update()` is called |

Upon installation these declarations can be linked to a _tsconfig.json_ file.

```json
{
    "compilerOptions": {
        "types": [
            "tstl-lurker"
        ]
    }
}
```

And used within any _.ts_ file.

```ts
import lurker = require("lurker");
// this import style is not available in esnext

lurker.preswap = (f) => f === "lualib_bundle.lua";
// do NOT hotswap lualib_bundle.lua, lurker can't hotswap this

lurker.path = "./entities";
lurker.quiet = false;

love.update = () => {
    lurker.update();
};
```

Make sure to append `";./node_modules/?/?.lua"` to your `package.path` in a _conf.ts_ file (this is run first) to assist where Lua looks for modules.

```ts
package.path += ";./node_modules/?/?.lua";
```
