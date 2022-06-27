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
  NavButton,
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
              <NavButton to="/#about">About</NavButton>
            </NavItem>
            <NavItem>
              <NavLinks to="staff">Staff</NavLinks>
            </NavItem>
            <NavItem>
              <NavButton to="/#departments">Departments</NavButton>
            </NavItem>
            <NavItem>
              <NavLinks to="programme">Programmes</NavLinks>
            </NavItem>
            <NavItem>
              <NavButton to="apply">Apply</NavButton>
            </NavItem>
          </NavMenu>
          <NavBtn hidden>
            <NavBtnLink hidden to="apply">
              Apply now
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
