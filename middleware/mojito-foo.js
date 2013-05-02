
/*jslint node:true*/

var debug = require('debug')('middleware:mojito-foo');

function Foo() {
    debug('middleware init OK');
}

Foo.prototype.handle = function (logger, store) {

    return function (req, res, next) {
        if (req.url) {
            debug('req.url = ' + req.url);
        }
        next();
    };
};

module.exports = function (config) {
    var foo = new Foo();
    return foo.handle();
};
