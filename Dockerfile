FROM node:alpine

WORKDIR /app

COPY package*.json .

Run npm install -g npm@9.1.2

RUN npm install --force

COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["npm", "start"]