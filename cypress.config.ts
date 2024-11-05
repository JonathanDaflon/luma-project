import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprendTransformerToOptions } from "@badeball/cypress-cucumber-preprocessor/browserify";
import browserify from "@cypress/browserify-preprocessor";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.lumahealth.io",
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        browserify({
          ...preprendTransformerToOptions(config, browserify.defaultOptions),
          typescript: require.resolve("typescript"),
        })
      );

      return config;
    },
  },
});
