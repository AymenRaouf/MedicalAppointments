const {Rdv, Patient} = require("../models/index");

const addRdv = function(req,res){
    var rdv = {
        date : req.body.date,
        objet : req.body.objet,
        patientId: req.body.patientId
    }
    Rdv
        .create(rdv)
        .then((result) => {
            console.log(result);
            res.send(result)
            //here show patient list of rdvs
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
        .then((result) => {
            res.send(result);
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
            res.send(result);
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
            res.send("Done")
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
    deleteRdv
}