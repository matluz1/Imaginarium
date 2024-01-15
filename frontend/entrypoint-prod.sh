#!/bin/sh

envsubst '${API_GATEWAY_PORT},${FRONTEND_PORT}' < /etc/nginx/templates/nginx.template.conf > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
