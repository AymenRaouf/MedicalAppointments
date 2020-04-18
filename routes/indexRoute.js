const getRoutes = require('./rdvGetRoute');
const postRoutes = require('./rdvClientPostRoute');
const putRoutes = require('./rdvPutRoute');
const deleteRoutes = require('./rdvDeleteRoute');
const loadDatabase = require('../models/setupDatabase');

module.exports = function (app, db) {

  // create database in case it was not created yeat, 
  // or update in case of migrations
  loadDatabase(db);

  // start routes
  getRoutes(app, db);
  postRoutes(app, db);
  putRoutes(app, db);
  deleteRoutes(app, db);

};
