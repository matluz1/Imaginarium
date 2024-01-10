#!/bin/sh

envsubst '${BACKEND_PORT},${FRONTEND_PORT}' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'
