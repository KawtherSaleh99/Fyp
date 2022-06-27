import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Card from "../../components/programmes/Cards";
import {
  Circles,
  LiCircles,
} from "../../components/programmes/animationElements";
import departments from "./departments";
import { Box } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { Nav } from "../../components/NavBar/NavBarElements";
import NavBar from "../../components/NavBar";
const ProgrammesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box bg="black">
        <Box py={50} bg="#edf3f8">
          {departments.map((department) => (
            <Card department={department}></Card>
          ))}
        </Box>
        {/* <Circles>
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
        </Circles> */}
        <Footer></Footer>
      </Box>
    </>
  );
};

export default ProgrammesPage;
