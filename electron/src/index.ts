import {app, BrowserWindow} from 'electron';
import {isDev} from './helpers/isDev';
import {isMac} from './helpers/isMac';
import path from 'path';

const PORT = process.env.PORT ?? 3000;

(async () => {
  // intialize
  await app.whenReady();

  // create window
  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    titleBarStyle: isMac ? 'hiddenInset' : 'default',
    webPreferences: {
      devTools: true,
      contextIsolation: true,
    },
  });

  // launch window
  await window.loadURL(
    isDev
      ? `http://localhost:${PORT}`
      : path.join(__dirname, '../renderer/index.html') // web builds as renderer folder
  );
})().catch(() => {});
