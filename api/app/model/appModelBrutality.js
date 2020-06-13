"user strict";
var sql = require("./db.js");

//Brutality object constructor
var Brutality = function (brutality) {
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
        console.log("error: ", err);
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
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Brutality.getAllBrutality = function (result) {
  sql.query("Select * from brutality", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("brutality : ", res);
      result(null, res);
    }
  });
};

Brutality.getLast20Brutality = function (result) {
  sql.query("Select * from brutality order by date desc limit 20", function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("brutality : ", res);
      result(null, res);
    }
  });
};

// Brutality.createBrutality = function (newBrutality, result) {
//         sql.query("INSERT INTO brutality set ?", newBrutality, function (err, res) {
//                 if(err) {
//                     console.log("error: ", err);
//                     result(err, null);
//                 }
//                 else{
//                     console.log(res.insertId);
//                     result(null, res.insertId);
//                 }
//             });
// };

// Brutality.updateById = function(id, brutality, result){
//   sql.query("UPDATE brutality SET brutality = ? WHERE brutalityID = ?", [brutality.brutality, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{
//              result(null, res);
//                 }
//             });
// };

// Brutality.remove = function(id, result){
//      sql.query("DELETE FROM brutality WHERE brutalityID = ?", [id], function (err, res) {
//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{
//                  result(null, res);
//                 }
//             });
// };

module.exports = Brutality;
