# API with TypeScript and Clean Architecture

This is a sample project that implements an API using TypeScript and follows the Clean Architecture. The API is built in Node.js with the Fastify framework and uses ESLint for clean code and Swagger for documentation.

## Tech Stack

**Server:** Node, Fastify

**Tecnology**: TypeScript, ESLint, Swagger

## Project structure

The project is organized according to the Clean Architecture to maintain a modular and scalable code. The structure of the project is as follows:

```
api-clean-architecture
|-- Config
| |-- database.ts               → Configuration files for DB connections.
| |-- server.ts                 → Variable configuration files for the server.
|-- docs
|-- |-- swagger.json            → API documentation in Swagger format.
|-- src                         → Main directory of the source code.
|  |-- application
|  |  |-- usecases              → Application use cases.
|  |-- domain.
|  |  |-- model                 → Domain models representing application objects.
|  |  |-- repositories          → Repository interfaces that define data access methods.
|  |-- infrastructure
|  |  |-- authentication        → Authentication and authorization logic.
|  |  |-- database              → Database configuration and access logic.
|  |  |-- orm                   → Object Relational Mapper (ORM) configuration.
|  |  |-- server                → Configuration of the web server (Fastify).
|  |-- interfaces
|  |  |-- controllers           → API controllers that handle HTTP requests.
|  |  |-- errors                → Custom error handlers.
|  |  |-- middlewares           → Middlewares for processing HTTP requests.
|  |  |-- routes                → API route definitions.
|  |  |-- serializers           → Serializers for API response.
|-- test                        → Directory containing the project tests.
|-- package.json                → Configuration for project dependencies.
|-- .eslintignore               → Configuration for ignoring files in ESLint.
|-- .eslintrc.json              → ESLint configuration.
|-- .prettierrc                 → Prettier configuration.
|-- .env.yaml                   → Configuration for environment variables.
|-- README.md                   → This file contains information about the project.
|-- tsconfig.json               → TypeScript configuration file.
|-- yarn.lock                   → Dependency version lock file for Yarn.
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies with npm or yarn

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

## Contributing

Contributions are always welcome!
