var express = require("express"),
    navigationRouter = express.Router();

navigationRouter.get("/datePicker", function(req,res){
    res.render('datePicker.ejs')
});

navigationRouter.get("/mainWindow", function(req,res){
    res.render('mainWindow.ejs')
});




module.exports = navigationRouter;