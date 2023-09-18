# Coodesh

This is a challenge by [Coodesh](https://coodesh.com/)

Deploy URL: https://main--prismatic-dasik-8c56b9.netlify.app/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Documentação do processo

O projeto se baseia em três modulos, a input principal, a listagem dos emails, e o vizualizador de emails, ou seja três modulos com funções interligadas on cada um consegue interagir com o outro duas arquiteturas me veem a mente

 - "Redux/NgRx" Store - criar os três componentes separados e centralizar as funções atravéz do dispatch

 - Subscriptions - criar os três components separados e permitir que os componentes reagam as mudanças nas requests, optei por usar as subscriptions pela velocidade de implementação e pela flexibilidade caso algo saisse fora do esperado seria mais facil e rapido de refatorar.

no caso os componentes da pagina apesar de terem funções que mudam outras partes da tela, eles não devem ser parentes, pois suas funções são diferentes demais, e parentealos em um caso real poderia levar a rerenders desnecessarios.

para as requests opitei pelo Apollo já que ele tem um support melhor para graphql bem parecido com o React.query, optei por nao usar Websockets pois ele seria util apenas na requisição de emails que podia ser facilmente feita com Apollo usando pooling, depois acabei reparando que request de 15s acabariam em um erro de "Too Many Request", mas acredito que para esse test isso não seja relevante, em produção seria melhor implementar com websocket para evitar esse erro.

Decidi ultilizar Tailwind não sou muito fã de soluções que não me limitam demais pois elas acabam gerando muitas classes no meio do html e isso fica um pouco feio e dificil de debuggar, mas como parecia ser um requisito usar acabei usando e para no geral ele não atrapalhou tanto, mas algumas implementações como o drawer e um container geral precisaram de CSS para que eu nao tivesse que criar tantas custom keys no Tailwind.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## app custom Folder Structure

Services -> folder where all requests are made, why is notification on services
"if it makes no request?" because now I am using a local solution, but most notification solutions will use either firebase or some other api.

Pages -> is where all pages of the website will be, led by their smart component and followed by dumb components

    Home -> Folder where all components from the home page are located, every component is separated as sibilings

Utils -> Folder used for reusable methods that could be used by other components and services in the application

## Shared-types

shared-types is a development pattern to share typing between front and back end, normally shared-types would be a third repo, but in this test case it is fine as just a folder

## Cache

currently Im using local storage, but I decided to separate my component to a utils folder so that later if we where to use some other form of storage it would be all in the same file

## Next Steps

adding .env file
cypress tests
show the refresh timer to the user by storing the last refresh time and comparing to Date.now
add feedback to Copy on click and refresh on click using a portal library
