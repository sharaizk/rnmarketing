import React from "react";
import {
  NavbarContainer,
  NavBanner,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  Navbar,
  DropLink,
  DropDownContainer,
} from "./Elements";
import Hamburger from "hamburger-react";
import logoSet1 from "assets/logoSet1.png";
import { BiChevronDown } from "react-icons/bi";
const Nav = ({ isOpen, toggle, toggleDrop, dropOpen }) => {
  return (
    <NavbarContainer>
      <Navbar>
        <NavBanner src={logoSet1} alt="logo" />
        <MobileIcon>
          <Hamburger size={25} toggled={isOpen} toggle={toggle} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <DropLink onClick={() => toggleDrop()}>
              FAQs <BiChevronDown size={17} />
            </DropLink>
            <DropDownContainer open={dropOpen}>
              <NavItem>
                <NavLinks
                  to="/faqs"
                  onClick={() => {
                    toggleDrop();
                  }}
                >
                  FAQs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/comissions"
                  onClick={() => {
                    toggleDrop();
                  }}
                >
                  Commissions
                </NavLinks>
              </NavItem>
            </DropDownContainer>
          </NavItem>
          <NavItem>
            <NavLinks to="/complaints-handling-procedure">Complaints</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact Us</NavLinks>
          </NavItem>
        </NavMenu>
      </Navbar>
    </NavbarContainer>
  );
};

export default Nav;
