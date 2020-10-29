(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('ItensController', itensController);

    itensController.$inject = [
        'helperFactory',
        'itensService',
        '$routeParams'
    ];

    function itensController(helper, service, $routeParams) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */


        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;
        vm.irEditar = irEditar;
        vm.deletar = deletar;
        vm.submit = submit;

        function iniciar() {
            if ($routeParams.id) {
                return consultar($routeParams.id)
                    .then(function (_item) {
                        vm.item = _item;
                    })
                    .then(listarCategorias);
            } else {
                return listar()
                    .then(listarCategorias);
            }
        }

        function submit() {
            if (vm.item._id) {
                return editar();
            } else {
                return cadastrar();
            }
        }

        function consultar(_id) {
            return service.consultar(_id)
                .then(tratarRetorno);

            function tratarRetorno(_resp) {
                if (_resp._id) {
                    return _resp;
                } else
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
            }
        }

        function irEditar(_item) {
            helper.go('/gerenciar/itens/editar/' + _item._id);
        }

        function deletar(_id) {
            return service.deletar(_id)
                .then(tratarRetorno);

            function tratarRetorno(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    listar();
                }
            }
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function listar() {
            return service.listar()
                .then(salvarItens);

            function salvarItens(_listaItens) {
                vm.listaItens = _listaItens;
            }
        }

        function listarCategorias() {
            return service.listarCategorias()
                .then(salvarCategorias);

            function salvarCategorias(_listaCategorias) {
                vm.listaCategorias = _listaCategorias;
            }
        }

        function cadastrar() {
            return service.cadastrar(vm.item)
                .then(function (_item) {
                    tratarResposta('cadastrado', _item);
                });
        }

        function editar() {
            return service.editar(vm.item)
                .then(function (_item) {
                    tratarResposta('alterado', _item);
                });
        }

        function tratarResposta(_acao, _item) {
            if (_item._id) {
                helper.path('/gerenciar/itens');
                helper.addMsg('Item ' + _acao + ' com sucesso!', 'success');
            } else
                helper.addMsg(null, 'danger', 'Tente novamente');
        }
    }

})();