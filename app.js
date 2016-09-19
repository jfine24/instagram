var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var getUserFeed = require('./db.js').getUserFeed;
var getUserImages = require('./db.js').getUserImages;
var getImage = require('./db.js').getImage;
var getUserIdByName = require('./db.js').getUserIdByName;

app.use(cookieParser());

app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('build'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/getImage/:userID/:file', function (req, res){
  file = req.params.file;
  userID = req.params.userID;
  var img = getImage(file, userID);
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.get('/getUserIdByName/:userName', function (req, res){
  var userName = req.params.userName;

  var userID = getUserIdByName(userName);
     userID.then(
        (val) => {
            res.send(val);
            }
        ).catch(
            (err) => {
            res.send(err);
        });

  console.log(userID);
  //res.send(userID);
});

app.get('/', function (req, res) {
    var userName = req.cookies.userName;
    console.log("Cookies: ", req.cookies.userName);

    if ( userName == undefined) {
        res.redirect('/login.html');
    } else {
        res.redirect('/default.html');
    }

});

app.all("/default", function (req, res) {
    var userName = req.cookies.userName;
    var userID = req.cookies.userID;
    if (userName == null) {
        res.json({ error: "no userName is found from cookies" });
    } else {
        res.json({ userName: userName, userID: userID});
    }
});


app.post('/login', function (req, res) {
    var userName = req.body.userName;
    //var user = getUserIdByName(userName);

     var user = getUserIdByName(userName);
     user.then(
        (val) => {
            console.log("From App.js: "+val);
            
            if (user) {
                res.cookie('userName', userName);
                res.cookie('userID', val );
                console.log(userName + "(ID: "+ user +") is logged in");
                res.json({ userName: user });
            } else {
                console.log("user is not found");
                res.json({ error: "User is not found" });

            }
        }
        ).catch(
            (err) => {
            res.send(err);
        });       

    console.log(userName, user);

});

app.all("/logout", function (req, res) {
    res.clearCookie("userName");
    res.clearCookie("userID");
    console.log("user is logged out");
    res.redirect('/login.html');
});

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

