import { extendTheme } from "@chakra-ui/react";

const overrides = {
  config: { initialColorMode: "light", useSystemColorMode: false },
  direction: "ar",
  fonts: {
    body: "'IBM Plex Sans Arabic', sans-serif;",
    heading: "'IBM Plex Sans Arabic', sans-serif;",
  },
};

export default extendTheme(overrides);
