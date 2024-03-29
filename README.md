Completion ![30%](https://progress-bar.dev/30)

# riversurf.academy AI

The heart of this project is to provide you with an interactive AI cosmos for riversurfing. Starting from which river waves exist, what equipment to use, over to learn more fine grained control over your surfboard via video feedback.

```sh
Surf'n'Smile - Slow 😩 Steady 😁 Superfun.
```

[Tim](https://github.com/mhmFrost), a fromer student now turned Padawan, are working together on this project. It's also an experiment in UI design to see how AI changes the way, we interact with web pages.

## Project Setup

### Frontend & Backend together

`docker-compose up --build frontend backend`

### Frontend Standalone

- Navigate to the frontend folder

`cd frontend`

- Create the image with current code

`docker build -t frontend .`

- Start the container and run the image

`docker run -it -p 5173:5173 frontend`

### Backend Standalone

- Navigate to the backend folder

`cd backend`

- Create the image with current code

`docker build -t backend .`

- Start the container and run the image

`docker run -it -p 3000:3000 backend`

## Version History

### Frontend

#### 0.6

- Configure docker container for local and prod env
- Integrate OpenAI interface for dialog capabilities with page visitors

#### 0.5

- Add basic tests
- Add water animation for new water flow design
- Integrate swiper.js for new navigation
- Create contact component with validation
- Create recommendations with initial dummies
- Design water flow navigation and mobile first concept

#### 0.4

- Readme updated
- Project set up
- Replace Angular.js with Vue.js
- deleted Vue Templates
- WelcomeComponent added

#### 0.3

- Add scss for proper UI styling
- Add Angular theme for whole application
- Create initial index with video
- Use spinner to load application
- Add swiper for cool UX navigation
- Tag version 0.3 for fully functional Angular15 + Webpack 5 build

#### 0.2

- Add Webpack 5.0 to build a fully working delivery system for deployment
- Setup configuration for routes and special headers
- Package necessary files and configuration

#### 0.1

- Use seed of Angular 14 to lay groundwork for full Angular integration
- Figure out how to integrate the new Angular settings into build

### Backend

### 0.4

- Configure docker container for local and prod env

### 0.3

- Add route /contact for contactComponent
- implement OpenAI API from Frontend to Backend
- Add route /api/request for OpenAI Api
- Install Dotenv for global environment variables
- Install mongoose and integrate MongoDB

### 0.2

- Replaced Spring Boot with Express.js for backend services.
- Removed Gradle as the build tool.
- Removed PostgreSQL driver and dependencies.
- Add README for project documentation

#### 0.1

- Add Gitignore
- Installed Spring Boot 3.0.2.
- Set up Gradle for build management
- Add PostgreSQL driver and dependency for database connections