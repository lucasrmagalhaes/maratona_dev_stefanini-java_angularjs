(function () {
    "use strict";

    angular.module('listaComprasApp')
        .component('mensagensAlertas', {
            templateUrl: 'componentes/mensagens-alertas.tpl.html',
            controller: 'MensagensAlertasController',
            controllerAs: 'vm',
            bindings: {
                ctrl: '=',
                params: '<',
                name: '='
            },
        });

})();