FROM node:16.17.1-alpine3.15 as builder

WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm install
COPY ./src ./src/
RUN  \
    addgroup -S app && adduser -h /usr/app -G app -S app \
    && chown -R app:app /usr/app

FROM builder as final_build
WORKDIR /usr/app
COPY --chown=app:app ["package*.json", "src", "/usr/app/"]
USER app
CMD ["node", "src/app.js"]
