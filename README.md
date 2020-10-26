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
