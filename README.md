# AngularJS - Front-end
## Semana 1 - Dia 1

- AngularJS é um framework totalmente separado do Angular 8, 9...

### Web Design
- Interface visual, arquitetura de informações, a navegação, a usabilidade: ESTÁTICO.

### Front-End
- Funcionalidade, lógica, implementação da interface e design, interação: DINÂMICO.

### UI 
- Como o usuário interage com o produto; e
- PARTE FÍSICA.

### UX
- Qual é o sentimento que o usuário leva dessa interação; e
- PARTE EMOCIONAL.

### Aplicações WEB
- São sistemas projetados para utilização através de um navegador, através da internet ou aplicativos desenvolvidos utilizando tecnologias web. 
- Pode ser executado a partir de um servidor, localmente e/ou no dispositivo do usuário.

### Ferramentas e Frameworks
- Bootstrap, NodeJS, Angular, Ionic, AngularJS, CSS, HTML, JS, Jquery, Express, Restify, ReactJS e Flutter.

### Boas práticas de programação
- Ideia, fluxo, codificar, testar, refatorar;
- Importância de saber o “o porquê”;
- Saber pesquisar pois ninguém sabe tudo (decorar);
- Melhorar a programar, precisa programar (pratique, desafie-se);
- Melhor forma de aprender é praticando;

- Performace;
- Mimificação código;
- Fluxo;
- Testes; e
- Segurança.

### DRY code (Don’t Repeat Yourself)
- Não se repita (tradução), criado por Andy Hunt;
- Separação das responsabilidades;
- Cada funcionalidade deve ser representada apenas uma vez;
- Repetição é desperdício;
- Menos é mais e quanto mais simples/enxuto melhor; e
- Bom planejamento e refatoração.

### Necessidade vs Mundo Perfeito
- Na maioria das vezes o cliente não sabe o que QUER, o que PRECISA então…
- Nosso objetivo é solucionar problemas, automatizar processos… Com aplicações web. Então… 
- Será que ele precisa disso?

### Angular JS
- Framework
- HTML é ótimo para declarar documentos estáticos, mas não atende quando tentamos usá-lo para declarar visualizações dinâmicas em aplicativos da web.
- O AngularJS permite estender o vocabulário HTML para o seu aplicativo. O ambiente resultante é extraodinariamente expressivo, legível e rápido de de desenvolver.

### Uso das Diretivas
- Diretivas são extensões, que fornecem a possibilidade de modificar o comportamento do HTML.
- Associar eventos à funções JS;
- Manipular o DOM; e 
- Controlar eventos de tela e etc…

### ngApp
- A tributo ng-app tem o objetivo que ‘informar’ para a DOM que além de HTML o documento também é um documento AngularJS.

### DataBiding
- É uma das principais vantagens do AngularJS, significa ligar automaticamente uma variável do JS (controller) com um elemento do HTML.

### NgController
- A controller é geralmente um arquivo JS que contém todas as funcionalidades ou funções pertinentes ao HTML que o referencia.

### Padrões de Projeto
- Estrutura de pastas
- Nomenclatura dos arquivos
- Guia de estilo AngularJS: A proposta de uma guia de estilo é fornecer uma direção na construção de aplicações mostrando convenções, e o mais importante, porque usa-las.

### Dúvidas (participantes):

#### Diferença entre Biblioteca e Framework?
- Biblioteca resolve algo específico.
- Framework é composto por várias bibliotecas.

#### Descreva fluxo?
- Caminha que vai percorrer no Sistema.

#### Diferença entre Angular e AngularJS?
- Responsáveis tentaram melhorar a ideia do Angular e mudou tanto que criaram o AngularJS.

#### DRY code tem como base a orientação?
- Seu pedaço de código não pode fazer a mesma coisa que outro código.

#### Defina escopo em JS?
- Contexto da aplicação é o escopo.

#### É possível ter mais de uma aplicação no HTML?
- Sim! É possível.

