/*jslint node:true*/
/*global YUI*/

YUI.add('Page', function (Y, NAME) {

/**
 * The Page module.
 *
 * @module Page
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Extract the request context to be printed out
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function (ac) {

            var req = ac.http.getRequest(),
                ctx = Y.mojito.util.copy(req.context),
                key,
                val,
                props = [];

            for (key in ctx) {
                if (ctx.hasOwnProperty(key)) {
                    val = ctx[key];
                    // console.log(key + ' => ' + val);
                    props.push({'key': key, 'val': val});
                }
            }

            ac.done({props: props});
        }

    };

}, '0.0.1', {requires: [
    'mojito',
    'mojito-assets-addon',
    'mojito-http-addon',
    'mojito-util'
]});
