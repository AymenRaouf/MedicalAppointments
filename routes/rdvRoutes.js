var express = require("express"),
    rdvRouter = express.Router();


var {getRdvs, getRdv, addRdv, updateRdv, deleteRdv} = require("../controllers/rdvController");

rdvRouter.get("/rdv", getRdvs);

rdvRouter.get("/rdv/:id", getRdv);

rdvRouter.post("/rdv", addRdv);

rdvRouter.put("/rdv/:id", updateRdv);

rdvRouter.delete("/rdv/:id", deleteRdv);


module.exports = rdvRouter;