import React, { useState, useEffect } from "react";

import Sidebar from "../../components/admin/Sidebar";

import { FiMenu } from "react-icons/fi";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { deleteStaff, deleteProgramme } from "../../firebase";
export default function Dashboard() {
  const [staff, setStaff] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "staff"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setStaff(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    const p = query(collection(db, "programmes"), orderBy("created", "desc"));
    onSnapshot(p, (querySnapshot) => {
      setProgrammes(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const data = [
    { name: "Daggy", created: "7 days ago" },
    { name: "Anubra", created: "23 hours ago" },
    { name: "Josef", created: "A few seconds ago" },
    { name: "Sage", created: "A few hours ago" },
  ];
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");

  return (
    <ChakraProvider resetCSS={false}>
      <Flex w="full" h="calc(100vh)" m={0} bg="#edf3f8">
        <Box bg="#000">
          <Sidebar />
        </Box>
        <Flex w="full" display="flex" p={50} alignItems="start">
          <Flex display="flex" w="full" flexFlow="column" alignItems="center">
            <Text color="black" fontWeight="bold" fontSize="xl" pb={100}>
              Programmes List
            </Text>
            <Stack
              direction={{ base: "column" }}
              w="full"
              bg={{ md: bg }}
              shadow="lg"
            >
              {programmes.map((token, tid) => {
                console.log("token ---> ", token);
                const { data } = token;
                return (
                  <Flex
                    direction={{ base: "row", md: "column" }}
                    bg={bg2}
                    key={tid}
                  >
                    <SimpleGrid
                      spacingY={3}
                      columns={{ base: 1, md: 3 }}
                      w={{ base: 120, md: "full" }}
                      textTransform="uppercase"
                      bg={bg3}
                      color={"gray.500"}
                      py={{ base: 1, md: 4 }}
                      px={{ base: 2, md: 10 }}
                      fontSize="md"
                      fontWeight="hairline"
                    >
                      <span>Programme</span>
                      <span>Department</span>
                      <chakra.span textAlign={{ md: "right" }}>
                        Actions
                      </chakra.span>
                    </SimpleGrid>
                    <SimpleGrid
                      spacingY={3}
                      columns={{ base: 1, md: 3 }}
                      w="full"
                      py={2}
                      px={10}
                      fontWeight="hairline"
                    >
                      <span>{data.name}</span>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {data.department}
                      </chakra.span>

                      <Flex justify={{ md: "end" }}>
                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                          <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<BsFillTrashFill />}
                            aria-label="Delete"
                            onClick={() => {
                              deleteProgramme(token.id);
                            }}
                          />
                        </ButtonGroup>
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                );
              })}
            </Stack>
          </Flex>
          <Divider w={5} bg="teal.100" h="full" mx={10} />
          <Flex display="flex" w="full" flexFlow="column" alignItems="center">
            <Text color="black" fontWeight="bold" fontSize="xl" pb={100}>
              Staff List
            </Text>
            <Stack
              direction={{ base: "column" }}
              w="full"
              bg={{ md: bg }}
              shadow="lg"
            >
              {staff.map((token, tid) => {
                return (
                  <Flex
                    direction={{ base: "row", md: "column" }}
                    bg={bg2}
                    key={tid}
                  >
                    <SimpleGrid
                      spacingY={3}
                      columns={{ base: 1, md: 4 }}
                      w={{ base: 120, md: "full" }}
                      textTransform="uppercase"
                      bg={bg3}
                      color={"gray.500"}
                      py={{ base: 1, md: 4 }}
                      px={{ base: 2, md: 10 }}
                      fontSize="md"
                      fontWeight="hairline"
                    >
                      <span>Staff Name</span>
                      <span>Department</span>
                      <span>Email</span>

                      <chakra.span textAlign={{ md: "right" }}>
                        Actions
                      </chakra.span>
                    </SimpleGrid>
                    <SimpleGrid
                      spacingY={3}
                      columns={{ base: 1, md: 4 }}
                      w="full"
                      py={2}
                      px={10}
                      fontWeight="hairline"
                    >
                      <Text color="black">{token.data.name}</Text>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        color="black"
                      >
                        {token.data.department}
                      </chakra.span>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        color="black"
                      >
                        {token.data.email}
                      </chakra.span>
                      <Flex justify={{ md: "end" }}>
                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                          <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<BsFillTrashFill />}
                            aria-label="Delete"
                            onClick={() => {
                              deleteStaff(token.id);
                            }}
                          />
                        </ButtonGroup>
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                );
              })}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
