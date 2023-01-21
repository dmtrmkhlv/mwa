FROM node:16-alpine
WORKDIR /opt/app
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install
ADD . .
RUN npm run build
RUN npm prune --production
CMD ["node", "./dist/src/main.js"]