FROM node:20-alpine

RUN mkdir -p /code

WORKDIR /code

COPY . /code

RUN yarn && \
    yarn build && \
    yarn cache clean

EXPOSE 3000

CMD [ "yarn", "start" ]
HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost/ || exit 1
