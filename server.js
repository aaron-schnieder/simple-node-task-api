// require body-parser for POST body parsing
var bodyParser = require('body-parser');

// setup the express server
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// register body-parser, this adds 'body' object to the request object
app.use(bodyParser.json({ type: 'application/json' }));

// register routes
var routes = require('./api/routes/simpleTaskRoutes');
routes(app);

app.listen(port);

console.log('simple task API started on: ' + port);