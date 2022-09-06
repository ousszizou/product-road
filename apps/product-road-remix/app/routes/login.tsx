import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";
import Navbar from "~/components/navbar";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function Login() {
  const inputBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const inputBgHover = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  const socialBtnBg = useColorModeValue("gray.900", "white");
  const socialBtnText = useColorModeValue("white", "gray.800");

  return (
    <>
      <Navbar />
      <Container maxW="4xl">
        <Box textAlign={"center"} py={{ base: 20, md: 36 }}>
          <Box mx="auto" maxW={{ base: "100%", sm: "80%", md: "60%" }}>
            <Heading mb={8} as="h1" size="4xl">
              أهلا
            </Heading>
            <Input
              p={8}
              borderRadius={10}
              bg={inputBg}
              border={0}
              _focus={{
                bg: inputBgHover,
              }}
              autoComplete="off"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              size="lg"
              name="email"
            />

            <MotionButton
              colorScheme="blue"
              fontFamily="button"
              borderRadius={10}
              w={"100%"}
              p={6}
              mt={6}
              size="lg"
              variant="solid"
              whileTap={{ scale: 0.9 }}
            >
              <span>إرسال رابط الدخول</span>
            </MotionButton>
            <Text mt={10} mb={3}>
              أو عن طريق
            </Text>
            <Button
              bg={socialBtnBg}
              _hover={{ background: socialBtnBg }}
              p={6}
              size="lg"
              borderRadius={10}
              w={"full"}
              color={socialBtnText}
              leftIcon={<BsGithub />}
            >
              <Center>
                <Text fontFamily="monospace">GitHub</Text>
              </Center>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
