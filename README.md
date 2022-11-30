# emscripten-examples

## Overview
A repository of some pertinent emscripten examples

- [multiple-wasm-components](multiple-wasm-components) is a minimal example of loading independent wasm code ('modules') using the `type="module"` attribute in `<script>` tags.
- [multiple-webgl-components](multiple-webgl-components) takes the above approache to load two WebGL code 'modules' independently on two canvases.

## Instructions (To build and load examples)

1. Install [Emscripten](http://emscripten.org)
2. Clone this repo

    `git clone https://github.com/Yongbeom-Kim/emscripten-examples.git`

    `cd emscripten-examples`

3. `cd` into relevant example

    `cd multiple-wasm-components`

4. Build 

    `npm run build`

5. Open `dst/index.html` in a web browser

    Chrome doesn't support file:// XHR requests, so you need to first start a webserver, e.g.:
    - with Python 2: `python -m SimpleHTTPServer 8080`
    - with Python 3: `python -m http.server 8080`

        and then open this URL: http://localhost:8080/

    - VS Code [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
