import { app, BrowserWindow, dialog } from 'electron';
import { home, docs } from './config';
const path = require('path');
const url = require('url');
const fs = require('fs');

console.log(docs);

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
  createWindow();
  //console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}));
  if(fs.existsSync(docs)) {
    fs.watch(docs, {recursive: true}, (event, filename) => {
      if (event === 'rename') {
        if (fs.existsSync(path.join(docs, filename))) {
          console.log(filename + ' was created or renamed');
        } else {
          console.log(filename + ' was deleted');
        }
      } else if (event === 'change') {
        console.log(filename + ' was edited');
      }
    });
  } else {
    console.log('Folder doesn\'t exist');
    //fs.mkdirSync(docs);
  }
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