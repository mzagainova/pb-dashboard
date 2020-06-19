import Shooting from "../model/appModelShootings";
import Count from "../model/appModelCount.js";
import Brutality from "../model/appModelBrutality.js";

// Shooting APIs
export const list_all_shootings = function (req, res) {
  Shooting.getAllShootings(function (err, shooting) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", shooting);
    res.send(shooting);
  });
};

export const list_last_shootings = function (req, res) {
  Shooting.getLast20Shootings(function (err, shooting) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", shooting);
    res.send(shooting);
  });
};

export const read_a_shooting = function (req, res) {
  Shooting.getShootingById(req.params.shootingId, function (err, shooting) {
    if (err) res.send(err);
    res.json(shooting);
  });
};

export const read_span_shootings = function (req, res) {
  Shooting.getShootingByIds(
    req.params.shootingId1,
    req.params.shootingId2,
    function (err, shooting) {
      if (err) res.send(err);
      res.json(shooting);
    }
  );
};

// Count APIs
export const count_all_records = function(req, res) {
  Count.countAllRecords(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_shootings = function(req, res) {
  Count.countAllShootings(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_brutality = function(req, res) {
  Count.countAllBrutality(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_records_by_month = function(req, res) {
  Count.countAllRecordsByMonth(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_shootings_by_month = function(req, res) {
  Count.countAllShootingsByMonth(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_brutality_by_month = function(req, res) {
  Count.countAllBrutalityByMonth(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_records_by_state = function(req, res) {
  Count.countAllRecordsByState(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_shootings_by_state = function(req, res) {
  Count.countAllShootingsByState(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_brutality_by_state = function(req, res) {
  Count.countAllBrutalityByState(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_records_by_state_county = function(req, res) {
  Count.countAllRecordsByStateCounty(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_shootings_by_state_county = function(req, res) {
  Count.countAllShootingsByStateCounty(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_brutality_by_state_county = function(req, res) {
  Count.countAllBrutalityByStateCounty(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_records_by_stateabbv = function(req, res) {
  Count.countAllRecordsByStateAbbv(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_shootings_by_stateabbv = function(req, res) {
  Count.countAllShootingsByStateAbbv(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

export const count_all_brutality_by_stateabbv = function(req, res) {
  Count.countAllBrutalityByStateAbbv(
    function(err, count) {
      if (err) res.send(err);
      res.send(count);
    }
  );
};

// Brutality APIs
export const list_all_brutality = function(req, res) {
  Brutality.getAllBrutality(
    function(err, brutality) {
      if (err) res.send(err);
      res.send(brutality);
    }
  );
};

export const list_last_brutality = function(req, res) {
  Brutality.getLast20Brutality(
    function(err, brutality) {
      if (err) res.send(err);
      res.send(brutality);
    }
  );
};

export const read_a_brutality = function(req, res) {
  Brutality.getBrutalityById(
    req.params.brutalityId, 
    function(err, brutality) {
      if (err) res.send(err);
      res.json(brutality);
    }
  );
};

export const read_span_brutality = function(req, res) {
  Brutality.getBrutalityByIds(
    req.params.brutalityId1, 
    req.params.brutalityId2, 
    function(err, brutality) {
      if (err) res.send(err);
      res.json(brutality);
    }
  );
};
