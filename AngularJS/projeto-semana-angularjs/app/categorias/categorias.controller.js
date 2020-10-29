(function () {
    "use strict";

    angular.module('listaComprasApp')
        .controller('CategoriasController', categoriasController);

    categoriasController.$inject = [
        'helperFactory',
        'categoriasService',
        '$routeParams'
    ];

    function categoriasController(helper, service, $routeParams) {
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
                    .then(function (_cat) {
                        vm.categoria = _cat;
                    });
            } else {
                return listarCategorias();
            }
        }

        function submit() {
            if (vm.categoria._id) {
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

        function irEditar(_cat) {
            helper.go('/gerenciar/categorias/editar/' + _cat._id);
        }

        function deletar(_id) {
            return service.deletar(_id)
                .then(tratarRetorno);

            function tratarRetorno(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    listarCategorias();
                }
            }
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function listarCategorias() {
            return service.listar()
                .then(salvarCategorias);

            function salvarCategorias(_listaCategorias) {
                vm.listaCategorias = _listaCategorias;
            }
        }

        function cadastrar() {
            return service.cadastrar(vm.categoria)
                .then(function (_categoria) {
                    tratarResposta('cadastrada', _categoria);
                });
        }

        function editar() {
            return service.editar(vm.categoria)
                .then(function (_categoria) {
                    tratarResposta('alterada', _categoria);
                });
        }

        function tratarResposta(_acao, _categoria) {
            if (_categoria._id) {
                helper.addMsg('Categoria ' + _acao + ' com sucesso!', 'success');
                helper.path('/gerenciar/categorias');
            } else
                helper.addMsg(null, 'danger', 'Tente novamente');
        }
    }

})();