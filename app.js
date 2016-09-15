var express = require('express');
var app = express();
var getUserFeed = require('./db.js').getUserFeed;
var getUserImages = require('./db.js').getUserImages;

app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('build'));

app.get('/getUserFeeds/:userId', function(req, res) {
     var userid = req.params.userId;
     console.log("userid:" + userid);   
     var p = getUserFeed(userid);
     p.then(
        (val) => {
            res.send(val);
            }
        ).catch(
            (err) => {
            res.send(err);
        });       
});

app.get('/getUserImages/:userId', function(req, res) {
     var userid = req.params.userId;
     console.log("userid:" + userid);   
     var p = getUserImages(userid);
     p.then(
        (val) => {
            res.send(val);
            }
        ).catch(
            (err) => {
            res.send(err);
        });       
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

app.get('/', function (req, res) {
    res.redirect('index.html');
});