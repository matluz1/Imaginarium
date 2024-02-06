#!/bin/sh

if [ "${MODE}" = "DEV" ]; then 
  npx nodemon server
elif [ "${MODE}" = "PROD" ]; then 
  node server
fi
