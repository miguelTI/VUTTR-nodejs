# VUTTR-nodejs

Very Useful Tools to Remember API built with Node.js (10.13)

## Features

- List all existing Tools
- Filter Tools by tag
- Create new Tools
- Delete existing Tool

## Structure

- All application related files are contained within the `src` folder.
- The starting point of the application is the server.js as in the express default pattern, it's only responsability is start the app server.
- The application main file is contained in the app.js file, it's responsability is define the application flow, import routes, define global middlewares and initialize dependencies at application scope.
- Routes are contained in a separated file.
- Project style configuration files are present in the project's root folder.
- Application's configuration files, database related and external library files are contained in separated folders within the `src` folder also.
- Each layer of responsability of the application is represented by a folder within the `app` folder. Controllers, Schemas, Models, Middlewares, Jobs, Views, etc...

## Dependencies

- node version 10.13

- dotenv
- express
- mongoose
- sucrase
- yup

## Install

Install project dependencies
`yarn install` or `npm install`

Define database url environment variable
`export MONGO_URL={YOUR DATABASE URL}`

## Build

In order to run in production environment it is required to generate a build.
`yarn build` or `npm run build`

## Start

The start script runs the generated build.
`yarn start` or `npm start`
The API runs on port 3333 by default.

## Development

You can optimize the development flow by using nodemon
`yarn dev` or `npm run dev`

### Dev dependencies

- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- nodemon
- prettier

## Author

Developed by Miguel Alemán
