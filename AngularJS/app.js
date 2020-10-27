(function () {
    "use strict"; // garantirando segurança
    
    angular
        .module('app', []) // contém todos os recursos do framework
        .controller('controlador', function($scope){ // traz o contexto da aplicação
            $scope.nome = 'Lucas';
            $scope.contador = 10;
        });
})();