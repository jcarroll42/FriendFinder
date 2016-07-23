var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);

app.listen(port, function(){
	console.log("App listening on port " + port);
});
