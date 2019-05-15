# create a file named Dockerfile
FROM node:8.6.0
RUN mkdir /application
WORKDIR /application
COPY package.json /application
RUN npm install
RUN npm install nodemon -g

COPY . /application
RUN ls -al
EXPOSE 4001
CMD ["npm", "start"]