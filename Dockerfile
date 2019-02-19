# build stage
FROM node:10.15.0-alpine AS build-env
MAINTAINER Johnny Chu <chuhsun@gmail.com>
ADD . /data
RUN cd /data && yarn install && yarn lint && yarn prod && rm -rf src/ && rm -rf dist/*.map && rm -rf webpack.*

# final stage
FROM node:10.15.0-alpine
WORKDIR /app
COPY --from=build-env /data/package.json /app
COPY --from=build-env /data/dist /app/dist
COPY --from=build-env /data/server /app/server
COPY --from=build-env /data/node_modules /app/node_modules
EXPOSE 8080
CMD [ "yarn", "server" ]