

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


/**
The ideal use case is as follows:

// initialize mojito and attach to `app`
app = express();
// at this point, `app.mojito` exist


// middlewares could return all the middleware in the order needed
// OR
// do what express does with connect middleware: attach each middleware
// to the express object (e.g. express.static)
app.use(app.mojito.middlewares());
app.use(app.mojito.dispatcher());
app.use(app.mojito.errorhandler());

// app can insert before or after or mix middleware if necessary
app.use(require('./middleware/foo.js'));

**/

// TODO: move this to lib/mojito.js
// Cannot seem to be able to get defaultConfiguration() to be invoked by 
// `express()` when defined in lib/mojito.js.
appProto.defaultConfiguration = function () {
    defaultConfiguration.apply(this, arguments);

    // `this` refers to the `app` instance
    mojito(this);
};

app = express();
// console.log(app.mojito.options);
// app.set('port', app.mojito.options.port);
app.set('port', 8666);


// TODO:
// 1. provide mechanism for developers to register their middleware in
//    whatever order they need to, mixing theirs with mojitos.
// 2. register the default set of middlewares
// 3. register user specific middleware

// app.use(mojito.middlewares());
app.use(require('./middleware/sniffer')({ logger: debug }));
app.use(require('./middleware/mojito-foo')({ logger: debug }));
// console.log(mojito);


// In addition to mojito app, user can hook up additional mounting points if
// necessary.
app.get('/status', function (req, res) {
    res.send('200 OK');
});

app.listen(app.get('port'), function () {
    debug('Server listening on port ' + app.get('port') + ' ' +
               'in ' + app.get('env') + ' mode');
});
