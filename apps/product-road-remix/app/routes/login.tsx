import type { ActionFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
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
import { Form, useActionData, useTransition } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { loginViaOAuthProvider, loginViaOTP } from "~/models/user.server";

import { BsGithub } from "react-icons/bs";
import Navbar from "~/components/navbar";
import type { Provider } from "@supabase/supabase-js";
import { getUserId } from "~/utils/session.server";
import { motion } from "framer-motion";
import { useRef } from "react";

const MotionButton = motion(Button);

export const meta: MetaFunction = () => {
  return {
    title: "تسجيل الدخول",
  };
};

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const { error } = await loginViaOTP(email);
  if (error) return error;
  return json({ message: "Email Sent" });
};

export default function Login() {
  const inputBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const inputBgHover = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  const socialBtnBg = useColorModeValue("gray.900", "white");
  const socialBtnText = useColorModeValue("white", "gray.800");

  const emailRef = useRef<HTMLInputElement>(null);

  const transition = useTransition();

  const data = useActionData();

  const handleOAuthSignIn = async (provider: Provider) => {
    const { error } = await loginViaOAuthProvider(provider);
    // TODO: Handle error properly
    if (error) {
      console.log("error in login with provider: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxW="4xl">
        <Box textAlign={"center"} py={{ base: 20, md: 36 }}>
          {data && data.message ? (
            <Box
              textAlign={"center"}
              py={{ base: 20, md: 36 }}
              maxW={"50%"}
              mx="auto"
            >
              <Heading mb={4} as="h1" size="2xl">
                تم الإرسال
              </Heading>
              <Text fontSize="xl">
                يرجى التحقق من صندوق الوارد الخاص بك للحصول على رابط تسجيل
                الدخول الخاص بك.
              </Text>
            </Box>
          ) : (
            <Box
              mx="auto"
              maxW={{ base: "100%", sm: "80%", md: "60%", lg: "50%" }}
            >
              <Heading mb={8} as="h1" size="4xl">
                أهلا
              </Heading>
              <Form method="post">
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
                  ref={emailRef}
                />
                <MotionButton
                  isLoading={transition.state === "submitting"}
                  colorScheme="blue"
                  fontFamily="button"
                  borderRadius={10}
                  w={"100%"}
                  p={6}
                  mt={6}
                  size="lg"
                  variant="solid"
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                >
                  <span>إرسال رابط الدخول</span>
                </MotionButton>
              </Form>

              <Text mt={10} mb={3}>
                أو عن طريق
              </Text>
              <Button
                onClick={() => handleOAuthSignIn("github")}
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
          )}
        </Box>
      </Container>
    </>
  );
}
