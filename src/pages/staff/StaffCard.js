import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  chakra,
  ChakraProvider,
  Link,
  Button,
} from "@chakra-ui/react";

import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const StaffCard = ({ staff }) => {
  let navigate = useNavigate();

  return (
    <ChakraProvider resetCSS={false}>
      <Flex
        bg="#edf3f8"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box border="1px" rounded="lg">
          <Box
            w="md"
            mx="auto"
            py={4}
            px={8}
            h="auto"
            bg="white"
            shadow="lg"
            rounded="lg"
          >
            <Flex justifyContent={{ base: "center", md: "center" }} mt={-16}>
              <Image
                w={120}
                h={120}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                borderWidth={2}
                color="brand.500"
                alt="Testimonial avatar"
                src={staff.image}
              />
            </Flex>

            <chakra.h2
              color="gray.800"
              fontSize={{ base: "2xl", md: "2xl" }}
              mt={{ base: 2, md: 10 }}
              fontWeight="bold"
              textAlign="center"
            >
              {staff.name}
            </chakra.h2>

            <chakra.p my={10} color="gray.600" textAlign="center">
              {staff.description}
            </chakra.p>
            <Flex alignItems="center" mt={4} ml={8} color="gray.700">
              <Icon as={AiTwotonePhone} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {staff.phone}
              </chakra.h1>
            </Flex>

            <Flex alignItems="center" mt={4} ml={8} color="gray.700">
              <Icon as={MdLocationOn} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                IIUM Gombak Campus
              </chakra.h1>
            </Flex>
            <Flex alignItems="center" mt={4} ml={8} color="gray.700">
              <Icon as={MdEmail} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {staff.email}
              </chakra.h1>
            </Flex>
            <Flex justifyContent="center" my={50} color="gray.700">
              <Link
                size="md"
                height="48px"
                width="full"
                href={staff.link}
                isExternal
              >
                <Button
                  size="md"
                  height="48px"
                  width="full"
                  colorScheme="#00DCDC"
                  bg="#00DCDC"
                  rounded="lg"
                  textAlign="center"
                >
                  View Profile
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default StaffCard;
