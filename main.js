var electron = require("electron"),
    url = require("url"),
    path = require("path"),
    ejse = require("ejs-electron");

require('electron-reload')(__dirname);

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//listen for app to be ready
app.on('ready', function(){
    //create Window
    mainWindow = new BrowserWindow({});
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/mainWindow.ejs'),
        protocol: 'file:',
        slashes: true
    }))
    // //build menu from template
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // //Insert menu
    // Menu.setApplicationMenu(mainMenu);

});

const mainMenuTemplate = [
    {
        
    }
];
/*
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const app = express();
const port = 4300;
 
let db = new sqlite3.Database('models/rdv.db')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app, db);
 
app.listen(port, () => {
   console.log('Server is running at port 4300');
});
*/