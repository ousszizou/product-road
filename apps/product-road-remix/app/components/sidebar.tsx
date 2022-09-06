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
  useRadioGroup,
} from "@chakra-ui/react";

import { BiPlus } from "react-icons/bi";
import RadioCard from "./radioCard";
import { useState } from "react";

const ideas_types = ["ميزات", "دورات", "مشاكل تقنية"];
const ideas_status = [
  "في سجل الطلبات",
  "مقبولة",
  "قيد التنفيذ",
  "مُنتهية",
  "مُلغات",
];

const Sidebar = () => {
  const {
    getRootProps: getRootPropsIdeaTypes,
    getRadioProps: getRadioPropsIdeaTypes,
    value: valueIdeaTypes,
  } = useRadioGroup({
    name: "idea_type",
    defaultValue: "ميزات",
    onChange: (val) => SetTypeOfIdea(val),
  });

  const [typeOfIdea, SetTypeOfIdea] = useState<string | number>(valueIdeaTypes);

  const groupIdeaTypes = getRootPropsIdeaTypes();

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
        {typeOfIdea !== "مشاكل تقنية" ? "اقتراح" : "ابلاغ عن"} {typeOfIdea}
      </Button>
      <VStack spacing={1} mt={16} {...groupIdeaTypes}>
        {ideas_types.map((value) => {
          const radio = getRadioPropsIdeaTypes({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
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
