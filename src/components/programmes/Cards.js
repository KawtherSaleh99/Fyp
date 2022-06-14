import React from "react";
import {
  Box,
  Flex,
  Link,
  chakra,
  IconButton,
  Center,
  keyframes,
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button } from "../ButtonElement";
import { MdDoubleArrow } from "react-icons/md";
import SmallCard from "./SmallCard";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1) rotate(0); border-radius: 20%; }
  50% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;
const animation = `${animationKeyframes} 5s ease-in-out`;

export default function Card({ department }) {
  return (
    <>
      <ChakraProvider>
        <Flex
          bg="#edf3f8"
          pt={50}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="white"
            //   _dark={{ bg: "gray.800" }}
            mx={{ lg: 8 }}
            display={{ lg: "flex" }}
            maxW={{ lg: "5xl" }}
            shadow={{ lg: "lg" }}
            rounded={{ lg: "lg" }}
          >
            <Box w={{ lg: "50%" }}>
              <Box
                h={{ base: 64, lg: "full" }}
                rounded={{ lg: "lg" }}
                bgSize="cover"
                style={{
                  backgroundImage: `url(${department.image})`,
                }}
              ></Box>
            </Box>

            <Box
              py={12}
              px={6}
              maxW={{ base: "xl", lg: "5xl" }}
              w={{ lg: "80%" }}
            >
              <chakra.h2
                fontSize={{ base: "2xl", md: "3xl" }}
                color="gray.800"
                //   _dark={{ color: "white" }}
                fontWeight="bold"
              >
                {department.title}
              </chakra.h2>
              <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
                {department.description}
              </chakra.p>

              <Center>
                <Box mt={8}>
                  <IconButton
                    // colorScheme="teal"
                    aria-label="Call Segun"
                    // size="lg"
                    animation={animation}
                    icon={
                      <MdDoubleArrow
                        color="#00DCDC"
                        size="xl"
                        style={{ transform: "rotate(90deg)" }}
                      />
                    }
                  />
                </Box>
              </Center>
            </Box>
          </Box>
        </Flex>
      </ChakraProvider>
      {department.programmes.map((programme) => (
        <SmallCard programme={programme}></SmallCard>
      ))}
    </>
  );
}
