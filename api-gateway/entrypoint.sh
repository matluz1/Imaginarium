#!/bin/sh

envsubst '${BACKEND_PORT},${API_GATEWAY_PORT}' < krakend.template.json > krakend.json
cat krakend.json
krakend run --config krakend.json
