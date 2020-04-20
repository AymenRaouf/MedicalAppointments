const {Rdv, Patient} = require("../models/index");

const addRdv = function(req,res){
    var rdv = {
        date : req.body.date,
        objet : req.body.objet,
        patientId: req.params.id
    }
    Rdv
        .create(rdv)
        .then((result) => {
            res.redirect("/patient/"+req.params.id+"/rdv")
        }).catch((err) => {
            if(err)
                console.error("Unable to add rendez-vous ", err)
        });
}

const getRdvs = function(req,res){
    Rdv
        .findAll({
            include:[{
                model:Patient
                }]
            })
        .then((results) => {
            res.render("rdvListe.ejs", {results: results})
        }).catch((err) => {
            if(err)
                console.error("Unable to find rendez-vous ", err)
        });
}

const getRdvsPatient = function(req,res){
    Rdv
        .findAll({
            where:{
                patientId: req.params.id
            },
            include:[{
                model:Patient
                }]
            })
        .then((results) => {
            res.render("rdvPatient.ejs", {results: results, id: req.params.id})
        }).catch((err) => {
            if(err)
                console.error("Unable to find rendez-vous ", err)
        });
}

const getRdv = function(req,res){
    var rdvId = req.params.id;
    Rdv
        .findAll({
            where : {
                id : rdvId
            },
            include:[{
                model : Patient
            }]
        })
        .then((result) => {
            res.send(result[0]);
        }).catch((err) => {
            if(err)
                console.error("Unable to find rendez-vous ", err)
        });
}

const updateRdv = function(req,res){
    var rdvId = req.params.id,
        rdv = {
        date : req.body.date,
        objet : req.body.objet,
        patientId: req.body.patientId
    }
    Rdv
        .update(rdv,
            {
                where: {
                    id: rdvId
                }
            }
        )
        .then((result) => {
            res.redirect("/rdv");
        }).catch((err) => {
            if(err)
                console.error("Unable to update rendez-vous ", err)
        });
}


const deleteRdv = function(req,res){
    var rdvId = req.params.id;
    Rdv
        .destroy({
            where : {
                id : rdvId
                }
            })
        .then((result) => {
            res.redirect("/rdv");
        }).catch((err) => {
            if(err)
                console.error("Unable to destroy rendez-vous ", err)
        });
}


module.exports = {
    addRdv,
    getRdv,
    getRdvs,
    updateRdv,
    deleteRdv,
    getRdvsPatient
}