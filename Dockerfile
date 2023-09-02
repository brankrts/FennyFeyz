FROM alpine:latest

RUN apk update && \
    apk add --no-cache python3 py3-pip openjdk11 nodejs g++ && \
    rm -rf /var/cache/apk/*
RUN apk add --update npm 
WORKDIR /app

RUN mkdir /app/python/ && mkdir /app/java/ && mkdir /app/cpp/ && mkdir /app/javascript/

COPY . /app

RUN npm i 

CMD ["node", "app.js"]