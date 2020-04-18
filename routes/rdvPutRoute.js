import {modifierRdv, modifierRdvs} from '../controllers/rdvController';

module.exports = function (app, db) {
    
    // Update rdv

    app.put('/api/rdv/', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

         var data = req.body;
         
         /*if((data.constructor === Array))
            modifierRdvs(req, res, db);
         else*/
            modifierRdv(req, res, db);
    });
};

