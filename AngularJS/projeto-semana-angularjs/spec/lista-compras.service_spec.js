describe('ListaComprasService', function () {

    // beforeEach(function () {
    //     angular.mock.listaComprasMock();
    // });
    beforeEach(module('listaComprasApp'));

    describe('Testando Service', function () {
        var service, $httpBackend;

        var respSuccess = 'sucesso';

        beforeEach(inject(function ($injector) {
            service = $injector.get('ListaComprasService');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.whenGET('acesso/login.tpl.html').respond(200, {});
        }));
        // INIT
        // ENTRADA
        // SAÍDA
        // MÉT0DO TESTADO
        it(': deve estar DEFINIDA', function () {
            expect(service).toBeDefined();
        });

        describe('Testando requisição para exemplo()', function () {
            var urlReq = 'http://worldclockapi.com/api/json/est/now';
            var req = {};
            var method = 'GET';
            it('deve dar sucesso', function () {
                // INIT
                $httpBackend.when(method, urlReq)
                    .respond(200, respSuccess);
                // MÉT0DO TESTADO
                service.exemplo(req)
                    .then(function (response) {
                        expect(response).toEqual('OK');
                        expect(response.statusCode).toEqual('200');
                    });
                $httpBackend.flush();
            });

            it('deve dar erro', function () {
                // INIT
                $httpBackend.when(method, urlReq)
                    .respond(400, {});
                // MÉT0DO TESTADO
                service.exemplo(req, 0);
                $httpBackend.flush();
            });
        });



    });
});
