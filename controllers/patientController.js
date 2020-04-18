function addClient(req, res, db){
    // validateRequest(req, res);
     insertClient(req.body, res, db);
 }
 
 function insertClient(rdv, res, db){
     var nom = rdv.nom;
     var prenom = rdv.prenom;
     var adresse = rdv.adresse;
     var email = rdv.email;
     var num_tel = rdv.num_tel;
     var information_medicale = rdv.information_medicale;
 
     var sql = `insert into rdv (nom, prenom, adresse, email, num_tel, information_medicale) 
             VALUES 
             (?, ?, ?, ?, ?, ?);`;
 
     var values = [nom, prenom, adresse, email, num_tel, information_medicale];
 
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
    var schema = JSON.parse(fs.readFileSync('app/data/rdv_schema.json', 'utf8'));

    var JaySchema = require('jayschema');
    var js = new JaySchema();
    var instance = req.body;

    js.validate(instance, schema, function (errs) {
        if (errs) {
            console.error(errs);
            res.status(400).send(errs);
        }
    });

    if (req.body.id) {
        res.status(400).send("ID cannot be submmited");
    }
}*/

module.exports = {addClient};