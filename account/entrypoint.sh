#!/bin/sh

if [ "${MODE}" = "DEV" ]; then 
  npx nodemon src/index
elif [ "${MODE}" = "PROD" ]; then 
  node src/index
fi
