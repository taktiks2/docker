FROM node:18

WORKDIR /usr/src/app

# NOTE: こいつらは必要、ないとコンテナがすぐ落ちてしまう
COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
