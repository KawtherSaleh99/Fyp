import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";
import { Link as RouteLink } from "react-router-dom";
export default function NavItem({
  icon,
  title,
  description,
  active,
  navSize,
  to,
}) {
  return (
    <Flex
      mt={70}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <RouteLink to={to}>
          <Link
            backgroundColor={active && "#00DCDC"}
            p={3}
            pr={0}
            borderRadius={8}
            _hover={{
              textDecor: "none",
              backgroundColor: "#00DCDC",
              color: "#000",
            }}
            w={navSize == "large" && "100%"}
          >
            <MenuButton w="100%">
              <Flex>
                <Icon
                  as={icon}
                  _hover={{
                    textDecor: "none",
                    backgroundColor: "#00DCDC",
                    color: "#000",
                  }}
                  fontSize="xl"
                  color={active ? "#000" : "fff"}
                />
                <Text
                  ml={5}
                  color={active ? "#000" : "#fff"}
                  display={navSize == "small" ? "none" : "flex"}
                >
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </Link>
        </RouteLink>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
