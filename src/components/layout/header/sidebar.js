import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  NavItem,
  SidebarLink,
  DropDownContainer,
  DropLink,
} from "./Elements";
import { BiChevronDown } from "react-icons/bi";
const Sidebar = ({ isOpen, toggle, toggleDrop, dropOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <NavItem>
          <SidebarLink to="/home">Home</SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink to="/about">About</SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink to="/services">Services</SidebarLink>
        </NavItem>
        <NavItem>
          <DropLink onClick={() => toggleDrop()}>
            FAQs <BiChevronDown size={17} />
          </DropLink>
          <DropDownContainer open={dropOpen}>
            <NavItem>
              <SidebarLink
                to="/home"
                onClick={() => {
                  toggleDrop();
                  toggle();
                }}
              >
                FAQs
              </SidebarLink>
            </NavItem>
            <NavItem>
              <SidebarLink
                to="/home"
                onClick={() => {
                  toggleDrop();
                  toggle();
                }}
              >
                Commission
              </SidebarLink>
            </NavItem>
          </DropDownContainer>
        </NavItem>
        <NavItem>
          <SidebarLink to="/home">Complaints</SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink to="/home">Contact Us</SidebarLink>
        </NavItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
