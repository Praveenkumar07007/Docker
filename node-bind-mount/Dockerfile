FROM node

WORKDIR /prave/nodejs/node-bind-mound-project

COPY . .

RUN npm ci

ENV PORT 3000

CMD [ "npm" , "start" ]
