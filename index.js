// index.js
// where your node app starts

//can use env  for hide port 
port = 3000

// init project

var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/whoami', function (req, res) {
  res.json({
    ipadress:req.socket.remoteAddress,
    language:req.headers['accept-language'],
    software:req.headers['user-agent']})
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  res.json({
    ipadress:req.socket.remoteAddress,
    language:req.headers['accept-language'],
    software:req.headers['user-agent']})
});

// listen for requests :)
var listener = app.listen(port= 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
