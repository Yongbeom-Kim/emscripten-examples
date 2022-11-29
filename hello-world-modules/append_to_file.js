const fs = require('fs');

fs.appendFile('./dst/hellohello.js', '\n\nModule();', () => {});
fs.appendFile('./dst/helloworld.js', '\n\nModule();', () => {});
fs.appendFile('./dst/worldhello.js', '\n\nModule();', () => {});