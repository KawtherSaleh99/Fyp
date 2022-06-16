import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">pguide</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="programme">Programmes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="staff">Staff</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="apply">Apply now</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
