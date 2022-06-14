import { React, useState } from "react";
import {
  Box,
  Flex,
  Link,
  chakra,
  IconButton,
  Center,
  keyframes,
  Button,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
// import { Button } from "../ButtonElement";
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
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
  };
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
                    zIndex="2"
                    onClick={onToggle}
                    aria-label="Call Segun"
                    size="md"
                    animation={animation}
                    icon={
                      <MdDoubleArrow
                        color="#00DCDC"
                        style={{ transform: "rotate(90deg)" }}
                        size="xl"
                      />
                    }
                  />
                </Box>
              </Center>
            </Box>
          </Box>
        </Flex>
      </ChakraProvider>
      <div style={{ transition: "all 0.3s ease-in-out" }}>
        {isToggled ? (
          department.programmes.map((programme) => (
            <SmallCard programme={programme}></SmallCard>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
