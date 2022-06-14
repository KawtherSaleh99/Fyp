import React from "react";
import { Box, Flex, Link, chakra, IconButton, Center } from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button } from "../ButtonElement";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function SmallCard({ programme }) {
  return (
    <ChakraProvider>
      <Flex bg="#edf3f8" w="full" alignItems="center" justifyContent="center">
        <Box
          bg="white"
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          w={{ base: "5xl" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
          mt={4}
        >
          <Box
            py={2}
            px={8}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "100%" }}
          >
            <chakra.h5
              fontSize={{ sm: "sm", base: "2xl", md: "xl" }}
              color="gray.800"
              //   _dark={{ color: "white" }}
              fontWeight="normal"
            >
              {programme.title}
            </chakra.h5>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{ color: "gray.400" }}
            ></chakra.p>
          </Box>
          <Box mr={8} py={2}>
            <IconButton
              // colorScheme="teal"
              aria-label="Call Segun"
              _hover={{ bgColor: "orange.500" }}
              bgColor="blackAlpha.900"
              icon={
                <ChevronRightIcon
                  color="#00DCDC"
                  boxSize={8}
                  _hover={{ transform: "scale(1.5)" }}
                />
              }
            />
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}