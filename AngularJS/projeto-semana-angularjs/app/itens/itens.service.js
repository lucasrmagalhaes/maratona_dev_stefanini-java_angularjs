(function () {
    "use strict";

    angular.module('listaComprasApp')
        .service('itensService', itensService);

    itensService.$inject = ['$http', 'constantes', 'helperFactory'];

    function itensService($http, constantes, helper) {
        return {
            listar: listar,
            cadastrar: cadastrar,
            listarCategorias: listarCategorias,
            consultar: consultar,
            editar: editar,
            deletar: deletar
        }

        // #######################################

        // EXEMPLO DE REFATORAÇÃO

        // function requisicao(_method, _url, _params) {
        //     return $http({
        //         method: _method.toUpperCase(),
        //         url: _url.indexOf('http://') !== -1 ?
        //             _url : constantes.URL_BASE + _url,
        //         data: _params ? _params : {}
        //     }).then(function (response) {
        //         return response.data;
        //     })
        //         .catch(helper.sendError);
        // }
        //
        // function listar() {return requisicao('get', '/itens')}

        function listar() {
            return $http.get(constantes.URL_BASE + '/itens')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function listarCategorias() {
            return $http.get(constantes.URL_BASE + '/categorias')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function cadastrar(_param) {
            return $http.post(constantes.URL_BASE + '/itens', _param)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function consultar(_id) {
            return $http.get(constantes.URL_BASE + '/itens/' + _id)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function editar(_param) {
            return $http.put(constantes.URL_BASE + '/itens/' + _param._id, _param)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function deletar(_id) {
            return $http.delete(constantes.URL_BASE + '/itens/' + _id)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }
    }

})();