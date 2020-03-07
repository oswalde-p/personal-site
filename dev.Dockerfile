FROM node:12

WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install
ADD babel.config.js ./
ADD .eslintrc.js ./
ADD vue.config.js ./
EXPOSE 4321
CMD ["npm", "run", "dev"]
