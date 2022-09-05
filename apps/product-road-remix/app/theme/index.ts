import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const overrides = {
  config: { initialColorMode: "light", useSystemColorMode: false },
  direction: "ar",
};

export default extendTheme(overrides);
