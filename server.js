var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

app.listen(process.env.PORT || 3000);
