'use strict';
module.exports = function(app) {
  var shootings = require('../controllers/appController');

  // Routes
  app.route('/shootings')
    .get(shootings.list_all_shootings);
    // .post(shootings.create_a_shooting);
   
   app.route('/shootings/:shootingId')
    .get(shootings.read_a_shooting);
    // .put(shootings.update_a_shooting)
    // .delete(shootings.delete_a_shooting);
    };