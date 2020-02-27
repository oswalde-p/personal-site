FROM node:12

WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install
ADD . .
EXPOSE 4321
CMD ["npm", "run", "dev"]
