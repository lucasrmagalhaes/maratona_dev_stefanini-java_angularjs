(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('AcessoController', acessoController);

    acessoController.$inject = ['helperFactory', 'ListaComprasService'];

    function acessoController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        // Array do exemplo do uso do 'ngOptions'
        // vm.tiposEmail = [
        //     { id: 1, desc: '@hotmail.com', disable: false, tipo: 'geral' },
        //     { id: 2, desc: '@outlook.com', disable: false, tipo: 'geral' },
        //     { id: 3, desc: '@gmail.com', disable: false, tipo: 'geral' },
        //     { id: 4, desc: '@stefanini.com', disable: false, tipo: 'corporativo' },
        //     { id: 5, desc: '@yahoo.com.br', disable: true, tipo: 'geral' },
        //     { id: 6, desc: '@empresa.com.br', disable: false, tipo: 'corporativo' },
        //     { id: 7, desc: '@teste.com', disable: true, tipo: 'corporativo' },
        // ];

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.logar = logar;
        vm.cadastrar = register;

        function logar() {
            return service.logar(vm.login)
                .then(function (_resp) {
                    if (_resp.error) {
                        helper.addMsg(_resp.msg, 'danger');
                    } else {
                        helper.setRootScope('userLogged', _resp.userLogged);
                        // Posso usar simplismente o 'helper.path' porque
                        // não preciso verificar se ele está logado, pois esse 
                        // é retorno de sucesso do login, mas quando precisar
                        // checar como nas outras rotas usamos o 'helper.go'
                        helper.path('/home');
                        helper.addMsg(_resp.message, 'success');
                    }
                });
        }

        function register() {
            var newUser = {
                name: vm.user.nome,
                email: vm.user.email,
                username: vm.user.username,
                password: vm.user.password,
            };
            return service.register(newUser)
                .then(tratarRes);

            // Estou usando uma função declarada em vez de uma função anônima dentro do '.then(fn)'
            // Observe que essa função 'tratarRes' está dentro da função 'register'
            // Então ela só está disponível para ser usada dentro do escopo da
            // função 'register', caso tentar usa-la no contexto da controller
            // não vai funcionar porque vai dizer que não existe essa função
            function tratarRes(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    helper.path('/home');
                    helper.setRootScope('userLogged', _resp.userLogged);
                }

            }
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();