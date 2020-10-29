(function () {
    "use strict";

    angular.module('listaComprasApp')
        .constant('constantes', {
            URL_BASE: 'https://gitmaratonadev.stefanini.com.br/apisemanaangular/api',
            // Podemos também colocar objetos dentro de objetos, veja como é usado
            // no helper.factory para enviar msg de SEM_ACESSO
            MENSAGENS: {
                ERRO_GERAL: 'Ocorreu algum problema. Tente novamente mais tarde.',
                SEM_ACESSO: 'Você não tem acesso a esta página.'
            },
            MSG_ERRO: 'Ocorreu algum problema. Tente novamente mais tarde.',
        });

})();