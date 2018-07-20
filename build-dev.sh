#!/bin/bash
au build --env dev

rm -f deploy-dev.tar.gz
rm -rf deploy/dev
mkdir -p deploy/dev/node_modules
mkdir -p deploy/dev/src/assets

cp index.html deploy/dev/
cp -R config deploy/dev/
cp -R node_modules/bootstrap deploy/dev/node_modules/
cp -R node_modules/bootstrap-social deploy/dev/node_modules/
cp -R node_modules/font-awesome deploy/dev/node_modules/
cp -R scripts deploy/dev/
cp -R src/assets deploy/dev/src/

cd deploy/dev && tar -cvzf ../../deploy-dev.tar.gz .