# AngularJS - Front-end
## Semana 1 - Dia 2

### Dica: 
- Windows: Instalar o Cmder.
- VisualStudio: Extensão – Instalar o Gitlens.

### Metas do Dia 2:
- Git;
- Controller/ControllerAs;
- +Diretivas do AngularJS;
- Definição de Escopos ($rootScope e $scope): Em case prático: Lista de Tarefas App;
- Comand Line Interface (CLI);
- Formulários;
- Filtros;
- NPM / Grunt: Em casa Prático: Login App; e
- $scope e $rootScope: Escopo Global.

### GIT
- É um sistema de controle de versão distribuído de código aberto gratuito projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.

- git remote: Lista os endereços remotos para subir o projeto.
- git status: Lista os documentos que foram alterados.
- git add: Adicionar um arquivo, pasta ou ambos (“git add -a” ou “git add .”) 
- git restore --staged: Voltar o arquivo para o Working Directory. 
- git commit -m “Descrever o commit” 
- git push: Subindo o histórico para o remoto.
- git push origin dia-1 (branch)
- git clone url: Clonar o projeto localmente. (HTTPS) ou via SSH que necessita configuração.
- .gitignore: Consegue dizer quais os arquivos que o GIT não acompanhe. Só adicionar o nome do arquivo que desejar ignorar dentro do .gitignore.
- git branch: Lista as branches.
- git branch dia-2-lista-tarefas: Criou uma nova branch.
- git checkout nomedabranch: Muda de branch.
- git push -u origin nomedabranch ou git push --set-upstream origin nomedabranch -> Comando para setar novos pushs. Sendo necessário na próxima vez rodar somente: git push.

# AngularJS - Front-end 
## Semana 1 - Dia 3

### Metas do Dia:
- NPM / Grunt;
- Formulários;
- Filtros;
- Modularizar / Organizar Projeto;
- Rotas;
- Services e Factories; e
- Integração com Back-End - Em case Prático: Lista Compras App.

### NPM
- É um gerenciador de pacotes para a linguagem de programação JS. npm, Inc. é uma subsidiária do GitHub, uma corporação multinacional americana que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do GIT.
- npm init -y -> Inicializando o projeto.

- npm i e npm un -> Instalação e desinstalação.
- Site: https://www.npmjs.com -> Procurar pacotes.
- npm i grunt grunt-contrib-clean grunt-contrib-connect grunt-contrib-copy grunt-contrib-cssmin grunt-contrib-uglify grunt-contrib-watch
- contrib-clean -> Apagar pasta ou arquivos.
- contrib-connect -> Criar um servidor para rodar nossa aplicação.
- contrib-copy -> Copiar arquivos.
- contrib-cssmin -> Minificações de CSS.
- contrib-uglify -> Minificações de arquivos JS.
- contrib-watch -> Lendo o código que estamos escrevendo e execuntado tarefas caso tiver mudanças. Atualiza nosso navegador automaticamente.

### package.json
- dependencies -> Obrigatórios para o projeto funcionar.
- devDependencies -> Só para Desenvolvimento.

### Grunt
- É um executor de tarefas JS, uma ferramenta usada para executar automaticamente tarefas frequentes, como manificação, compilação, teste de unidades e fiapos. Ele usa uma interface de linha de comandos para executar tarefas personalizadas definidas em um arquivo.
- Fonte: https://gruntjs.com/
- Mais simples que o Gulp.
- npm i grunt-cli --global -> Com essa instalação é possível rodar os comandos do Grunt em qualquer lugar da máquina.
- npm i grunt-cli --save-dev -> Dependência de Desenvolvimento.
- npm un grunt-cli -> Desinstalando o grunt-cli.

### Gruntfile.js
- copy:dist -> Usa a tarefa dist dentro de copy, não rodando todas as tarefas dentro de copy.
- src: ['**/**.html'] -> Pega todas as pastas e arquivos html.
- cwd -> Caminho base.
- dest -> Nome da pasta que os arquivos fiquem copiados.
- expand -> Recursividade entre as pastas.

