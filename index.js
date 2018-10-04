var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var encryption = require('./crypto');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send('There is nothing to show you here.');
});

app.post ('/encrypt', (req, res) => {
    res.send(encryption.encrypt(req.body.originText));
});

app.post ('/decrypt', (req, res) => {
    res.send(encryption.decrypt(req.body.encrypted));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log ("Server is connected on port:", port)
});