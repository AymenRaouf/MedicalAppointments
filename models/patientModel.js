module.exports = (sequelize, type)=>{
    return sequelize.define('patient', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: type.STRING,
            allowNull: false
        },
        prenom: {
            type: type.STRING,
            allowNull: false
        },
        adresse: {
            type: type.STRING,
            allowNull: false
        },
        telephone: {
            type: type.STRING,
            allowNull: false
        },
        mail: {
            type: type.STRING,
            allowNull: false
        },
        information: {
            type: type.STRING,
            allowNull: false
        }
    })
}