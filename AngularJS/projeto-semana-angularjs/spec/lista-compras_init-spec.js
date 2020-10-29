(function () {

    // angular.module('ngRoute', []);
    angular.module('moduloExterno', []); // mock

    angular.mock.listaComprasMock = function ($routeProvider) {
        module('listaComprasApp');
        module(function ($provide) {
            $provide.service('ListaComprasService', function () {
                return {
                    exemplo: function () { return {}; },
                };
            });
        });
    };

}());
