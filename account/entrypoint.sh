#!/bin/sh
/wait-for-it.sh account-db:5432 -t 60
npx prisma generate
if [ "${MODE}" = "DEV" ]; then 
  npx prisma migrate dev --name init
  npx nodemon src/index
elif [ "${MODE}" = "PROD" ]; then
  npx prisma migrate deploy --name init
  node src/index
fi
