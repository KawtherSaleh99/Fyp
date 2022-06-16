import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useNavigate } from "react-router-dom";

import { Flex, Box, IconButton, Text as T } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "../../components/auth/AuthElement";
import { addProgramme} from "../../firebase";

export default function AddProgramme() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  return (
    <ChakraProvider>
      <Flex w="full" h="calc(100vh)" m={0} bg="#edf3f8">
        <Box bg="#000">
          <Sidebar />
        </Box>
        <Flex w="full" display="flex" p={50} alignItems="start">
          <Flex display="flex" w="full" flexFlow="column" alignItems="center">
            <T color="black" fontWeight="bold" fontSize="3xl" pb={100}>
              Add a New Staff
            </T>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                addProgramme(name, department,description);
                navigate("/dashboard");
              }}
            >
              <FormLabel htmlFor="for">Programme Name</FormLabel>
              <FormInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Programme Name"
                type="text"
                required
              />
              <FormLabel htmlFor="for">Department</FormLabel>
              <FormInput
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Department Name"
                type="text"
                required
              />
              <FormLabel htmlFor="for">Description</FormLabel>
              <FormInput
                htmlFor="description"
                required
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <FormButton type="submit">Continue</FormButton>
              {/* <Link to="/reset">
              <Text>Forgot Password</Text>
            </Link> */}
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
