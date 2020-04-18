function addRdvs(req, res, db){
    for (var rdv of req.body) {
        insertRdv(rdv, res, db);
    }
}

function addRdv(req, res, db){
   // validateRequest(req, res);
    insertRdv(req.body, res, db);
}

function insertRdv(rdv, res, db){
    var client_id = rdv.client_id;
    var client_name = rdv.client_name;
    var date = rdv.date;
    var heure = rdv.heure;
    var objet = rdv.objet;

    var sql = `insert into rdv (client_id, client_name, date, heure, objet) 
            VALUES 
            (?, ?, ?, ?, ?);`;

    var values = [client_id, client_name, date, heure, objet];

    db.serialize(function () {
        db.run(sql, values, function (err) {
            if (err){
                console.error(err);
                res.status(500).send(err);
            }
                
            else
                res.send();
        });
    });
}
/*function deleteRdvs(req, res, db){
    for (var rdv of req.body) {
        updateRdv(rdv, res, db);
    }
}*/

function deleteRdv(req, res, db){
    updateRdv(req.body, res, db);
}

function updateRdv(rdv, res, db){
    var rdv_id = rdv.rdv_id;

    if(!rdv_id){
        res.status(400).send("ID is mandatory");
    }

    else{
        var sql = `delete from  rdv where rdv_id = ?;`;
        var values = [rdv_id];

        db.serialize(function () {
            db.run(sql, values, function (err) {
                if (err){
                    console.error(err);
                    res.status(500).send(err);
                }
                else
                    res.send();
            });
        });
    }
}
/*function modifierRdvs(req, res, db){
    for (var rdv of req.body) {
        updateModifierRdv(rdv, res, db);
    }
}*/

function modifierRdv(req, res, db){
    // validateRequest(req, res);
     updateModifierRdv(req.body, res, db);
 }
 
 function checkIfExist(){
     // mzl
 }
 
 function updateModifierRdv(rdv, res, db){
    // checkIfExist();
 
    var client_id = rdv.client_id;
    var client_name = rdv.client_name;
    var date = rdv.date;
    var heure = rdv.heure;
    var objet = rdv.objet;
    var rdv_id = rdv.rdv_id;
 
     var sql = `update rdv
             set client_id  = ?, client_name  = ?, date = ?, heure = ?, objet = ?
             where rdv_id = ?;`;
 
     var values = [client_id, client_name , date, heure, objet, rdv_id];
 
     db.serialize(function () {
         db.run(sql, values, function (err) {
             if (err){
                 console.error(err);
                 res.status(500).send(err);
             }
             else
                 res.send();
         });
     });
 }
 
 /*function validateRequest(req, res) {
     var fs = require('fs');
     var schema = JSON.parse(fs.readFileSync('app/data/rdv_schema_update.json', 'utf8'));
 
     var JaySchema = require('jayschema');
     var js = new JaySchema();
     var instance = req.body;
 
     js.validate(instance, schema, function (errs) {
         if (errs) {
             console.error(errs);
             res.status(400).send(errs);
         }
     });
 }*/
 
 module.exports = {addRdv, addRdvs, deleteRdv, deleteRdvs, modifierRdv, modifierRdvs};