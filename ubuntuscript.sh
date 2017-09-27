#!/bin/bash
#########
# Ubuntu script
# Shell script to install simple-node-task-api, including dependencies, and start the Express node API
#########

# install deps
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install –y nodejs
sudo apt-get install –y git

# clone the project from github
git clone https://github.com/aaron-schnieder/simple-node-task-api.git

# cd into the node app folder
cd simple-node-task-api

# install npm deps
npm install

# start the express server
sudo npm run start