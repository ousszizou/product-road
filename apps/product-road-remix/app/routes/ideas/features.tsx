import { Box, Container } from "@chakra-ui/react";

import type { LoaderArgs } from "@remix-run/node";
import { getUserId } from "~/utils/session.server";
import { useLoaderData } from "@remix-run/react";
import { useUser } from "~/utils/useUser";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) return null;
  return userId;
}

export default function Features() {
  const userId = useLoaderData();
  const { user } = useUser();
  return (
    <Container maxW="4xl">
      <Box py={8}>
        <h1>features</h1>
        <span>ID المستخدم (سيرفر): {userId}</span>
        <br />
        <span>ID المستخدم (كلاينت): {user?.id}</span>
      </Box>
    </Container>
  );
}
