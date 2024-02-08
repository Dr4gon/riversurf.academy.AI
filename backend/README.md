# riversurf-backend

## Project Setup

### Setting up the Development Environment

#### Build the Docker Image

`docker build -t backend .`

#### Start the Server

`docker run -it -p 3000:3000 backend`

### Version 0.1

- Add Gitignore
- Installed Spring Boot 3.0.2.
- Set up Gradle for build management
- Add PostgreSQL driver and dependency for database connections

### Version 0.2

- Replaced Spring Boot with Express.js for backend services.
- Removed Gradle as the build tool.
- Removed PostgreSQL driver and dependencies.
- Add README for project documentation

### Version 0.3

- Add route /contact for contactComponent
- implement OpenAI API from Frontend to Backend
- Add route /api/request for OpenAI Api
- Install Dotenv for global environment variables
- Install mongoose and integrate MongoDB

### Version 0.4

- Configure docker container for backend
