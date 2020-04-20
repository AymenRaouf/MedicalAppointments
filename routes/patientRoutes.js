var express = require("express"),
    patientRouter = express.Router();


var {getPatient, getPatients, addPatient, updatePatient, deletePatient} = require("../controllers//patientController");

patientRouter.get("/patient", getPatients);

patientRouter.get("/patient/:id", getPatient);

patientRouter.post("/patient", addPatient);

patientRouter.put("/patient/:id", updatePatient);

patientRouter.delete("/patient/:id", deletePatient);


module.exports = patientRouter;