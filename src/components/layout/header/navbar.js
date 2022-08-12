import React from "react";
import {
  NavbarContainer,
  NavBanner,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  Navbar,
} from "./Elements";
import Hamburger from "hamburger-react";
const Nav = ({ isOpen, toggle }) => {
  return (
    <NavbarContainer>
      <Navbar>
        <NavBanner>Rn Marketing Solutions</NavBanner>
        <MobileIcon>
          <Hamburger size={25} toggled={isOpen} toggle={toggle} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/home">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/home">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/home">FAQs</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/home">Complaints</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/home">Contact Us</NavLinks>
          </NavItem>
        </NavMenu>
      </Navbar>
    </NavbarContainer>
  );
};

export default Nav;
