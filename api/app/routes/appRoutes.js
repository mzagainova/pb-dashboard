'use strict';
module.exports = function(app) {
  var shootings = require('../controllers/appController');
  var brutality = require('../controllers/appController');
  var count = require('../controllers/appController');

  // Routes
  app.route('/count')
    .get(count.count_all_records);
  app.route('/count/shootings')
    .get(count.count_all_shootings);
  app.route('/count/brutality')
    .get(count.count_all_brutality);
  app.route('/count/state/name')
    .get(count.count_all_records_by_state);
  app.route('/count/shootings/state/name')
    .get(count.count_all_shootings_by_state);
  app.route('/count/brutality/state/name')
    .get(count.count_all_brutality_by_state);
  app.route('/count/state/abbv')
    .get(count.count_all_records_by_stateabbv);
  app.route('/count/shootings/state/abbv')
    .get(count.count_all_shootings_by_stateabbv);
  app.route('/count/brutality/state/abbv')
    .get(count.count_all_brutality_by_stateabbv);

  app.route('/shootings')
    .get(shootings.list_all_shootings);
    // .post(shootings.create_a_shooting);
 
  app.route('/shootings/last20')
    .get(shootings.list_last_shootings);

  app.route('/shootings/:shootingId1-:shootingId2')
    .get(shootings.read_span_shootings);

  app.route('/shootings/:shootingId')
    .get(shootings.read_a_shooting);
    // .put(shootings.update_a_shooting)
    // .delete(shootings.delete_a_shooting);

  app.route('/brutality')
    .get(brutality.list_all_brutality);
 
  app.route('/brutality/last20')
    .get(brutality.list_last_brutality);

  app.route('/brutality/:brutalityId1-:brutalityId2')
    .get(brutality.read_span_brutality);

  app.route('/brutality/:brutalityId')
    .get(brutality.read_a_brutality);
    };