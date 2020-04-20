var electron = require("electron"),
    dotenv = require('dotenv'),
    url = require("url"),
    path = require("path"),
    ejse = require("ejs-electron"),
    express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    server = express();

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


// Patient
//     .create({
//         nom: "Chaib",
//         prenom: "Oussama",
//         adresse: "Oran",
//         telephone: "+213 25 25 25",
//         mail: "ga_chaib@esi.dz",
//         information: "Rien"
//     })
//     .then((u)=>{
//         console.log(u)
//     })

// server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


//routing
server.use(require("./routes/rdvRoutes"));//Rendez-vous routes
server.use(require("./routes/patientRoutes"));//Patient routes


var port = process.env.PORT || 5000;
server.listen(port, () => {
   console.log('Server is running at port', port);
});