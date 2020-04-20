var express = require("express"),
    rdvRouter = express.Router();


var {getRdvs, getRdv, addRdv, updateRdv, deleteRdv,
     getRdvsPatient, getRdvsToday, getRdvsDay} = require("../controllers/rdvController");

rdvRouter.get("/rdv", getRdvs);

rdvRouter.get("/rdv/today", getRdvsToday);

rdvRouter.post("/rdv/day", getRdvsDay);

rdvRouter.get("/patient/:id/rdv", getRdvsPatient);

rdvRouter.get("/rdv/:id", getRdv);

rdvRouter.post("/rdv/:id", addRdv);

rdvRouter.put("/rdv/:id", updateRdv);

rdvRouter.delete("/rdv/:id", deleteRdv);


module.exports = rdvRouter;