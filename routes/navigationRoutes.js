var express = require("express"),
    navigationRouter = express.Router();

navigationRouter.get("/datePicker", function(req,res){
    res.render('datePicker.ejs')
});

navigationRouter.get("/mainWindow", function(req,res){
    res.render('mainWindow.ejs')
});

//route special pour l impression
navigationRouter.get("/rdv/:id/:date/:objet", function(req,res){
    const fs = require('fs'),
          path = require('path'),
          id = req.params.id,
          date = req.params.date,
          objet = req.params.objet           
    data = "Rendez-vous\n"+id+"\n"+date+"\n"+objet;
    dir = path.join(__dirname, '..', "fichiers",id+".txt");
    fs.writeFile(dir, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
})




module.exports = navigationRouter;