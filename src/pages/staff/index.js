import React from "react";
import { ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";
import StaffCard from "./StaffCard";
import staff from "./staffData";
import Footer from "../../components/Footer";
import {
  Circles,
  LiCircles,
} from "../../components/programmes/animationElements";
const StaffPage = () => {
  return (
    <Box bg="#edf3f8">
      <Box mb={100} py={80} bg="#edf3f8">
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {staff.map((staff) => (
            <GridItem w="100%" bg="blue.500">
              <StaffCard staff={staff}></StaffCard>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer></Footer>
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
    </Box>
  );
};

export default StaffPage;
