import sql from "./db";

//Count object constructor
var Count = function(count){
    this.count = count.count;
    this.status = count.status;
    this.created_at = new Date();
};

Count.countAllRecords = function (result) {
    sql.query(
    "select (Select count(*) as total from shootings) + (Select count(*) as total from brutality) as total", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Count.countAllShootings = function (result) {
    sql.query("Select count(*) as total from shootings", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Count.countAllBrutality = function (result) {
    sql.query("Select count(*) as total from brutality", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Count.countAllRecordsByMonth = function (result) {
    sql.query("(Select DATE_FORMAT(date, '%Y-%m') as dmonth, count(*) as total from shootings group by dmonth order by dmonth) UNION (Select DATE_FORMAT(date, '%Y-%m') as dmonth, count(*) as total from brutality group by dmonth order by dmonth) ", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Count.countAllShootingsByMonth = function (result) {
    sql.query("Select DATE_FORMAT(date, '%Y-%m') as dmonth, count(*) as total from shootings group by dmonth order by dmonth", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};

Count.countAllBrutalityByMonth = function (result) {
    sql.query("Select DATE_FORMAT(date, '%Y-%m') as dmonth, count(*) as total from brutality group by dmonth order by dmonth", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};

Count.countAllRecordsByState = function (result) {
    sql.query("(Select state, count(*) as total from shootings group by state order by state) UNION (Select state, count(*) as total from brutality group by state order by state) ", 
    function (err, res) {
        if(err) {
          result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};

Count.countAllShootingsByState = function (result) {
    sql.query("Select state, count(*) as total from shootings group by state order by state", 
    function (err, res) {
        if(err) {
          result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};

Count.countAllBrutalityByState = function (result) {
    sql.query("Select state, count(*) as total from brutality group by state order by state", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};

Count.countAllRecordsByStateAbbv = function (result) {
    sql.query("(Select state_code, count(*) as total from shootings group by state_code order by state_code) UNION (Select state_code, count(*) as total from brutality group by state_code order by state_code) ", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};

Count.countAllShootingsByStateAbbv = function (result) {
    sql.query("Select state_code, count(*) as total from shootings group by state_code order by state_code", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
        result(null, res);
        }
    });   
};

Count.countAllBrutalityByStateAbbv = function (result) {
    sql.query("Select state_code, count(*) as total from brutality group by state_code order by state_code", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
        result(null, res);
        }
    });   
};


Count.countAllRecordsByStateCounty = function (result) {
    sql.query("(Select state, county, count(*) as total from shootings group by state, county order by state, county) UNION (Select state, county, count(*) as total from brutality group by state, county order by state, county) ", 
    function (err, res) {
            if(err) {
                result(err, null);
            }
            else{
              result(null, res);
            }
    });   
};

Count.countAllShootingsByStateCounty = function (result) {
    sql.query("Select state, county, count(*) as total from shootings group by state, county order by state, county", 
    function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};
    
Count.countAllBrutalityByStateCounty = function (result) {
    sql.query(
        "Select state, county, count(*) as total from brutality group by state, county order by state, county", 
        function (
            err, res) {
        if(err) {
            result(err, null);
        }
        else{
          result(null, res);
        }
    });   
};
module.exports= Count;