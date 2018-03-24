FROM node:latest

LABEL team="Tsin City @ Uwindsor"

RUN mkdir /csgames/
COPY / /csgames/

EXPOSE 3000

CMD [ "npm start" ]