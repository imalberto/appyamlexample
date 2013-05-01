
/*jslint node:true*/
/*global YUI, YUITest*/
YUI.add('Page-tests', function (Y) {

    var suite = new YUITest.TestSuite('Page-tests'),
        controller = null,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({
        
        name: 'Page user tests',
        
        setUp: function () {
            controller = Y.mojito.controllers.Page;
        },
        tearDown: function () {
            controller = null;
        },
        
        'test mojit': function () {
            A.isNotNull(controller);
            A.isFunction(controller.index);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'Page']});
