# Modules

- This repo consists of C++ files compiled with the `-sMODULARIZE` tag, so that >1 independent WASM modules can be loaded at once in a page.
  
## How it works:
1. We export the cpp files with the `sMODULARIZE` tag, which creates a callable `Module` export.
2. We append a `Module()` to the end of the files each (which calls the main function each), I imagine this should be taken care of by module bundlers in production.
- See `package.json` for commands.

