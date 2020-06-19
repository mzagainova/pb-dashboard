import sql from "./db";

//Brutality object constructor
const Brutality = function (brutality) {
  this.brutality = brutality.brutality;
  this.status = brutality.status;
  this.created_at = new Date();
};
Brutality.getBrutalityById = function (brutalityId, result) {
  sql.query(
    "Select * from brutality where brutalityID = ? ",
    brutalityId,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Brutality.getBrutalityByIds = function (brutalityId1, brutalityId2, result) {
  sql.query(
    "Select * from brutality where brutalityID between ? and ?",
    [brutalityId1, brutalityId2],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Brutality.getAllBrutality = function (result) {
  sql.query("Select * from brutality", 
  function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Brutality.getLast20Brutality = function (result) {
  sql.query("Select * from brutality order by date desc limit 20", 
  function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
module.exports = Brutality;
