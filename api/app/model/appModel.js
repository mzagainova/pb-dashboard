'user strict';
var sql = require('./db.js');

//Shooting object constructor
var Shooting = function(shooting){
    this.shooting = shooting.shooting;
    this.status = shooting.status;
    this.created_at = new Date();
};
// Shooting.createShooting = function (newShooting, result) {    
//         sql.query("INSERT INTO shootings set ?", newShooting, function (err, res) {
                
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
Shooting.getShootingById = function (shootingId, result) {
        sql.query("Select * from shootings where shootingsID = ? ", shootingId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Shooting.getAllShooting = function (result) {
        sql.query("Select * from shootings", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('shootings : ', res);  
                  result(null, res);
                }
            });   
};
// Shooting.updateById = function(id, shooting, result){
//   sql.query("UPDATE shootings SET shooting = ? WHERE shootingsID = ?", [shooting.shooting, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
// Shooting.remove = function(id, result){
//      sql.query("DELETE FROM shootings WHERE shootingsID = ?", [id], function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{
               
//                  result(null, res);
//                 }
//             }); 
// };

module.exports= Shooting;