var express = require('express');
var app = express();

app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('build'));

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

app.get('/', function (req, res) {
    res.redirect('index.html');
});
