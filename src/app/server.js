var config = require("./config.js");
var express = require('express');
var r = require('rethinkdb');

var app = express();

var rdbConn;

// connect to rethinkdb
r.connect(config.rethinkdb, function(err, conn) {
    rdbConn = conn;
    if (err) {
        console.log('Could not connect to rethinkdb.');
        console.log(err.message);
    }
    else {
        console.log('Connection successful.');
    }
});

// set view engine and map views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// map requests
app.get('/', function(req, res) {
    res.render('index', {rdbConnected: (rdbConn != null)});
});

// start server
app.listen(config.express.port, '0.0.0.0', function() {
  console.log('Server started on port ' + config.express.port + '.')
});