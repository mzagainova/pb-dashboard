'user strict';
var sql = require('./db.js');

//Count object constructor
var Count = function(count){
    this.count = count.count;
    this.status = count.status;
    this.created_at = new Date();
};

Count.countAllRecords = function (result) {
        sql.query("select (Select count(*) as total from shootings) + (Select count(*) as total from brutality) as total", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('counts : ', res);  
                  result(null, res);
                }
            });   
};

Count.countAllShootings = function (result) {
    sql.query("Select count(*) as total from shootings", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('counts : ', res);  
              result(null, res);
            }
        });   
};

Count.countAllBrutality = function (result) {
    sql.query("Select count(*) as total from brutality", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('counts : ', res);  
              result(null, res);
            }
        });   
};

Count.countAllRecordsByState = function (result) {
    sql.query("(Select state, count(*) as total from milehigh_grassroots_law.shootings group by state order by state) UNION (Select state, count(*) as total from milehigh_grassroots_law.brutality group by state order by state) ", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('counts : ', res);  
              result(null, res);
            }
        });   
};

Count.countAllShootingsByState = function (result) {
sql.query("Select state, count(*) as total from shootings group by state order by state", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('counts : ', res);  
          result(null, res);
        }
    });   
};

Count.countAllBrutalityByState = function (result) {
sql.query("Select state, count(*) as total from brutality group by state order by state", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('counts : ', res);  
          result(null, res);
        }
    });   
};

Count.countAllRecordsByStateAbbv = function (result) {
sql.query("(Select state_code, count(*) as total from milehigh_grassroots_law.shootings group by state_code order by state_code) UNION (Select state_code, count(*) as total from milehigh_grassroots_law.brutality group by state_code order by state_code) ", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('counts : ', res);  
          result(null, res);
        }
    });   
};

Count.countAllShootingsByStateAbbv = function (result) {
sql.query("Select state_code, count(*) as total from shootings group by state_code order by state_code", function (err, res) {

    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
      console.log('counts : ', res);  
      result(null, res);
    }
});   
};

Count.countAllBrutalityByStateAbbv = function (result) {
sql.query("Select state_code, count(*) as total from brutality group by state_code order by state_code", function (err, res) {

    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else{
      console.log('counts : ', res);  
      result(null, res);
    }
});   
};
module.exports= Count;