
/*jslint node:true*/

function Bar() {
    console.log('[bar] middleware init OK');
}

Bar.prototype.handle = function (logger, store) {

    return function (req, res, next) {
        if (req.url) {
            console.log('[bar] req.url = ' + req.url);
        }
        next();
    };
};

module.exports = function (config) {
    var bar = new Bar();
    return bar.handle(config.logger, config.store);
};
