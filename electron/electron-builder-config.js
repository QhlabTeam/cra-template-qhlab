const mirror =
  process.env.ELECTRON_MIRROR ?? 'https://npmmirror.com/mirrors/electron/';
const {version} = require('./package.json');

module.exports = /** @type {import('electron-builder').Configuration} */ ({
  productName: 'ONEUP Desktop',
  appId: 'com.iamyoki.oneup',
  copyright: 'ONEUP Desktop ©2021 Powered by Yoki',
  files: ['assets', 'build'],
  mac: {
    category: 'public.app-category.developer-tools',
    target: [
      {target: 'dmg', arch: ['arm64', 'x64']},
      {target: 'zip', arch: ['arm64', 'x64']},
    ],
    icon: './assets/logo.icns',
  },
  win: {
    target: [{target: 'nsis', arch: 'x64'}],
    icon: './assets/logo.ico',
  },
  electronDownload: {
    mirror,
    customDir: `v${version}`,
  },
});
