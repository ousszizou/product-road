import { BiBulb, BiDetail } from "react-icons/bi";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "@remix-run/react";

import { HiOutlineMap } from "react-icons/hi";
import Logo from "./logo";

interface NavItem {
  label: string;
  icon: any;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "إقتراحات",
    icon: <BiBulb />,
    href: "/ideas/features",
  },
  {
    label: "خارطة الطريق",
    icon: <HiOutlineMap />,
    href: "/roadmap",
  },
  {
    label: "سجل التغييرات",
    icon: <BiDetail />,
    href: "/changelog",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} w="full" zIndex={"sticky"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h={"60px"}
        py={{ base: 2 }}
        px={{ base: 12 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        {/* <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex> */}
        <Flex
          flex={{ base: 1 }}
          align="center"
          justify={{ base: "center", md: "start" }}
        >
          <Logo fill={useColorModeValue("gray.800", "white")} />
          <Text
            fontFamily={"heading"}
            fontWeight={700}
            color={useColorModeValue("gray.800", "white")}
          >
            أكاديمية الخوارزمي
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ms={12}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Button
          as={Link}
          fontWeight={500}
          variant={"link"}
          to={"/login"}
          color={useColorModeValue("gray.800", "white")}
        >
          تسجيل الدخول
        </Button>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const activeLinkColor = useColorModeValue("blue.600", "blue.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  const { pathname } = useLocation();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Link key={index} to={navItem.href}>
          <Flex
            fontWeight={500}
            color={
              navItem.href === `/${pathname.split("/")[1]}`
                ? activeLinkColor
                : linkColor
            }
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
            align="center"
          >
            {navItem.icon}
            <chakra.span ms={1}>{navItem.label}</chakra.span>
          </Flex>
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        to={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
