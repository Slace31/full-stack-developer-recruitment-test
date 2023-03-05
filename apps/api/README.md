EVA.GG Backend coding test - NestJS API
==================================

I chose to use [Nx](https://nx.dev/) in order to answer this coding test.
Nx is a great tool allowing to make apps as a monorepo.
I used this tool in order to generate this [NestJS](https://nestjs.com/) API.
It should serve the json data directly at GET [http://localhost:3333/api](http://localhost:3333/api).

# Starting the API
In order to start only the api you can run `npm run start:api` at project root directory.

If you want to run both apps (front and back) at the same time using only one command you can use `npm run start`.

# Building the API
In order to build only the api you can run `npm run build:api` at project root directory.

If you want to build both apps (front and back) at the same time using only one command you can use `npm run build`.

# Testing the API
## Unit testing
I chose [Jest](https://jestjs.io/) to implement unit tests for this API, it's really  stable tool to implement this type of test for a NodeJS application.

In order to run unit tests only for the api you can run `npm run test:api` at project root directory.

If you want to run unit tests on all apps and libs (front and back) at the same time using only one command you can use `npm run test`.
## End-to-end testing
I chose [Jest](https://jestjs.io/) and [Axios](https://axios-http.com/docs/intro) to implement e2e tests for this API, it's really  stable tool to implement this type of test for a NodeJS application.

In order to run e2e tests only for the api you can run `npm run e2e:api` at project root directory.

If you want to run e2e tests on all apps and libs (front and back) at the same time using only one command you can use `npm run e2e`.

# Linting the API
I chose [ESLint](https://eslint.org/) in order to check the syntax and usage of TS in the application.

In order to run lint tests only for the api you can run `npm run lint:api` at project root directory.

If you want to run lint tests on all apps and libs (front and back) at the same time using only one command you can use `npm run lint`.