# AngularJS - Front-end
## Semana 1 - Dia 4

### Metas do Dia:
- Modularizar / Organizar Projeto;
- Rotas / Navegação;
- Integração com Back-End (API);
- Diretivas;
- Componentes; e 
- Em case prático: Lista Compras App.

### Angular Route
- npm i angular-route

### $http
- Faz requisições por exemplo de uma API.

# AngularJS - Front-end
## Semana 1 - Dia 5
- Código finalizado.

# Java - Back-end
## Semana 2 - Dia 1

### Tópicos:
- Orientação a Objeto;
- Introdução ao Java;
- Serviços REST;
- Exceptions; e
- Testes Unitários.

### Fundamentos de Programação Orientada a Objetos:
- Paradigma de Orientação a Objetos.

### Fundamentos de Programação Orientada a Objetos

Paradigma é um termo com origem no grego "paradeigma" que significa modelo, padrão. No sentido lato corresponde a algo que vai servir de modelo ou exemplo a ser seguido em determinada situação. São as normas orientadoras de um grupo que estabelecem limites e que determinam como um indivíduo deve agir dentro desses limites.

### Estruturado:
- Modelo entrada - processamento - saída; e
- Dados separados das funções.

### Orientado a Objetos:
- O Mundo e composto por objetos;
- Objetos combinam dados e funções; e
- Conceitos dos problemas são modelados como objetos que são associados e intaregem entre si.

"Um sistema construído usando um método orientado a objetos é aquele cujos componentes são partes encapsuladas de dados e funções, que podem herdar atributos e comportamentos de outros componentes da mesma natureza, e cujos componentes comunicam-se entre si por meio de mensagens".

Eduard Yourdon

### Abstração:
- Consiste de focalizar nos aspectos essenciais inerentes a uma entidade e ignorar propriedades "acidentais".
- "Modelos mentais": visão simplificada do mundoconcebido por cada um em cada contexto.
- Abstrair consiste em ignorar aspectos irrelevantes e concentar nos principais.

### Conceitos Básicos:
- Classe
- Objetos
- Métodos

### Objeto:
#### Caracteristicas principais:
- Estado (Estrutura): conjunto de suas propriedades e seus valoress correntes.
- Compartamento: conjunto de serviços (operações).
- Que o objeto prôve.
- Identidade: Identificador único que diferencia cada objeto, mesmo que tenha mesmo estado e comportamento.

### Objeto - Atrelados:
- Métodos e Funcionalidades
- Atributos e Dados

### Recomendação de Livro:
- Domain Drive Design

### Classe
- Uma classe descreve um conjunto de objetos com as mesmas propriedades, o mesmo comportamento, os mesmos relacionamentos com outros objetos e a mesma semântica.

### Métodos:
- Mecanismo utilizado para troca de mensagens entre objetos ou para realizar uma determinada tarefa relacionada ao objeto.

### Fundamentos da Programação Orientada a Objetos:
- Mecanismo utilizado para troca de mensagens entre objetos ou para realizar uma determinada tarefa relacionada ao objeto.

### Prática - Eclipse:
- src -> new package -> name: br.com.maratona.dev
- br.com.maratona.dev -> new class -> name: Pessoa
- CTRL + N -> Atalho para criar uma Classe.
- main CTRL + Space -> Atalho para criar a main.
- main não existe para programar Web.
- sysout + CTRL + Space. -> Atalho para o System.out.print
- Get e Set: Source -> Generate Getters and Setters ou Alt + Shift + S e selecionar a opção.
- Herança - extends acoplamento muito forte. Tudo no pai vai impactar nos filhos.

# Java - Back-end
## Semana 2 - Dia 2

