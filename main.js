var electron = require("electron"),
    dotenv = require('dotenv'),
    url = require("url"),
    path = require("path"),
    ejse = require("ejs-electron"),
    express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    server = express(),
    methodOverride = require("method-override");

require('electron-reload')(__dirname);

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//wait for the app to be ready
app.on('ready', function(){
    //create Window
    mainWindow = new BrowserWindow({});
    //load ejs into window
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

// server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(methodOverride("_method"));


//routing
server.use(require("./routes/rdvRoutes"));//Rendez-vous routes
server.use(require("./routes/patientRoutes"));//Patient routes
server.use(require("./routes/navigationRoutes"));//naviger entre les ecrans

var port = process.env.PORT || 5000;
server.listen(port, () => {
   console.log('Server is running at port', port);
});