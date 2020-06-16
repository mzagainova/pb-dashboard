import sql from "./db";

//Shooting object constructor
const Shooting = function (shooting) {
  this.shooting = shooting.shooting;
  this.status = shooting.status;
  this.created_at = new Date();
};
Shooting.getShootingById = function (shootingId, result) {
  sql.query(
    "Select * from shootings where shootingsID = ? ",
    shootingId,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Shooting.getShootingByIds = function (shootingId1, shootingId2, result) {
  sql.query(
    "Select * from shootings where shootingsID between ? and ?",
    [shootingId1, shootingId2],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Shooting.getAllShootings = function (result) {
  sql.query("Select * from shootings", 
  function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Shooting.getLast20Shootings = function (result) {
  sql.query("Select * from shootings order by date desc limit 20", 
  function (err,res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
module.exports = Shooting;
