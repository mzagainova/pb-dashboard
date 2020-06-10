'use strict';

var Shooting = require('../model/appModel.js');

exports.list_all_shootings = function(req, res) {
  Shooting.getAllShootings(function(err, shooting) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', shooting);
    res.send(shooting);
  });
};

exports.list_last_shootings = function(req, res) {
  Shooting.getLast20Shootings(function(err, shooting) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', shooting);
    res.send(shooting);
  });
};

exports.read_a_shooting = function(req, res) {
  Shooting.getShootingById(req.params.shootingId, function(err, shooting) {
    if (err)
      res.send(err);
    res.json(shooting);
  });
};

exports.read_span_shootings = function(req, res) {
  Shooting.getShootingByIds(req.params.shootingId1, req.params.shootingId2, function(err, shooting) {
    if (err)
      res.send(err);
    res.json(shooting);
  });
};

exports.create_a_shooting = function(req, res) {
  var new_shooting = new Shooting(req.body);

  //handles null error 
   if(!new_shooting.shooting || !new_shooting.status){
            res.status(400).send({ error:true, message: 'Please provide id' });
        }
    else{
      Shooting.createShooting(new_shooting, function(err, shooting) { 
        if (err)
          res.send(err);
        res.json(shooting);
      });
    }
};

exports.update_a_shooting = function(req, res) {
  Shooting.updateById(req.params.shootingId, new Shooting(req.body), function(err, shooting) {
    if (err)
      res.send(err);
    res.json(shooting);
  });
};

exports.delete_a_shooting = function(req, res) {
  Shooting.remove( req.params.shootingId, function(err, shooting) {
    if (err)
      res.send(err);
    res.json({ message: 'Shooting successfully deleted' });
  });
};