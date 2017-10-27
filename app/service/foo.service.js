angular
    .module('myApp')
    .service('FooService', FooService);

FooService.$inject = ['$q'];

function FooService($q) {
    let vm = this;
    vm.getData = getData;

    function getData() {
        return 'hello from foo service - angularjs v1.x service';
    }
}
