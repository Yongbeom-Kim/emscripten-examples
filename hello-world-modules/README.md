# Modules

- This repo consists of C++ files compiled with the `-sMODULARIZE` tag, so that >1 independent WASM modules can be loaded at once in a page.
  
## How it works:
1. We export the cpp files with the `sMODULARIZE` tag, which creates a callable `Module` export.
2. We append a `Module()` to the end of the files each (which calls the main function each), I imagine this should be taken care of by module bundlers in production.
- See `package.json` for commands.


## Instructions:
1. Install [Emscripten](http://emscripten.org)
2. Clone this repo

    `git clone https://github.com/Yongbeom-Kim/emscripten-examples.git`

    `cd emscripten-examples`

    `cd hello-world-modules`
3. Build 

    `npm run build`

4. Open index.html in a web browser


    Chrome doesn't support file:// XHR requests, so you need to first start a webserver, e.g.:
    - with Python 2: `python -m SimpleHTTPServer 8080`
    - with Python 3: `python -m http.server 8080`

        and then open this URL: http://localhost:8080/

    - VS Code [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

5. Open Console (Ctrl+J on Chrome)

![image](https://user-images.githubusercontent.com/63487502/204582064-e8dd7f4f-08c3-44ce-bd0a-eb345aa36f4f.png)


