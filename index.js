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
    console.log ("------> encrypt request")
    res.send(encryption.encrypt(req.body.originText));
});

app.post ('/decrypt', (req, res) => {
    console.log("-----------> ", req.body.encrypted);
    var result = encryption.decrypt(req.body.encrypted);
    console.log ("------> decrypted text is:", result);
    res.send(result);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log ("Server is connected on port:", port)
});