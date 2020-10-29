(function () {
    "use strict";

    angular.module('listaComprasApp')
        .factory('helperFactory', helperFactory);

    helperFactory.$inject = [
        '$rootScope',
        '$location',
        'constantes',
        'capitalizeFilter'
    ];

    function helperFactory($rootScope, $location, constantes, capitalize) {

        return {
            addMsg: addMsg,
            setRootScope: setRootScope,
            getRootScope: getRootScope,
            sendError: sendError,
            path: path,
            go: go,
        }

        function addMsg(_msg, _tipo, _acao) {
            var lastMsg = $rootScope.listaMensagens.length ?
                $rootScope.listaMensagens[$rootScope.listaMensagens.length - 1] : { text: '' };

            if (lastMsg.text !== _msg) {
                $rootScope.listaMensagens.push({
                    text: _msg ? _msg : constantes.MSG_ERRO,
                    tipo: _tipo ? _tipo : 'info',
                    acao: _acao ? _acao : ''
                });
            }
        }

        function path(_path) {
            $rootScope.listaMensagens = [];
            return _path ? $location.path(_path) : $location.path();
        }

        function setRootScope(_key, _obj) {
            $rootScope[_key] = _obj;
        }

        function getRootScope(_key) {
            return $rootScope[_key];
        }

        function sendError(_error) {
            return { error: true, msg: _error.data.message };
        }

        // Retirei o 'vm.go' do header.controller, porque precisamos
        // dessa funcionalidade em todo lugar que formos trocar de rota
        // então colocamos no nosso helper.factory e usamos nas demais controlllers
        function go(_path) {
            // Limpa as mensagens quando estiver trocando de rota
            $rootScope.listaMensagens = [];

            var path = _path ? _path : $location.path();
            if (path === '/login' || path === '/register') {
                $location.path(path);
            } else {
                isLoggedIn(path);
            }
            // Seta o título da página, veja a implementação
            $rootScope.page = setPage();

            function isLoggedIn(_path) {
                if ($rootScope.userLogged) {
                    $location.path(_path);
                } else {
                    $location.path('/login');
                    addMsg(constantes.MENSAGENS.SEM_ACESSO, 'danger', 'Faça o login.');
                }
            }

            // Implementei mais algumas coisas no 'setPage' para poder
            // contemplas as novas rotas e o título da página ficar mais amigavel (formatado)
            // pode ver o exemplo na rota '/gerenciar/categorias'
            function setPage() {
                var page = $location.path().substring(1);
                if (page.indexOf('/') === -1) return page;
                var arr = page.split('/');
                // 'capitalize' É UM FILTRO, REPARE NO $inject
                // ele está em 'utilities/filtros.js'
                return capitalize(arr[0]) + ' | ' + capitalize(arr[1]);
            }
        }

    }

})();