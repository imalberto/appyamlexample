
/*jslint node:true*/

var debug = require('debug')('middleware:sniffer');

function Sniffer(config) {
    this.config = config || {};
    debug('middleware init OK');
}

Sniffer.prototype.handle = function () {

    return function (req, res, next) {
        if (req.url) {
            debug('req.url = ' + req.url);
        }
        next();
    };
};

module.exports = function (config) {
    var sniffer;
    
    sniffer = new Sniffer(config);
    return sniffer.handle();
};
