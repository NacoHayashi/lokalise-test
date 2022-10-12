FROM node:16.13.2-slim AS builder 
ARG _ENV=stage
WORKDIR /app
COPY . /app
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build-${_ENV}

LABEL maintainer="Naco Lin <naco.lin@atelli.ai>"
FROM nginx:1.21.5-alpine
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html


