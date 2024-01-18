#!/bin/sh

envsubst '${BACKEND_PORT},${API_GATEWAY_PORT}' < krakend.template.json > krakend.json
envsubst '${JWT_SECRET_KEY}' < symmetric.template.json > symmetric.json
krakend run --config krakend.json
