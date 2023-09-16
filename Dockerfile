FROM node:16.15.1-alpine as node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
USER user
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html
