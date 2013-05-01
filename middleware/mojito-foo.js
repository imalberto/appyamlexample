
/*jslint node:true*/

function Foo() {
    console.log('[mojito-foo] middleware init OK');
}

Foo.prototype.handle = function (logger, store) {

    return function (req, res, next) {
        if (req.url) {
            console.log('[mojito-foo] req.url = ' + req.url);
        }
        next();
    };
};

module.exports = function (config) {
    var foo = new Foo();
    return foo.handle(config.logger, config.store);
};
