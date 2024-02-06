#!/bin/sh

envsubst '${ACCOUNT_PORT},${API_GATEWAY_PORT},${JWT_ALGORITHM}' < krakend.template.json > krakend.json
envsubst '${JWT_SECRET_KEY},${JWT_KEYID},${JWT_ALGORITHM}' < symmetric.template.json > symmetric.json
krakend run --config krakend.json
