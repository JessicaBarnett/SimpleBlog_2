var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(__dirname + '/assets'));


//request home page
app.get('/', function (req, res) {
  console.log("requesting home page");
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


//request any blog page
app.get('/blog*', function (req, res) {
  console.log("requesting blog page at: ", req.params);
  res.send('this is a blog page!!');
});


//request blogData.json file
app.get('/data/blogData.json', function (req, res) {
  console.log('requesting json data');
  res.sendFile(__dirname + '/data/blogData.json');
});


//start server
var server = app.listen(4000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('listening on port ', port)
});
