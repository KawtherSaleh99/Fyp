import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Text
} from "@chakra-ui/react";

export const AccordionComponent = ({ title, content }) => {
  console.log("content ----> ", content);
  return (
    <>
      <h1>{content?.title}</h1>
      <Container maxW="660px">
        <Text fontSize={18}>
        <Accordion>
          {Object.keys(content).map((key) => {
            console.log("key -----> ", key);
            return (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {key}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{content[key]}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
        </Text>
      </Container>
    </>
  );
};
