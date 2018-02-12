import { app, BrowserWindow } from 'electron';
const path = require('path');
const url = require('url');

let mainWindow:BrowserWindow|null = null;

function createWindow ():void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  }));
}

app.on('ready', () => {
  mainWindow = null;
});

app.on('window-all-closed', function () {
  //if (process.platform !== 'darwin') {
    app.quit();
  //}
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})