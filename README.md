# Dani personal web site
## Server Information

### Environment
- Node.js v16.6.1
- npm v7.20.5

### Frameworks
- Express v18.2.0

[![Build Status]()]()

## Installation

#### Prerequisites
The following packages & applications must be installed beforehand. Installation of these packages & applications are out of this project's scope.

---

- Node v16.6.1 [Download & Install](https://nodejs.org/dist./v16.6.1 "Download & Install Here")

Or

- NVM(Node version manager) [Download & Install](https://github.com/nvm-sh/nvm "Download & Install Here")

---

- Docker [Download & Install](https://docs.docker.com/get-docker/ "Download & Install Here")

And

- Docker Compose [Download & Install](https://docs.docker.com/compose/install/ "Download & Install Here")


#### Create environment variable files (.env)
```zsh
cp .env.example .env
cp .env.example .env.dev
```

Add the following variables to your .env.dev file (Docker)
```zsh
API_URL=http://localhost:5000
API_TOKEN=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MzA2MTQ3NjUsImV4cCI6MzI0OTMyOTk1NjUsImF1ZCI6InRjZy1hcGkiLCJzdWIiOiJiYWNrb2ZmaWNlIn0.NOJYd4RacPNpW99zVolnxBo2jHiwyG7KPO4mf13MMN4
SECRET_TOKEN_KEY=qwertyuiopasdfghjklzxcvbnm123456
```

#### Run docker container
```zsh
npm run docker
```

#### Start Backend Development Server
You must start backend server on a different terminal (bash, zsh, etc) tab or window than the frontend development server.

```zsh
npm run start:back
```

Runs on `localhost:8080`

## Frontend Information

### Frameworks
- React v16.13.1

In the project directory, you can run:

#### Start Frontend Development Server
```zsh
npm start:front
```

#### Run tests
```zsh
npm run test
```

#### Build frontend project files (for production)
```zsh
npm run build
```
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
