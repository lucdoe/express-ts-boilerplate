# Express-TS-Boilerplate

Welcome to the Express-TS-Boilerplate, an opinionated boilerplate structure for building scalable, efficient, and maintainable Express.js backends with TypeScript and JS Standard Linter. This boilerplate is designed to kickstart your Microservices or API projects, allowing you to focus on what matters most - developing your application's core functionality. <br><br>
Developers should spend their valuable time creating groundbreaking features without getting bogged down by their projects' initial setup and configuration. With this in mind, I've crafted this boilerplate to be a solid foundation for your next Express.js project, providing you with a well-organized structure, best practices, and helpful tools that make development a breeze.

## Features

This Express-TS-Boilerplate Application has built-in features, allowing you to quickly start building your API. The main features include the following:

1. **Express.js**: A minimal and flexible Node.js web application framework providing robust features for building web and mobile applications.
2. **TypeScript**: A superset of JavaScript that adds optional static types, allowing for improved developer experience, code maintainability, and error prevention.
3. **Dependency Injection (Example)**: A sample setup for dependency injection for loose coupling/ better testing. (Great article on the Topic and source of the example: [Dependency Injection with Expressjs and TypeScript](https://peteranderson.me/articles/dependency-injection-with-nodejs-expressjs-and-typescript)
4. **Middleware integration**: Built-in support for essential middleware, such as:
   - **Helmet**: Secure your application by setting various HTTP headers.
   - **Compression**: Improve performance by compressing response data using gzip.
   - **CORS**: Enable Cross-Origin Resource Sharing, controlling which resources are accessible from other domains.
   - **Express Validator**: Validate and sanitize user input to prevent attacks and ensure data integrity.
5. **Logging**: Utilize the power of the Winston logging library to log application events, errors, and other relevant information.
6. **Development Tools**:
   - **ESLint**: Automatically detect and fix code issues following best practices and style guidelines.
   - **Nodemon**: Monitor code changes and automatically restart the application during development.
7. **Modular and Scalable Architecture**: Organize your code using a clean separation of concerns, making it easy to maintain and scale your application.

Download the repository, install the dependencies, and develop your API following the provided structure and guidelines to get started. Happy coding!

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

## Going to Production

This Express-TS-Boilerplate Application is designed to help you get started quickly and efficiently. However, when transitioning to a production environment, there are several considerations to ensure your application is secure, stable, and performant. Please follow these best practices before deploying your application to production:

### 1. Security

- **Use HTTPS**: Secure your application by enabling HTTPS. This encrypts data between the client and server, ensuring sensitive information is transmitted securely.
- **Update Dependencies**: Regularly check for and update dependencies to mitigate potential security vulnerabilities.
- **Enable Security Headers**: Use the [helmet](https://www.npmjs.com/package/helmet) package to enable various security headers that help protect your application from common attacks.
- **Input Validation**: Validate and sanitize user input to prevent attacks such as SQL injection and cross-site scripting (XSS).
- **Authentication and Authorization**: Implement a secure authentication and authorization system to manage user access and privileges.

### 2. Performance

- **Use Compression**: Enable compression with [compression](https://www.npmjs.com/package/compression) middleware to reduce the size of the HTTP response.
- **Cache Content**: Cache static content reduces server load and improves response times. Use a caching mechanism like Redis or in-memory caching for dynamic content.
- **Optimize Database Queries**: Analyze and optimize your database queries to minimize response time and improve overall performance. See this [LinkedIn Post by Dr Milan Milanović](https://www.linkedin.com/posts/milanmilanovic_technology-softwareengineering-programming-activity-7041664329175212032-h-Rp?utm_source=share&utm_medium=member_desktop) for more information.

### 3. Stability

- **Error Handling**: Implement proper error handling to ensure application stability, including logging and handling uncaught exceptions.
- **Testing**: Write comprehensive tests to ensure the reliability of your application. Use testing frameworks like Mocha, Jest, or Jasmine to create the unit, integration, and end-to-end tests.
- **Continuous Integration**: Set up a continuous integration (CI) system, such as GitHub Actions or Jenkins, to automatically test and build your application upon changes.
- **Monitoring**: Monitor your application to detect and resolve issues proactively. Use tools like [New Relic](https://www.newrelic.com/) or [Datadog](https://www.datadoghq.com/) for real-time monitoring and alerting.

### 4. Scalability

- **Load Balancing**: Utilize load balancing to distribute traffic across multiple instances of your application, increasing its ability to handle high-traffic loads.
- **Horizontal Scaling**: Design your application to support horizontal scaling, enabling it to handle increased traffic by adding more resources (e.g., servers) rather than increasing the capacity of existing resources.

**Please Note**: The above guidelines are intended to help you start your production deployment but may be partial. It's crucial to consult additional resources or seek expert advice to ensure your application meets all the requirements for your specific use case. Stay legally compliant and prioritize the safety and security of your application at all times.

## Project Structure and Flow

This Express-TS-Boilerplate Application is designed with a separation of concerns in mind, aiming to make the codebase more maintainable and scalable. The main folders are `configs`, `controllers`, `database`, `interfaces`, `middlewares`, `routes`, `services`, and `utils`. The flow of a request through the application would be as follows:

1. **Request**
2. **Routes**: Application's endpoints and the associated controllers.
3. **Middlewares**: Handle tasks such as input validation, logging, authentication, and authorization.
4. **Controllers**: Process incoming requests and orchestrate the application's response.
5. **Services**: Contain the core business logic and interact with the database methods.
6. **Database Methods**: Provide an abstraction layer for interacting with the data storage system.
7. **Persistent Layer**: Represents the data storage system/ Model definition (e.g., SQL, NoSQL databases).

### Folder Structure

- `configs`: Contains configuration files, including settings for the database, environment variables, and other global configurations.
- `controllers`: Contains controller files that handle incoming HTTP requests and delegate tasks to the appropriate services.
- `database`: Includes files related to setting up and configuring the database connection and defining database models and methods.
- `interfaces`: Contains TypeScript interfaces and type definitions for various components, such as models, services, and controllers.
- `middlewares`: Stores middleware functions executed between receiving a request and invoking the associated controller.
- `routes`: Holds route files that define the application's endpoints and map them to their respective controllers.
- `services`: Contains service files that encapsulate the core business logic and interact with database methods to fetch, create, update, or delete data.
- `utils`: Includes utility functions and reusable code snippets that can be used throughout the application.

This structure aims to promote a modular and maintainable codebase while adhering to best practices for separating concerns for Express.js.

## Deployment

Depending on your requirements and infrastructure, there are several ways to deploy this Express-TS-Boilerplate Application. Below, I provide a brief overview of some standard deployment options:

### 1. Manual Deployment

You can manually deploy the application by following these steps:

1. Clone the repository to your server.
2. Install the required dependencies using `npm install`.
3. Configure environment variables as needed.
4. Run `npm run build` to compile the TypeScript code.
5. Start the application using `npm start`.

### 2. Containerization (Docker with Dockerfile)

You can containerize the application using Docker to create an isolated environment and simplify deployment. A `Dockerfile` is included in the repository, which you can use to build a Docker image:

1. Install Docker on your server.
2. Clone the repository to your server.
3. Build the Docker image using `npm run build:docker`.
4. Run the application as a Docker container using `npm run run:docker`.

### 3. Docker Compose

Docker Compose allows you to manage multi-container applications with ease. This option is advantageous if your application depends on other services, e.g., databases, caches, nginx or message brokers. The provided `docker-compose.yml` file creates two instances of the application running on different ports and an Nginx reverse proxy and load balancer to distribute incoming requests between the two application instances:

1. Install Docker and Docker Compose on your server.
2. Clone the repository to your server.
3. Create/ use a/ the `docker-compose.yml` file with the required services and configurations.
4. Start the application and related services using `npm run compose:docker`.

You can customize the docker-compose.yml file to add more services or modify the existing configuration.

### 4. Kubernetes

Kubernetes deployment section coming soon...

These deployment options are meant to give you an idea of how you can deploy your application. Depending on your specific requirements and infrastructure, you may need to tailor the deployment process to meet your needs. Consult the official documentation for each tool or platform to ensure a smooth and successful deployment.

## Contributing

Contributions to this boilerplate are very welcome! If you find a bug, have a question, or want to suggest a new feature, you can either open an issue or follow the following steps to contribute:

Find the Contributing Guidelines here: [Contributing Guidelines](CONTRIBUTING.md).

### Open an Issue

If you encounter a bug or question, please open a new issue. Provide a clear description of the problem or question, and include any relevant information, such as error messages or steps to reproduce the bug.

Find the issue templates here: [Issue Templates](/.github/ISSUE_TEMPLATE).

## Support the Project

If you find this boilerplate helpful and would like to support its continued development, please consider giving it a star. Your support and appreciation motivate me to keep improving the project and improve it for the community/ you.
Starring the project is an easy and free way to show your support, and it helps increase its visibility so that more people can benefit from it. I genuinely appreciate every star, and I am grateful for your encouragement. Thank you!

## License

This Express-TS-Boilerplate Application is licensed under the MIT License. You can find a license copy in the [LICENSE](.github/LICENSE) file.

[MIT](.github/LICENSE)

## Acknowledgments

This Express-TS-Boilerplate Application was inspired by the following resources:

- [Express](https://github.com/expressjs/express)
- [Expressjs Project Structure Blog Article](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)
- [Express Generator](https://github.com/expressjs/generator)
