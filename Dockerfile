# build stage
FROM node:10.15.3-alpine AS build-env
ADD . /data
WORKDIR /data
RUN yarn install
RUN yarn lint
RUN yarn prod
RUN rm -rf dist/*.js.map
RUN rm -rf node_modules/
RUN yarn install --production

# final stage
FROM node:10.15.3-alpine
WORKDIR /app
COPY --from=build-env /data/package.json /app
COPY --from=build-env /data/dist /app/dist
COPY --from=build-env /data/server /app/server
COPY --from=build-env /data/node_modules /app/node_modules
EXPOSE 8080
CMD [ "yarn", "server" ]
