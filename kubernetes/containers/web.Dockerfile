FROM node:latest
MAINTAINER Mark Watson <markwatsonatx@gmail.com>
RUN mkdir -p /usr/src
ADD src /usr/src
WORKDIR /usr/src/app
CMD ["npm","start"]
EXPOSE 3000