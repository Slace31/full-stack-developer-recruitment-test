EVA.GG Frontend coding test - ReactJS Application
==================================

I chose to use [Nx](https://nx.dev/) in order to answer this coding test.
Nx is a great tool allowing to make apps as a monorepo.
I used this tool in order to generate this [ReactJS](https://reactjs.org/) Application.

# Starting the application
In order to start only the application you can run `npm run start:calendar-app` at project root directory.

If you want to run both apps (front and back) at the same time using only one command you can use `npm run start`.

# Building the application
In order to build only the application you can run `npm run build:calendar-app` at project root directory.

If you want to build both apps (front and back) at the same time using only one command you can use `npm run build`.

# Testing the application
## Unit testing
I chose [Jest](https://jestjs.io/) to implement unit tests for this application, it's really  stable tool to implement this type of test for a ReactJS application.

In order to run unit tests only for the application you can run `npm run test:calendar-app` at project root directory.

If you want to run unit tests on all apps and libs (front and back) at the same time using only one command you can use `npm run test`.
## End-to-end testing
I chose [Cypress](https://www.cypress.io/) to implement e2e tests for this application, it's really  stable tool to implement this type of test for a ReactJS application.

In order to run e2e tests only for the application you can run `npm run e2e:calendar-app` at project root directory.

If you want to run e2e tests on all apps and libs (front and back) at the same time using only one command you can use `npm run e2e`.

# Linting the API
I chose [ESLint](https://eslint.org/) in order to check the syntax and usage of TS in the application.

In order to run lint tests only the application you can run `npm run lint:calendar-app` at project root directory.

If you want to run lint tests on all apps and libs (front and back) at the same time using only one command you can use `npm run lint`.
