describe('Testando Filtros', function () {
    var $filter;

    beforeEach(function () {
        module('listaComprasApp');
        inject(function ($injector) {
            $filter = $injector.get('$filter');
        });
    });

    // INIT
    // ENTRADA
    // SAÍDA
    // MÉT0DO TESTADO
    it('$filter: deve estar DEFINIDO', function () {
        expect($filter).toBeDefined();
    });

    it(': deve colocar primeira letra maiuscula', function () {
        // MÉT0DO TESTADO
        expect($filter('capitalize')('teste')).toEqual('Teste');
    });


});