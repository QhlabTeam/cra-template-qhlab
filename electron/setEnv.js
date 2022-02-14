const {version} = require('electron/package.json');
const {spawn} = require('child_process');

process.env.ELECTRON_MIRROR = 'https://npmmirror.com/mirrors/electron/';
process.env.ELECTRON_CUSTOM_DIR = `v${version}`;

let [, , command, ...args] = process.argv;

if (command === '--') {
  command = args.shift();
}

spawn(command, args, {stdio: 'inherit'});
