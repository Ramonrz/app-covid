FROM node:15 as app-covid
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build-prod

FROM nginx:1.18.0
VOLUME /var/cache/nginx
COPY --from=app-covid app/dist/app-covid /usr/share/nginx/html

# docker-compose up -d --build
# docker build -t app-covid:1.0.0 .
# docker run -d -p 8081:80 --restart=always app-covid:1.0.0
