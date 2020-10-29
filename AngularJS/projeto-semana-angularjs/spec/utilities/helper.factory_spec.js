describe('helperFactory', function () {

    // beforeEach(function () {
    //     angular.mock.listaComprasMock();
    // });
    beforeEach(module('listaComprasApp'));

    describe('Testando Factory', function () {
        var factory, $httpBackend;

        beforeEach(inject(function ($injector) {
            factory = $injector.get('helperFactory');
            $httpBackend = $injector.get('$httpBackend');

            // $httpBackend.whenGET('acesso/login.tpl.html').respond(200, {});
        }));
        // INIT
        // ENTRADA
        // SAÍDA
        // MÉT0DO TESTADO
        it(': deve estar DEFINIDA', function () {
            expect(factory).toBeDefined();
        });

        it(': deve estar DEFINIDA', function () {
            // ENTRADA
            var ent = { data: { message: 'teste' } };
            // SAÍDA
            var ret = { error: true, msg: 'teste' };
            // MÉT0DO TESTADO
            expect(factory.sendError(ent)).toEqual(ret);
        });


    });
});
