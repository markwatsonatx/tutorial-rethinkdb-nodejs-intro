###Intro to RethinkDB using Docker Compose and Node.js

[![Build Status](https://travis-ci.org/markwatsonatx/tutorial-rethinkdb-nodejs-intro.svg?branch=master)](https://travis-ci.org/markwatsonatx/tutorial-rethinkdb-nodejs-intro)

This repository contains a simple Node.js app that connects to RethinkDB.
The intent of this project is to provide you with an introduction to RethinkDB using Node.js and Docker.

Follow these simple instructions and you'll be up and running:

```
git clone https://github.com/markwatsonatx/tutorial-rethinkdb-nodejs-intro
cd tutorial-rethinkdb-nodejs-intro
docker-compose up -d
```

After running `docker-compose up -d` you can access the sample application at [http://DOCKER-HOST-IP:33000/](http://localhost:33000).
You can access the RethinkDB administration console at [http://DOCKER-HOST-IP:38080](http://localhost:38080).

You can learn more by watching the YouTube video [here](https://youtu.be/K4q9POtIs4g).

####Running in Kubernetes

This application can be deployed to minikube by running ./kubernetes/deploy_to_minikube.sh.