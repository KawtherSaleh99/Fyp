import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Card from "../../components/programmes/Cards";
import {
  Circles,
  Area,
  LiCircles,
} from "../../components/programmes/animationElements";
import departments from "./departments";
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
const ProgrammesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  return (
    <Box bg="black">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Box py={50} bg="#edf3f8">
        {departments.map((department) => (
          <Card department={department}></Card>
        ))}
      </Box>
      <Circles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
        <LiCircles></LiCircles>
      </Circles>

      <Footer></Footer>
    </Box>
  );
};

export default ProgrammesPage;
