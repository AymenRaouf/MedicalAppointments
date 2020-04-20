var Sequelize = require('sequelize'),
    RdvModel = require("./rdvModel"),
    PatientModel = require("./patientModel"),
    config = require("../config/config");

var host = config.host,
    name = config.name,
    user = config.user,
    pass = config.pass;

    console.log(name)

var sequelize = new Sequelize( name, user, pass, {
    host: host,
    dialect: 'mysql'
});

var Patient = PatientModel(sequelize, Sequelize),
    Rdv = RdvModel(sequelize, Sequelize);
    

Patient.hasMany(Rdv, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Rdv.belongsTo(Patient);

sequelize
    .sync()
    .then(() => {
        console.log(`Database & tables created!`)
    });


// Patient.create({
//     nom: "Chaib",
//     prenom: "Oussama",
//     adresse: "Oran",
//     telephone: "+213 25 25 25",
//     mail: "ga_chaib@esi.dz",
//     information: "Rien"
// }). then((u)=>{
//     Rdv.create({
//         date: new Date(),
//         objet: "Ja brk",
//         idPatient: u.id
//     })
// })

module.exports = {
    Rdv,
    Patient
}