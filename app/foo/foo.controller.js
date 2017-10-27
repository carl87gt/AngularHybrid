angular
    .module('myApp.foo', [])
    .controller('FooController', fooController);

fooController.$inject = ['FooService', 'BarService'];

function fooController(FooService, BarService) {
    let vm = this;
    vm.title = 'foo component - angular v1.x component';

    vm.$onInit = function () {
        console.log("Foo controller initializing");
    };

    vm.fooData = FooService.getData();

    vm.barData = BarService.getData();

}
