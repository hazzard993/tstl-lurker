# TSTL Lurker

Declarations for [lurker](https://github.com/rxi/lurker), a small module which automatically hotswaps changed Lua files in a running LÖVE project.

These declarations are made to be used with the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler.

<div align="center">
  <img src="https://i.imgur.com/BoYr2Hj.gif" />
</div>

> Using the `--watch` option with _TypeScriptToLua_ it is possible to compile and hotswap code running in a LÖVE game when saving a _.ts_ file as seen in this example.

These declarations are available via _npm_ which makes them downloadable with:

```sh
npm install -D tstl-lurker
```

And able to be linked up to a _tsconfig.json_ file like so.

```json
{
    "compilerOptions": {
        "types": [
            "tstl-lurker"
        ]
    }
}
```

See setup instructions below for setting up _lurker_.

## Setup

You will need [lurker.lua](https://raw.githubusercontent.com/rxi/lurker/master/lurker.lua) and [lume.lua](https://raw.githubusercontent.com/rxi/lume/master/lume.lua).

```diff
  game/
+    lurker.lua
+    lume.lua
  src/
     main.ts
```

The following _tsconfig.json_ tells TypeScriptToLua to place output Lua files into _game/_ and works for this situation.

```json
{
    "compilerOptions": {
        "lib": ["esnext"],
        "rootDir": "src",
        "outDir": "game",
        "types": [
            "love-typescript-definitions",
            "lua-types/jit",
            "tstl-lurker"
        ]
    },
    "tstl": {
        "luaTarget": "JIT"
    }
}
```

`npm init` creates a _package.json_, good to keep track of dependencies and group together a project's scripts.

```diff
  game/
     lurker.lua
     lume.lua
  src/
     main.ts
  tsconfig.json
+ package.json
```

Add these scripts to your _package.json_.

```diff
  {
    "scripts": {
+     "build": "tstl -p tsconfig.json",
+     "watch": "tstl --watch -p tsconfig.json",
+     "start": "love game"
    }
  }
```

With this setup you can run the following to install the dependencies you'd need for a typical TypeScript LÖVE 2D project.

```sh
npm install -D tstl-lurker love-typescript-definitions typescript-to-lua
```

This completes the setup! Now to actually use lurker.

In a _main.ts_ file:

```ts
import * as lurker from "lurker";

love.update = dt => {
    lurker.update();
};
```

`npm run build` to build the initial Lua that starts up lurker.

Now you can run `npm start` in one terminal and `npm run watch` in another and your LÖVE 2D project will run and reload whenever you make changes to _.ts_ file that is being used.
