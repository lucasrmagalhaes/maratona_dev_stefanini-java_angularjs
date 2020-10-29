(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('MensagensAlertasController', mensagensAlertasController);

    mensagensAlertasController.$inject = ['$rootScope'];

    function mensagensAlertasController($rootScope) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.teste = 'um texto qualquer';

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.ctrl = {
            funcao: funcao
        }

        // vm.params

        function funcao() {
            console.log('Função do meu componente');
            console.log('listaMensagens', $rootScope.listaMensagens);
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();