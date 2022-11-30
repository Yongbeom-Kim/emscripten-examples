# Modules

## Overview
- Because wasm scripts normally share the same global variables, attempting to load multiple in a page runs into some problems.

![image](https://user-images.githubusercontent.com/63487502/204745981-c1b947f7-e971-4667-8c84-e7dec3dd3227.png)

- For some reason, adding the `type="module"` tag to the `<script>` tags when adding said scripts to the page solves this issue.

![image](https://user-images.githubusercontent.com/63487502/204746014-212ac223-bac8-4550-a2ee-5a9b96d2d800.png)

