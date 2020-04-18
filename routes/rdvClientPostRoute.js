import {addClient} from '../controllers/patientController';
import {addRdv, addRdvs} from '../controllers/rdvController';

module.exports = function (app, db) {
    
    // Ajouter nouveau rdv ou client 

    app.post('/api/rdv/', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

         var data = req.body;
         
         if((data.constructor === Array))
            addRdvs(req, res, db);
         else
            addRdv(req, res, db);
    });
    app.post('/api/client/', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

         var data = req.body;
         
            addClient(req, res, db);
    });
};




