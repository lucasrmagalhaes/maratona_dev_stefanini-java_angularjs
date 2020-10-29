(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['ListaComprasService', 'helperFactory'];

    function headerController(service, helper) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.logout = logout;
        vm.iniciar = iniciar;
        vm.serviceF = serviceF;

        // Podemos criar uma função para ser executada assim que a controller for iniciada
        // então colocamos dentro dessa função o 'vm.go', para que assim que acessar
        // a aplicação a partir de qualquer rota, será usuário o acesso e setado a página na qual estiver
        function iniciar() {
            vm.go();
        }


        // vm.ativo = false; --> EXEMPLO DO NG-CLASS E NG-STYLE

        /*
        MOVI O 'vm.go' PARA A 'helper.factory' PARA DEMAIS CONTROLLERS USAREM
        ESTA FUNCIONALIDADE E CONSEGUIR NAVEGAR ENTRE AS ROTAS, FAZENDO A MESMA
        CHECAGEM SE ESTÁ LOGADO E SETANDO A PÁGINA QUE ESTÁ 
        */
        // function go(_path) {
        //     var path = _path ? _path : $location.path();
        //     if (path === '/login' || path === '/register') {
        //         $location.path(path);
        //     } else {
        //         isLoggedIn(path);
        //     }
        //     setPage();
        // }

        function serviceF(_path) {
            return service.exemplo()
                .then(function (response) {
                    console.log('veio da service', response);
                });
        }

        function logout() {
            helper.setRootScope('userLogged', undefined);
            helper.path('/login');
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */


    }

})();