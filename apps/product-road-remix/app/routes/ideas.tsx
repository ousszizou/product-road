import { Box, Flex } from "@chakra-ui/react";

import Navbar from "~/components/navbar";
import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/sidebar";

export default function Posts() {
  return (
    <>
      <Navbar />
      <Flex>
        <Sidebar />
        <Box flexGrow={1} pt={"60px"} marginStart={"20rem"}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}
