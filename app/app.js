angular.module('myApp', [
    'ngRoute',
    'myApp.foo'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

        $routeProvider.when('/foo', {
            templateUrl: 'app/template/foo.template.html',
            controller: 'FooController',
            controllerAs: 'fooCtrl'
        });

    }]);
