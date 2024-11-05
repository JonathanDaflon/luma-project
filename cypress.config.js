const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } =
  require("@badeball/cypress-cucumber-preprocessor").default;
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const browserify = require("@cypress/browserify-preprocessor");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify({
      ...preprendTransformerToOptions(config, browserify.defaultOptions),
      typescript: require.resolve("typescript"),
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.lumahealth.io",
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "*.feature",
    setupNodeEvents,
  },
});
