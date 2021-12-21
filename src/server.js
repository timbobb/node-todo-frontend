'use strict';
const helpers = require('handlebars-helpers')();
var server = require('express')();

var url = process.env.url
server.set('port', (process.env.PORT || 3000))

require('./config/security')(server);
require('./config/handlebars')(server);
require('./config/bodyparser')(server);
require('./routes/routes')(server);

server.listen(process.env.PORT ? process.env.PORT : 3000, function () {
    console.log("Express server listening on port " + (process.env.PORT ? process.env.PORT : 3000));
});

    server.listen(app.get('port'), function() {
        console.log("Node JS app is running at http://localhost:" + server.get('port') +"/bilatechsolutions");
      })
