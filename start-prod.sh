#!/bin/bash

## Dulles Computer Science Club Website (Production Server) ##
# Notice: website is binded to port 1024 for production. (3000 for dev)

# Check and update files
git fetch
git pull origin ReactJs --force

# [Re]build website
rm -rf build
cd src
npm run build
cd ../

# Host website
sudo serve -s build -l 1024


