# Express-TS-Boilerplate

A opinionated boilerplate structure for a scalable Express.js backend with TypeScript and JS Standard Linter for building Microservices/ APIs.

## Features

- Express.js framework
- TypeScript integration
- StandardJS Linter
- Middleware packages: compression, cors, helmet, express-validator
- Logging with Winston
- Docker and Docker Compose support

## Requirements

- Node.js v14.x.x or higher
- Docker (optional for containerization)

## Available Scripts

- `npm run lint`: Lint and fix TypeScript files with StandardJS.
- `npm start`: Start the production server.
- `npm run predev`: Lint, fix, and compile TypeScript files.
- `npm run dev`: Start the development server with hot-reloading.
- `npm run build:docker`: Build the Docker image for the application.
- `npm run run:docker`: Run the application using the Docker container.
- `npm run compose:docker`: Start the application and related services using Docker Compose.
- `npm run down:docker`: Stop and remove the application and related services using Docker Compose.
- `npm run stop:docker`: Stop the Docker container.
- `npm run remove:docker`: Remove the Docker container.

## Note on going to Production

Keep in mind that this a boilerplate, it is not meant to be taken to production straight away. Take everthing with a grain of salt and adapt packages and settings of these packages for your own use case. <br/>
It is an opinionated setup for Express which worked really well for me and the teams I was working with as a starting point.

## Structure

The structure should help teams understand and separte concerns. It should be boring to build on top of this structure, everyone should know where to put things.

The general idea here uses names for folders also used in the Express Docs to make it clear what sits where.

<b>`Routes -> Middlewares -> Controllers -> Services -> Database Methods -> Persistent Layer`</b>

Where <b>utils</b> is a seperate folder to host functions to be used througout the application.

## Contributing

Contributions to this boilerplate are very welcome! If you find a bug or want to suggest a new feature, feel free to open an issue or submit a pull request.

## License

This boilerplate is licensed under the MIT License. You can find a copy of the license in the [LICENSE](LICENSE) file.

[MIT](LICENSE)

## Acknowledgments

This boilerplate was inspired by the following resources:

- [Express](https://github.com/expressjs/express)
- [Expressjs Project Structure Blog Article](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
- [Express Generator](https://github.com/expressjs/generator)
