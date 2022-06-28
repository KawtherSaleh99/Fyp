import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "../../components/services/ServicesElements";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Card from "./card";
import departments from "../programmes/departments";
const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  return (
    <>
      <ServicesContainer id="departments">
        <ServicesH1>Departments</ServicesH1>
        <ServicesWrapper>
          {departments.map((data) => (
            <Card data={data} />
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
