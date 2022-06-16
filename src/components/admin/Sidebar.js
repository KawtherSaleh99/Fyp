import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import { logout } from "../../firebase";

export default function Sidebar() {
  const location = useLocation();

  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "300px"}
      flexDir="column"
      justifyContent="space-between"
      background="#0d0d0d"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          to="/dashboard"
          active={location.pathname === "/dashboard"}
        />
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="Add Staff"
          to="/staff"
          active={location.pathname === "/staff"}
        />
        <NavItem
          navSize={navSize}
          icon={FiUser}
          title="Add Programme"
          to="/addProgramme "
          active={location.pathname === "/addProgramme"}
        />
        <NavItem
          navSize={navSize}
          icon={FiLogOut}
          title="Logout"
          to="/signin"
          onClick={() => {
            logout();
          }}
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
