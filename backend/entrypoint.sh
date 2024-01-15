#!/bin/sh

if [ "${MODE}" = "DEV" ]; then 
  npx nodemon server ${BACKEND_PORT}
elif [ "${MODE}" = "PROD" ]; then 
  node server ${BACKEND_PORT}
fi
