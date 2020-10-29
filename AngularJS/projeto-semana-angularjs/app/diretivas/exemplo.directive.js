(function () {
    "use strict";

    angular.module('listaComprasApp')
        .directive('exemplo', exemplo);

    exemplo.$inject = [];

    function exemplo() {
        return {
            template:
                '<div class="container">' +
                '    <span>{{teste}}---{{nomeTeste}}</span>' +
                '    <br>' +
                '    <span ng-transclude></span>' +
                '</div>',
            // templateUrl: 'diretivas/alertas.tpl.html'
            replace: true, // substitui o HTML
            restrict: 'A', // restringe uso da diretiva
            scope: {
                teste: '@teste',
                nomeTeste: '=' // @
            },
            transclude: true, // transportar html
            // link => funcao (scope, element, attrs, ctrl, transcludeFn)
            // require: false
            // require => vincula diretivas que recebe controller como parametro
            // controller => function ($scope, $element, $attrs) {
            // implementação 'funcao'
            // retrun { funcao: funcao}
            // }

            // compile
        }
    }

})();