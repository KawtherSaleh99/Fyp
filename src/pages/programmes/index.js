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

const ProgrammesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      {departments.map((department) => (
        <Card department={department}></Card>
      ))}

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
    </>
  );
};

export default ProgrammesPage;
