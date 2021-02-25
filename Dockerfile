# build stage
FROM node:14.15.5-alpine3.13 AS build-env
ADD . /data
WORKDIR /data
RUN yarn install
RUN yarn lint
RUN yarn prod
RUN rm -rf dist/*.js.map
RUN rm -rf node_modules/
RUN yarn install --production

# final stage
FROM node:14.15.5-alpine3.13
WORKDIR /app
COPY --from=build-env /data/package.json /app
COPY --from=build-env /data/dist /app/dist
COPY --from=build-env /data/server /app/server
COPY --from=build-env /data/node_modules /app/node_modules
RUN chown -R node:node /app
USER node
EXPOSE 8080
CMD [ "yarn", "server" ]
