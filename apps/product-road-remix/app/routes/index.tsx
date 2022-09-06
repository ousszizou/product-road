import { Box, Button, Container } from "@chakra-ui/react";
export default function Index() {
  return (
    <Container maxW="4xl">
      <Box py={8}>
        <h1>Welcome to Remix</h1>
        <Button colorScheme="blue">Button</Button>
      </Box>
    </Container>
  );
}
