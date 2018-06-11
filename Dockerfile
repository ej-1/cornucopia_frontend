# Setup instructions
# http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/#.WwBPMVOFN-U

# Build image
# docker build -t <username>/<tag>:latest .

# After building push the image
# docker push <username>/<tag>:latest

# If ´docker login´ does not work. Delete this file:
# /usr/local/bin/docker-credential-osxkeychain
# https://github.com/docker/for-mac/issues/1540
# Then try to login again
# docker login -u ewj1000 cornucopia

# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# Bundle app source
COPY . /usr/src/app

#EXPOSE 80

# start app
CMD ["npm", "start"]