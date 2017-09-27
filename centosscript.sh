#!/bin/bash
#########
# Redhat / CentOs script
# Shell script to install simple-node-task-api, including dependencies, and start the Express node API
#########

# install deps
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
sudo yum -y install nodejs
sudo yum -y install git

# clone the project from github
git clone https://github.com/aaron-schnieder/simple-node-task-api.git

# cd into the node app folder
cd simple-node-task-api

# install npm deps
npm install

# start the express server
sudo npm run start