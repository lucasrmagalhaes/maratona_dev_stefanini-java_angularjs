describe('Testando Diretiva Exemplo', function () {
    var $compile,
        $rootScope,
        $httpBackend;

    beforeEach(function () {
        module('listaComprasApp');
        inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.whenGET('acesso/login.tpl.html').respond(200, {});
        });
    });

    it('Replaces the element with the appropriate content', function () {
        // Compile o template HTML da diretiva
        var element = $compile("<div exemplo teste=\"456\">123</div>")($rootScope);
        // dispara todos o watches, para avaliar o resultado da expressao
        $rootScope.$digest();
        // Checa se o elemento compilado contem o conteudo do template compilado
        expect(element.html()).toContain("123");
        expect(element.html()).toContain("456---");
    });
});