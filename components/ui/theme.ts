import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const defaultColors = defaultConfig.theme?.tokens?.colors || {};

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        ...defaultColors,
        blueSlate: {
          100: {
            value: "#BACBD9",
          },
          200: {
            value: "#A8BECF",
          },
          300: {
            value: "#557C99",
          },
          400: {
            value: "#4C6E88",
          },
          500: {
            value: "#426077",
          },
          600: {
            value: "#395366",
          },
          700: {
            value: "#2F4555",
          },
          800: {
            value: "#263744",
          },
          900: {
            value: "#131C22",
          },
          950: {
            value: "#0A0D11",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
