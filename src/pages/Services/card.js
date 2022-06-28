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
  Text,
} from "@chakra-ui/react";
import SmallCard from "../../components/programmes/SmallCard";
const Card = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ServicesCard onClick={onOpen}>
        <ServicesIcon src={Icon1} />
        <ServicesH2>{data.title}</ServicesH2>
      </ServicesCard>
      <ChakraProvider resetCSS={false}>
        <Modal size="5xl" onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent bg="#edf3f8">
            <ModalHeader textAlign="center" color="#00dcdc">
              {data.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody color="#000">
              <Text mb={10}>{data.description}</Text>
              {data.programmes.map((programme) => (
                <SmallCard programme={programme}></SmallCard>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default Card;
