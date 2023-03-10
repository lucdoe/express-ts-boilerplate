# express-ts-boilerplate

This is a simple and opinionated boilerplate template for building microservices/ APIs with Express.js. It provides a basic structure for organizing your code and includes some common libaries and utilities such as Linter, Logger, Security Haeders, Sanitization, Compression and a TypeScript Setup ready to roll.

## Getting Started

To get started with this boilerplate, you can simply clone the repository and start building your own microservices/ APIs.

Using npm:
<br />
If you want to use pm2 in Production additonally install pm2:
```bash
npm install pm2 -g
```

```bash
git clone https://github.com/lucdoe/express-ts-boilerplate.git
cd express-boilerplate
npm install
npm start
```

This will lint your code and fix linting errors, build the js code in the /build directory and start the development server at http://localhost:3000. You can start building by modifying the code in the /src directory.

## Note on going to Production

Keep in mind that this a boilerplate, it is not meant to be taken to production straight away. Take everthing with a grain of salt and adapt packages and settings of these packages for your own use case. <br/>
It is an opinionated setup for Express which worked really well for me and the teams I was working with as a starting point.

## Features

- [TypeScript](https://www.typescriptlang.org/): TypeScript is JavaScript with syntax for types.
- [ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.
- [Express.js](https://expressjs.com/): A popular web framework for Node.js that provides a simple and flexible way to build web applications and APIs.
- [Helmet](https://github.com/helmetjs/helmet): Helps secure Express apps with various HTTP headers.
- [compression](https://www.npmjs.com/package/compression): Node.js compression middleware.
- [express-validator](https://www.npmjs.com/package/express-validator): Express middleware for validation and sanitization.
- [cors](https://github.com/expressjs/cors): A Node.js CORS middleware.
- [winston](https://www.npmjs.com/package/winston): A logger for just about everything.
- [nodemon](https://www.npmjs.com/package/nodemon): A development utility that automatically restarts the server when changes are made to the code.

## Structure

The structure should help teams understand and separte concerns. It should be boring to build on top of this structure, everyone should know where to put things.

The general idea here uses names for folders also used in the Express Docs to make it clear what sits where.

<b>`Routes -> Middlewares -> Controllers -> Services -> Database Methods -> Persistent Layer`</b>

Where <b>utils</b> is a seperate folder to host functions to be used througout the application.

## Contributing

Contributions to this boilerplate are very welcome! If you find a bug or want to suggest a new feature, feel free to open an issue or submit a pull request.

## License

This boilerplate is licensed under the MIT License. You can find a copy of the license in the LICENSE file.

[MIT](LICENSE)

## Acknowledgments

This boilerplate was inspired by the following resources:

- [Express](https://github.com/expressjs/express)
- [Expressjs Project Structure Blog Article](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
- [Express Generator](https://github.com/expressjs/generator)
