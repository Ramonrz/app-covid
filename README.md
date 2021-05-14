## app-covid

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Proof of Concept to demonstrate Angular framework use. This app consumes COVID-19 api (https://api.covid19api.com/) and show some data in dashboards.

Here are some topics was used in the project

- Pipes
- CanLoad
- Use Hash
- CanActivate
- Lazy Loading
- WildCard 404
- Routes Module
- Event Binding
- Elvis Operator
- Unsubscribe RxJS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Docker

app-covid is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8081, so change this within the
docker-compose.yml if necessary. When ready, simply use the Dockerfile to
build the image.

```
docker build -t app-covid:1.0.0 .
```

This will create the app-covid image and pull in the necessary dependencies.

```
docker run -d -p 8081:80 --restart=always app-covid:1.0.0
```