

/*jslint node:true*/

'use strict';
process.chdir(__dirname);

/**
This is an example of a mojito app using the `express` way.

**/

var debug = require('debug')('app:yaml'),
    path = require('path'),
    express = require('express'),
    mojito = require('./node_modules/mojito/lib/mojito'),
    appProto = express.application,
    defaultConfiguration = appProto.defaultConfiguration,
    app;



appProto.defaultConfiguration = function () {
    defaultConfiguration.apply(this, arguments);

    console.log('App specific defaultConfiguration');

    // `this` refers to the `app` instance
    mojito(this);
};

app = express();
// console.log(app.mojito.options);
// app.set('port', app.mojito.options.port);
app.set('port', 8666);

/*
app = mojito.createServer(options);
app.listen(null, null, function (err) {
    console.log('Server listening on port ' + options.port);
});
*/


// TODO:
// 1. provide mechanism for developers to register their middleware in
//    whatever order they need to, mixing theirs with mojitos.
// 2. register the default set of middlewares
// 3. register user specific middleware


// app.use(mojito.middlewares());
app.use(require('./middleware/sniffer')({ logger: debug }));
// console.log(mojito);

app.get('/', function (req, res) {
    res.send('200 OK');
});

app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port') + ' ' +
               'in ' + app.get('env') + ' mode');
});
