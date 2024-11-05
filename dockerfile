FROM cypress/included:latest

WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy remaining project files
COPY . .

# Run Cypress tests with the specified config file
CMD ["npx", "cypress", "run", "--config-file", "cypress.config.js"]