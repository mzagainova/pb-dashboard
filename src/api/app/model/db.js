import mysql from "mysql";

//local mysql db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "milehigh_glp_read",
  password: process.env.DBPASS,
  database: "milehigh_grassroots_law",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
