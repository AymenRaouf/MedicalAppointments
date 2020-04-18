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