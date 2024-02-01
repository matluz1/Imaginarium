FROM node:18.19.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.template.conf /etc/nginx/templates/nginx.template.conf

COPY entrypoint-prod.sh /entrypoint-prod.sh
RUN chmod +x /entrypoint-prod.sh

ENTRYPOINT ["/entrypoint-prod.sh"]
