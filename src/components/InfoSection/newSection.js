import React from "react";
import { Button } from "../ButtonElement";
import {
  Column2,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements";

const NewSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}></InfoRow>
          <Subtitle darkText={darkText}>hi</Subtitle>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default NewSection;
