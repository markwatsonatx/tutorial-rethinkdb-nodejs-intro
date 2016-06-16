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

// start server
app.listen(config.express.port, '0.0.0.0', function() {
  console.log('Server started on port ' + config.express.port + '.')
});
