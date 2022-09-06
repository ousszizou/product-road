import { Box, useRadio } from "@chakra-ui/react";

import type { ReactNode } from "react";
import type { UseRadioProps } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
} & UseRadioProps;

const RadioCard = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box w="full" as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        rounded="lg"
        _checked={{
          bg: "blackAlpha.200",
        }}
        _hover={{
          bg: "blackAlpha.100",
        }}
        _focusWithin={{
          boxShadow: "outline",
        }}
        p={4}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
