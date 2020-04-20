module.exports = (sequelize, type)=>{
    return sequelize.define('rdv', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: type.DATE,
            allowNull: false
        },
        objet: {
            type: type.STRING,
            allowNull: false
        }
    })
}