# Coodesh

This is a challenge by [Coodesh](https://coodesh.com/)

Deploy URL: https://main--prismatic-dasik-8c56b9.netlify.app/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

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
