import {deleteRdv, deleteRdvs} from '../controllers/rdvController';

module.exports = function (app, db) {
    
    // Supprimer rdv

    app.delete('/api/rdv/', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

         var data = req.body;
         
        /* if((data.constructor === Array))
            deleteRdvs(req, res, db);
         else*/
            deleteRdv(req, res, db);
    });
};


