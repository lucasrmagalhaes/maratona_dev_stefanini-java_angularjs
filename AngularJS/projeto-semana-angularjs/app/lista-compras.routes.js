(function () {
    "use strict";

    angular.module('listaComprasApp')
        .config(routes)
        .run(configDefaults);

    routes.$inject = ['$routeProvider'];
    configDefaults.$inject = ['$rootScope'];

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/login'
            })
            .when('/home', {
                templateUrl: 'acesso/home.tpl.html',
            })
            .when('/login', {
                templateUrl: 'acesso/login.tpl.html',
            })
            .when('/register', {
                templateUrl: 'acesso/register.tpl.html'
            })
            .when('/categorias', {
                templateUrl: 'categorias/listar.tpl.html'
            })
            .when('/gerenciar/categorias', {
                templateUrl: 'categorias/categorias.tpl.html'
            })
            .when('/gerenciar/categorias/new', {
                templateUrl: 'categorias/formulario.tpl.html'
            })
            .when('/gerenciar/categorias/editar/:id', {
                templateUrl: 'categorias/formulario.tpl.html'
            })
            .when('/itens', {
                templateUrl: 'itens/listar.tpl.html'
            })
            .when('/gerenciar/itens', {
                templateUrl: 'itens/itens.tpl.html'
            })
            .when('/gerenciar/itens/new', {
                templateUrl: 'itens/formulario.tpl.html'
            })
            .when('/gerenciar/itens/editar/:id', {
                templateUrl: 'itens/formulario.tpl.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

    function configDefaults($rootScope) {
        $rootScope.listaMensagens = [];
    }

})();