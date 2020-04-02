#!/bin/bash
au build --env prod

rm -f deploy-prod.tar.gz
rm -rf docs
mkdir -p docs/node_modules
mkdir -p docs/src/assets

cp index.html docs/
cp -R config docs/
cp -R node_modules/bootstrap docs/node_modules/
#cp -R node_modules/bootstrap-social docs/node_modules/
cp -R node_modules/font-awesome docs/node_modules/
cp -R scripts docs/
cp -R src/assets docs/src/

# cd docs && tar -cvzf ../../deploy-prod.tar.gz .
