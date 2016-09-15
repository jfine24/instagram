<<<<<<< HEAD
var express = require('express'),
	app = express();
	sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('insta.sqlite'),
    fs = require('fs'),
    dbGetUserIDByName = require('./db.js').GetUserIDByName,
    dbgetUserImages = require('./db.js').getUserImages,
	dbgetUserFeed = require('./db.js').getUserFeed,    
	bodyParser = require('body-parser'),
	path = require('path');

	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: true
})); 

app.use('/static', express.static(__dirname + '/build'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
=======
var express = require('express');
var app = express();

app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('build'));
>>>>>>> 95f5bdfb5f0d9746d62dc8d69114e63262260fa3

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

app.get('/', function (req, res) {
    res.redirect('index.html');
});
