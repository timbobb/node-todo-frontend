'use strict';
const helpers = require('handlebars-helpers')();
var server = require('express')();

const PORT = 8080;
const HOST = '0.0.0.0';

require('./config/security')(server);
require('./config/handlebars')(server);
require('./config/bodyparser')(server);
require('./routes/routes')(server);

//server.listen(process.env.PORT ? process.env.PORT : 3000, function () {
//    console.log("Node JS app is running at http://localhost:" + (process.env.PORT ? process.env.PORT : 3000));
//});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
