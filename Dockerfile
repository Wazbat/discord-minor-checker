FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY src src
RUN npm run build

FROM node:18-alpine
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY --from=builder /usr/src/app/dist/ dist/
EXPOSE ${PORT}
ENTRYPOINT [ "node", "dist/index.js" ]