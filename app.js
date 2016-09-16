var express = require('express');
var app = express();
var getUserFeed = require('./db.js').getUserFeed;
var getUserImages = require('./db.js').getUserImages;
var getImage = require('./db.js').getImage;
var getUserIdByName = require('./db.js').getUserIdByName;
var fs = require('fs');
var mime = require('mime');


var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/Images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + mime.extension(file.mimetype));
  }
})

var upload = multer({ storage: multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/Images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + mime.extension(file.mimetype));
  }
}) })


app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('build'));

app.get('/getImage/:userID/:file', function (req, res){
  file = req.params.file;
  userID = req.params.userID;
  var img = getImage(file, userID);
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.post('/upload/:imgName/:imgCaption/:userID', 
    multer({ storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + '/Images/' + req.params.userID + "/");
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '.' + mime.extension(file.mimetype));
        }
    }) 
}).single('image'), function (req, res, next) {
        var imgName = req.params.imgName;
        var imgCaption = req.params.imgCaption;
        var userID = req.params.userID;
        console.log(userID);
        console.log("success");
        console.log(req.file);
        res.status(204).end();
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

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

app.get('/:userID', function (req, res) {
var userID = req.params.userID;

    storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/Images/' + userID + "/");
  },
  filename: function (req, file, cb) {
    cb(null, "/" + userID + "/" + Date.now() + '.' + mime.extension(file.mimetype));
  }
})

    upload = multer({ storage: storage })

    res.redirect('index.html');
});