### Prática:
- Classe abstract não pode receber uma instância.
- Cast - Polimofirsmo - Várias formas - Exemplo listar várias contas
- instanceof verifica a origem.
- Interface - implements cria métodos sem implementação e pode ter parametros.
- Se implementar é obrigado a usar tudo que tem dentro dela é um contrato.
- A classe é pública não é necessário informar porque é o padrão é público.
- 1.5f indicando o valor.
- Baratinha do Eclipse é o Debug. Dois cliques na linha para marcar e rodar o Debug.
- F6 debuga linha a linha. F8 debuga tudo.
- Enum campo que não vai precisar ser acessado para alterações. Exemplo: Status - Ativo e Inativo.
- Collections - ArrayList e List. São listas.
- Ctrl + Shift + O -> Remover imports que não estão sendo utilizados.

### Mundo Web:  
- Um mundo complexo porém resumido em duas palavras: Request - Requisição e Response - Resposta.

Client -> HTTP request -> Server
Client <- HTTP response <- Server 

### Server:
- Apache Tomcat

O Tomcat é um servidor web Java, mais especificamente, um container de servlets. O Tomcat implementa, dentre outras de menor relevância, as tecnologias Java Servlet e JavaServer Pages. Desenvolvido pela Apache Software Foundation, é distribuído como software livre.

### Prática - Tomcat:
- Instalar o JDK 8.
- Alterar no Eclipse -> Windows -> Preferences -> Installed JREs.
- Window -> ShowView -> Other... Browser
- Acessar: http://localhost:8080/
- new -> Dynamic Web Project.
- Marcar a opção: [x] Generate web.xml deployment descriptor -> alma do projeto.
- Botão direito do mouse no projeto e ir em Build Path. 
- Libraries confirmar a versão do JDK.
- Project Facets -> Todas as versões utilzadas no projeto.
- Web Project Settings -> Context root -> Nome da aplicação.
- JavaResources -> New package: br.com.maratona.dev
- Páginas HTML dentro do WebContent
- WebContent -> new: index.html
- Botão do direito do mouse no Tomcat inferior da tela e adicionar o projeto. Depois rodar um Clean.
- http://localhost:8080/maratonaDev/
- br.com.maratona.dev -> new Class: InscricaoMaratonaView
- doGet - Ctrl + Space
- http://localhost:8080/maratonaDev/inscricao -> "Maratona usando servelet"
- JSF carregado no servidor. Angular carregado no browser.

# Java - Back-end
## Semana 2 - Dia 3

### REST

Rest é acrônimo de Representational State Transfer, e tem como objetivo primário a definição de caractrísticas fundamentais para a construção de aplicações Web seguindo boas práticas.

- Mesmo criador dos protócolos HTTP.
- Evoluiu a forma de conectar no HTTP.

### Maeven 

Em um projeto nós temos problemas de:  

- Gerenciamento de dependência.
- Gerenciamento de projetos.
- Controle de versão.
- Automatizar o processo de build.

Muitos outros problemas que existem que vão desde a fase de construção até o deploy em produção.

Apache Maven, ou Maven, é uma ferramenta poderosa utilizada para gerenciar projetos, permitindo realizar builds, gerenciar dependências e até documentação do projeto. Ela é baseada no POM (project object model).

### Prática:
- Criando o maven: new -> other -> Maven Project -> [x] Create a simple project (skip archetype selection)
- Group id: br.com.maratona.dev
- Artifact id -> nome do projeto: dev
- Version -> Versões de Teste -> Mudança de versão de forma drastica - ? - bugs
- Verificar a versão do JRE.
- maratonaDev -> Botão direito -> Configure -> Convert to Maven Project
- WAR -> projeto web
- Pegão varios arquivos e distribuem para o servidor:
- EAR - Pode incorporar vários WAR ou vários projetos - modules.
- JAR - Aplicações Desktop
- WAR - Arquivo de Web

