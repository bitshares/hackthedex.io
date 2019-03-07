#!/bin/bash
au build --env prod

rm -f deploy-prod.tar.gz
rm -rf deploy/prod
mkdir -p deploy/prod/node_modules
mkdir -p deploy/prod/src/assets

cp index.html deploy/prod/
cp -R config deploy/prod/
cp -R node_modules/bootstrap deploy/prod/node_modules/
cp -R node_modules/bootstrap-social deploy/prod/node_modules/
cp -R node_modules/font-awesome deploy/prod/node_modules/
cp -R scripts deploy/prod/
cp -R src/assets deploy/prod/src/

# cd deploy/prod && tar -cvzf ../../deploy-prod.tar.gz .
