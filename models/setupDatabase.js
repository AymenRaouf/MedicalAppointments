var fs = require('fs');
var sqlSchema = fs.readFileSync('models/rdvSchema.sql').toString();

module.exports = function(db) {
    db.serialize(function() {
        db.run(sqlSchema);
    });
};


