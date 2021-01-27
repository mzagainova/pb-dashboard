var Shooting = require("../model/appModelShootings.js");
var Count = require("../model/appModelCount.js");
var Brutality = require("../model/appModelBrutality.js");

// COUNT APIs
exports.count_all_records = function (req, res) {
  Count.countAllRecords(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_shootings = function (req, res) {
  Count.countAllShootings(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_brutality = function (req, res) {
  Count.countAllBrutality(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_records_by_state = function (req, res) {
  Count.countAllRecordsByState(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_shootings_by_state = function (req, res) {
  Count.countAllShootingsByState(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_brutality_by_state = function (req, res) {
  Count.countAllBrutalityByState(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_records_by_state_county = function (req, res) {
  Count.countAllRecordsByStateCounty(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_shootings_by_state_county = function (req, res) {
  Count.countAllShootingsByStateCounty(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_brutality_by_state_county = function (req, res) {
  Count.countAllBrutalityByStateCounty(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_records_by_stateabbv = function (req, res) {
  Count.countAllRecordsByStateAbbv(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_shootings_by_stateabbv = function (req, res) {
  Count.countAllShootingsByStateAbbv(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

exports.count_all_brutality_by_stateabbv = function (req, res) {
  Count.countAllBrutalityByStateAbbv(function (err, count) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", count);
    res.send(count);
  });
};

// SHOOTINGS API
exports.list_all_shootings = function (req, res) {
  Shooting.getAllShootings(function (err, shooting) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", shooting);
    res.send(shooting);
  });
};

exports.list_last_shootings = function (req, res) {
  Shooting.getLast20Shootings(function (err, shooting) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", shooting);
    res.send(shooting);
  });
};

exports.read_a_shooting = function (req, res) {
  Shooting.getShootingById(req.params.shootingId, function (err, shooting) {
    if (err) res.send(err);
    res.json(shooting);
  });
};

exports.read_span_shootings = function (req, res) {
  Shooting.getShootingByIds(
    req.params.shootingId1,
    req.params.shootingId2,
    function (err, shooting) {
      if (err) res.send(err);
      res.json(shooting);
    }
  );
};

// exports.create_a_shooting = function(req, res) {
//   var new_shooting = new Shooting(req.body);

//   //handles null error
//    if(!new_shooting.shooting || !new_shooting.status){
//             res.status(400).send({ error:true, message: 'Please provide id' });
//         }
//     else{
//       Shooting.createShooting(new_shooting, function(err, shooting) {
//         if (err)
//           res.send(err);
//         res.json(shooting);
//       });
//     }
// };

// exports.update_a_shooting = function(req, res) {
//   Shooting.updateById(req.params.shootingId, new Shooting(req.body), function(err, shooting) {
//     if (err)
//       res.send(err);
//     res.json(shooting);
//   });
// };

// exports.delete_a_shooting = function(req, res) {
//   Shooting.remove( req.params.shootingId, function(err, shooting) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Shooting successfully deleted' });
//   });
// };

// BRUTALITY APIs
exports.list_all_brutality = function (req, res) {
  Brutality.getAllBrutality(function (err, brutality) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", brutality);
    res.send(brutality);
  });
};

exports.list_last_brutality = function (req, res) {
  Brutality.getLast20Brutality(function (err, brutality) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", brutality);
    res.send(brutality);
  });
};

exports.read_a_brutality = function (req, res) {
  Brutality.getBrutalityById(req.params.brutalityId, function (err, brutality) {
    if (err) res.send(err);
    res.json(brutality);
  });
};

exports.read_span_brutality = function (req, res) {
  Brutality.getBrutalityByIds(
    req.params.brutalityId1,
    req.params.brutalityId2,
    function (err, brutality) {
      if (err) res.send(err);
      res.json(brutality);
    }
  );
};

// exports.create_a_brutality = function(req, res) {
//   var new_brutality = new Brutality(req.body);

//   //handles null error
//    if(!new_brutality.brutality || !new_brutality.status){
//             res.status(400).send({ error:true, message: 'Please provide id' });
//         }
//     else{
//       Brutality.createBrutality(new_brutality, function(err, brutality) {
//         if (err)
//           res.send(err);
//         res.json(brutality);
//       });
//     }
// };

// exports.update_a_brutality = function(req, res) {
//   Brutality.updateById(req.params.brutalityId, new Brutality(req.body), function(err, brutality) {
//     if (err)
//       res.send(err);
//     res.json(brutality);
//   });
// };

// exports.delete_a_brutality = function(req, res) {
//   Brutality.remove( req.params.brutalityId, function(err, brutality) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Brutality successfully deleted' });
//   });
// };
