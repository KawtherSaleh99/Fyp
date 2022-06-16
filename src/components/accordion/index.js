export const AccordionComponent = ({ title, content }) => {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{content}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
