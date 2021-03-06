const {Patient} = require("../models/index");

const addPatient = function(req,res){
    var patient = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        mail: req.body.mail,
        information: req.body.informationMedicale
    }
    Patient
        .create(patient)
        .then((result) => {
            res.redirect("/patient");
        }).catch((err) => {
            if(err)
                console.error("Unable to add patient ", err)
        });
}

const getPatients = function(req,res){
    Patient
        .findAll()
        .then((results) => {
            res.render("listePatients.ejs", {results: results});
        }).catch((err) => {
            if(err)
                console.error("Unable to find patients ", err)
        });
}

const getPatient = function(req,res){
    var patientId = req.params.id;
    Patient
        .findAll({
            where : {
                id : patientId
            }
        })
        .then((result) => {
            res.send(result[0]);
        }).catch((err) => {
            if(err)
                console.error("Unable to find patient ", err)
        });
}

const updatePatient = function(req,res){
    var patientId = req.params.id,
        patient = {
            nom : req.body.nom,
            prenom : req.body.prenom,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            mail: req.body.mail,
            information: req.body.information
    }
    Patient
        .update(patient,
            {
                where: {
                    id: patientId
                }
            }
        )
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            if(err)
                console.error("Unable to update patient ", err)
        });
}


const deletePatient = function(req,res){
    var patientId = req.params.id;
    Patient
        .destroy({
            where : {
                id : patientId
                }
            })
        .then((result) => {
            res.redirect("/patient");
        }).catch((err) => {
            if(err)
                console.error("Unable to destroy patient ", err)
        });
}


module.exports = {
    addPatient,
    getPatient,
    getPatients,
    updatePatient,
    deletePatient
}