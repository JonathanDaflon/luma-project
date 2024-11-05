FROM cypress/browsers:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
RUN npx cypress verify
COPY . .
RUN npx tsc --project cypress/tsconfig.json

CMD ["npx", "cypress", "run"]