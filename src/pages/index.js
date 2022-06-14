import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import NewSection from "../components/InfoSection/newSection";
import Services from "../components/Services";
import Footer from "../components/Footer";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      {/* <NewSection {...homeObjFour} />  */}
      <Footer></Footer>
    </>
  );
};

export default Home;