- Direito -> Run -> Maven Run Build -> Abrirá a tela de comandos.
- Goals: clean install -> deleta e gera um novo.
- [x] Update Snapshots -> Obrigando o processo instalar as dependências.

- Windows -> Preferences -> Workspace -> Other: ISO-8859-1

- REST devolve os servlets configurados no web.xml
- Dependências do Jsery: https://mvnrepository.com/
- genson -> converte o JSON para o Java.

- Plugin Rested mesma função do Swagger
- 200 OK
- 201 Created

- ULR != URI

### REST:
- POST: Geralmente formulários -> Mandar um recurso novo
- GET: Qualquer informação da URL
- PUT: Alterar
- DELETE: Remover

- PathParam é um alias - apelido
- equals comparar valores.

### Mock
- Lockando os dados

# Java - Back-end
## Semana 2 - Dia 4

Criar o arquivo context.xml dentro de META-INF -> Pega todas as entidades - classes e passa a gerenciar - guardar para ele.
Criar o arquivo beans.xml dentro de WEB-INF

- resources -> arquivos de configuração.

### JUnit
- Teste Unitários
- After, Before e Test.
- Garante mais segurança e proteção.

### Mockito
- Framework de mocks - injections.
- Mock cria um espelho do projeto, vazio.

### Eclipse - coverage:
- Botão direito ou Barra superior -> coverage -> relatório dos testes.

### Exception:
Carregar os erros de execução em try catch.
Evitando carregar para o usuário o console.log.
Erros que o compilador não pega.

### RESTED:

Extensão do browser: RESTED Client
Tomcat: http://localhost:8080/maratonaDev/rest/inscricao/find/inscrito/1

GET

Content-Type
application/json

200
{
  "matricula": 1,
  "nome": "Lucas"
}

# Quarkus - Cloud
## Semana 3 - Dia 1

### Tópicos:
- Introdução ao Quarkus
- Modelagem
- CRUD
- Docker
- Kubernetes

### DevOps

- Comunicação;
- Colaboração;
- Automação; e
- Monitoração.

Ele diz respeito à adequação de processo de desenvolvimento (Dev) e operação (Ops), com o objetivo de estimular o progresso contínuo no seu negócio na área de T.I.
O conceito surgiu no ano de 2008, quando o administrador de sistemas Patrick Debois começou uma discussão sobre a possibilidade de solucionar os conflitos constantes entre as áreas de desenvolvimento e operações de TI.

### Na prática:

DevOps é uma estratégia que deve ser aplicada de modo contínuo e funciona da seguinte forma, seguindo essas etapas:

- Plan
- Code
- Build
- Test
- Release
- Deploy
- Operate
- Monitor

### Vantages:

Entretanto, por que aplicar o Dev Ops?
- Redução de custos
- Automação
- Cultura de empresa atualizada
- Torna a empresa mais escalonável
- É uma revolução nos modos de exercer funções de TI

### Quarkus - Supersonic

- Imperative -> Inject
- Reactive -> Channel

- Red Hat - Principal desenvolvedora
- Projeto de código aberto.

O que é?
O Quarkus é um framework, nativo do Kubernets, adaptado para OpenJDK HotSpot e GraalVM

https://quarkus.io/

### Como funciona?

Microprofile Eclipse:
- Jax-RS
- CDI
- JSON-P

https://start.microprofile.io/

### GraalVM

- Máquina Virtual Poligrota
- Oracle é a responsável.
- Pega o código e vira nativo e pode rodar diretamente. 

https://graalvm.org/

### Extensões:

Pense nas extensões como dependências do seu projeto, as extensões configuram, inicializam e integram as estruturas.
Eles também fazem todo o trabalho de fornecer as informações corretas para o GraalVM e seu app rode nativamente.

https://code.quarkus.io/

### Teste de Integração
- Testa o fluxo.

