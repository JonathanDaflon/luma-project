FROM cypress/browsers:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
RUN npx cypress verify
COPY . .
RUN npm run build

CMD ["npx", "cypress", "run"]