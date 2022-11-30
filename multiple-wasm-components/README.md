# Modules

## Overview
- Because wasm scripts normally share the same global variables, attempting to load multiple in a page runs into some problems.

- For some reason, adding the `type="module"` tag to the `<script>` tags when adding said scripts to the page solves this issue.