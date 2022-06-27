import { React, useEffect } from "react";
import { AccordionComponent } from "../../components/accordion";
import courses from "./coursesData";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  Text,
  Link,
  Center,
  ListItem,
  List,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import { MdCheckCircle, MdSettings } from "react-icons/md";

export const Courses = ({ title }) => {
  const data = courses[title];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box bg="#edf3f8">
      <Box px={200} py={80} h="auto" bg="#edf3f8">
        <ChakraProvider resetCSS={false}>
          <Grid h="full" gap={20}>
            <GridItem colSpan={5} rowSpan={1}>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={30}
                color="black"
                mb={10}
              >
                {data.title}
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={16}
                color="grey"
                mb={10}
              >
                {data.introduction}
              </Text>
            </GridItem>
            <GridItem colSpan={4} rowSpan={3}>
              <Box>
                <Text
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={30}
                  color="#00DCDC"
                  mb={10}
                  ml={200}
                >
                  Programme Outcome
                </Text>
                <List spacing={3} ml={250} mb={10}>
                  {data.outcome.map((ele) => (
                    <ListItem fontWeight="bold" fontSize={16} color="grey">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      {ele}
                    </ListItem>
                  ))}
                </List>
                <Text
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={32}
                  color="#00DCDC"
                  mb={10}
                  ml={200}
                >
                  Career Opportunities
                </Text>
                <Box mb={10} ml={250}>
                  <Text
                    textAlign="left"
                    fontWeight="bold"
                    fontSize={16}
                    color="grey"
                    mb={5}
                  >
                    {data.opportunities}
                  </Text>
                  <UnorderedList fontWeight="bold" fontSize={16} color="grey">
                    {data.areas.map((ele) => (
                      <ListItem fontWeight="bold" fontSize={16} color="grey">
                        {ele}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
                <Text
                  textAlign="left"
                  fontWeight="bold"
                  fontSize={32}
                  color="#00DCDC"
                  mb={10}
                  ml={200}
                >
                  Duration of Study
                </Text>
                <Box mb={10} ml={250}>
                  <Text
                    textAlign="left"
                    fontWeight="bold"
                    fontSize={16}
                    color="grey"
                    mb={5}
                  >
                    {data.duration}
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem colStart={5} colEnd={5} rowStart={2} rowEnd={2}>
              <Box border="1px" borderRadius={50} borderColor="#00DCDC">
                <Box
                  w="full"
                  mx="auto"
                  py={4}
                  px={8}
                  h="auto"
                  bg="white"
                  shadow="lg"
                  rounded="lg"
                  borderRadius={50}
                >
                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize={24}
                    color="#00DCDC"
                    mb={10}
                  >
                    Useful Links
                  </Text>
                  <Center pb={5}>
                    <Link href="https://chakra-ui.com" isExternal>
                      <Text
                        textAlign="center"
                        fontWeight="bold"
                        fontSize={16}
                        color="grey"
                        as="u"
                      >
                        IIUM KICT Postgraudate Scholarship
                      </Text>
                    </Link>
                  </Center>
                  <Center pb={5}>
                    <Link href="https://chakra-ui.com" isExternal>
                      <Text
                        textAlign="center"
                        fontWeight="bold"
                        fontSize={16}
                        color="grey"
                        as="u"
                      >
                        IIUM KICT Postgraudate Scholarship
                      </Text>
                    </Link>
                  </Center>
                  <Center pb={5}>
                    <Link href="https://chakra-ui.com" isExternal>
                      <Text
                        textAlign="center"
                        fontWeight="bold"
                        fontSize={16}
                        color="grey"
                        as="u"
                      >
                        IIUM KICT Postgraudate Scholarship
                      </Text>
                    </Link>
                  </Center>
                </Box>
              </Box>
            </GridItem>
            <GridItem colStart={5} colEnd={5} rowStart={3} rowEnd={3}>
              <Box border="1px" borderRadius={50} borderColor="#00DCDC">
                <Box
                  w="full"
                  mx="auto"
                  py={4}
                  px={8}
                  h="auto"
                  bg="white"
                  shadow="lg"
                  rounded="lg"
                  borderRadius={50}
                >
                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize={24}
                    color="#00DCDC"
                    mb={10}
                  >
                    Fee Structure
                  </Text>
                  <Center pb={5}>
                    <Link href="https://chakra-ui.com" isExternal>
                      <Text
                        textAlign="center"
                        fontWeight="bold"
                        fontSize={16}
                        color="grey"
                        as="u"
                      >
                        View Fee Structure
                      </Text>
                    </Link>
                  </Center>
                </Box>
              </Box>
            </GridItem>{" "}
          </Grid>
        </ChakraProvider>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Courses;
