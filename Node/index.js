var express = require('express');
var bodyParser = require('body-parser');
var dataroute = require('./routes/data');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/data', dataroute);

app.listen(PORT, function() {
    console.log('Contacts server listening on port %s.', PORT);
  });