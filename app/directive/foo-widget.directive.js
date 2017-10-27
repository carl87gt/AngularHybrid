angular
    .module('myApp', [])
    .directive('fooWidget', function() {
        return {
            restrict: 'E',
            replace: false,
            template: '<span>Hello from Foo Widget Directive - AngularJS 1.x</span>'
        };
    });
