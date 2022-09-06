import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  VStack,
  chakra,
  useRadioGroup,
} from "@chakra-ui/react";
import { Link, useLocation } from "@remix-run/react";

import { BiPlus } from "react-icons/bi";
import RadioCard from "./radioCard";
import { useState } from "react";

const ideas_types = [
  { name: "ميزات", href: "/ideas/features" },
  { name: "دورات", href: "/ideas/courses" },
  { name: "مشاكل تقنية", href: "/ideas/bugs" },
];
const ideas_status = [
  "في سجل الطلبات",
  "مقبولة",
  "قيد التنفيذ",
  "مُنتهية",
  "مُلغات",
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const {
    getRootProps: getRootPropsIdeaStatus,
    getRadioProps: getRadioPropsIdeaStatus,
    value: valueIdeaStatus,
  } = useRadioGroup({
    name: "idea_status",
    onChange: (val) => SetStatusOfIdea(val),
  });

  const [statusOfIdea, SetStatusOfIdea] = useState<string | number>(
    valueIdeaStatus
  );

  const groupIdeaStatus = getRootPropsIdeaStatus();

  return (
    <Flex
      p={8}
      h="calc(100vh - 60px)"
      w="xs"
      flexDir="column"
      bg="blackAlpha.50"
      borderEnd={"1px solid"}
      borderEndColor="#e5e5ee"
      position={"fixed"}
      mt={"60px"}
    >
      <Button rightIcon={<BiPlus />} colorScheme="blue" variant="solid">
        {pathname.split("/")[2] === "features" && (
          <chakra.span>اقتراح ميزة</chakra.span>
        )}
        {pathname.split("/")[2] === "courses" && (
          <chakra.span>اقتراح دورة</chakra.span>
        )}
        {pathname.split("/")[2] === "bugs" && (
          <chakra.span>الإبلاغ عن مشكل</chakra.span>
        )}
      </Button>
      <VStack spacing={2} mt={16}>
        {ideas_types.map((route, index) => {
          return (
            <Box
              bg="blackAlpha.200"
              rounded="lg"
              p={4}
              w="full"
              as={Link}
              key={index}
              to={route.href}
            >
              {route.name}
            </Box>
          );
        })}
      </VStack>
      <Accordion mt={16} defaultIndex={[0]} allowMultiple>
        <AccordionItem border={0}>
          <h2>
            <AccordionButton _hover={{ bg: "none" }} rounded="lg">
              <Box flex="1" textAlign="start">
                تسميات الحالة
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={0}>
            <VStack spacing={1} {...groupIdeaStatus}>
              {ideas_status.map((value) => {
                const radio = getRadioPropsIdeaStatus({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Sidebar;
