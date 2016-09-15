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

app.listen(3000, function () {
    console.log('Listening on port 3000');
});