### Estrutura do Projeto:
- dao - conexão com o banco de dados. insert, delete... acesso aos objetos.
- dto -  trafegar os dados, camada back com qualquer outra camada back ou front, objeto de transição.
- model - entidades.
- rest - requisições. pacote com os nossos serviços - endpoints.
- service - validação e regra de negócio. arquivo que vai prover serviços. 

### Microprofile
https://start.microprofile.io/

### Importando o Projeto:
- Botão direito do mouse - Import - Existing Maven

### Extensão - Eclipse:
- Help -> Eclipse Marketplace -> Quarkus Tool

### Rodando o projeto:
- ./mvnw quarkus:dev
- http://localhost:8080/
- http://localhost:8080/api/hello
- Projeto real maioria das vezes é utilizado RequestScoped

# Quarkus - Cloud
## Semana 3 - Dia 2

### Mapeando uma entidade - JPA
- @Table
- @Entity
- @ManyToOne
- @Column

https://docs.oracle.com/javaee/7/api/javax/persistence/package-summary.html

### Explicando Relações
- @OneToMany
- @ManyToOne
- @ManyToMany

Exemplo:
@OneToMany
Book -> Pages

### Explicando IDs
- @ID
- @GeneratedValue -> Estratégia de Incremento.

### Explicando NamedNativeQueries
- @NamedNativeQueries
- @NamedNativeQuery

### Enum:
- Lista pequena
- Não pode sofrer alteração com o passar do tempo
- Geralmente é status

### Prática:

https://code.quarkus.io/

- H2: ./mvnw quarkus:add-extension -Dextensions="io.quarkus:quarkus-jdbc-h2"
- Hibernate ORM: ./mvnw quarkus:add-extension -Dextensions="io.quarkus:quarkus-hibernate-orm"
- http://localhost:8080/api/todo


### Swagger
- Desenvolvimento baseado em open API Especification
- Permite que escreva uma estrutura de API
- Consegue ler uma documentação e gerar uma API
- ./mvnw quarkus:add-extension -Dextensions="io.quarkus:quarkus-smallrye-openapi"

http://localhost:8080/swagger-ui/

### Flyway
- Versionamento de Banco de Dados através de códigos.

https://flywaydb.org/

### JAEGER

./mvnw quarkus:add-extension -Dextensions="smallrye-opentracing"
https://hub.docker.com/r/jaegertracing/all-in-one

- Profiles:
./mvnw quarkus:dev -Dquarkus.profile=dev

# Quarkus - Cloud
## Semana 3 - Dia 3

### Docker
- Desenvolvido na linguagem GO.
- Alta perfomance

### Funcionalidades

Client:
docker build
docker pull
docker run

DOCKER_HOST
Docker daemon
Container -> Imagem rodando.
Images -> Configurações prontas. 

Registry

### Benefícios
- Rapidez
- Até 7 vezes mais rápido que a virtualização

### Camadas e controle de versão de imagens
- Cada cointainer pode receber uma configuração/versão, evitando conflitos.
- Docker vem com Linux.

### Hibernate Validator

- Evita usar regras por exemplo com IF e utiliza somente o atalho do Hibernate.

@NotNull
@Size(min = 2, max = 14)
@Min(2)
@PastOrPresent

docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \
  -p 5775:5775/udp \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 14268:14268 \
  -p 14250:14250 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.20

docker ps -> todos os serviços listados
docker images -> imagens localmente
docker rm imagem -> remover uma imagem

localhost:16686/

OpenTracing -> Ver por onde a aplicação passou.
./mvnw quarkus:add-extension -Dextensions="smallrye-opentracing"

Parar a aplicação
docker ps
docker stop nome ou id

Startar 
docker start nome ou id

Validation with Hibernate Validator
./mvnw quarkus:add-extension -Dextensions="hibernate-validator"

### Panache

O Panache é responsável por gerenciar toda a transação, desde da abertura, commit e o fechamento da transação.
A ideia é facilitar a implementação, melhorando assim a produtividade, já que o código fica bem mais simples, se comparado a forma tradicional.
