const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host    : 'localhost',
    user     : 'milehigh_glp_read',
    password : process.env.DBPASS,
    database : 'milehigh_grassroots_law'
});
 
// connect to database
mc.connect();

var path = require('path');
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/api.html')));

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route