var express = require('express');
var app = new express();
var router = express.Router();
var port = 8686;
var parser = require('body-parser');

app.get('/', function(req, res){
	res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname+'/../temp'))
.listen(port);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

var productRoute = require('./routes/products.js')(express);
app.use('/api/', productRoute);



