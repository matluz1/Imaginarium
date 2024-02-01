FROM node:18.19.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

COPY entrypoint-dev.sh /entrypoint-dev.sh
RUN chmod +x /entrypoint-dev.sh

ENTRYPOINT ["/entrypoint-dev.sh"]
