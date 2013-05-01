
/*jslint node:true*/

function Sniffer() {
    console.log('[sniffer] middleware init OK');
}

Sniffer.prototype.handle = function (logger, store) {

    return function (req, res, next) {
        if (req.url) {
            console.log('[sniffer] req.url = ' + req.url);
        }
        next();
    };
};

module.exports = function (config) {
    var sniffer = new Sniffer();
    return sniffer.handle(config.logger, config.store);
};
