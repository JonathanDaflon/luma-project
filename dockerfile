FROM cypress/included:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
RUN npx cypress verify
RUN npm i -g typescript
COPY . .

CMD ["npx", "cypress", "run"]