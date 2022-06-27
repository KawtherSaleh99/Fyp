import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { NavButton } from "../NavBar/NavBarElements";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Find IIUM postgraduate courses through a comprehensive guide
        </HeroH1>
        <HeroP>
          We will guide you through the postgraduate course application process
          from start to finish
        </HeroP>
        <HashLink style={{ textDecoration: "none" }} to="/#about">
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HashLink>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
