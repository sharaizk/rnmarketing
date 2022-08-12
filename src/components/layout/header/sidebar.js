import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  NavItem,
  SidebarLink,
} from "./Elements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <NavItem>
          <SidebarLink to="/home">Home</SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink to="/home">About</SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink to="/home">Services</SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink to="/home">FAQs</SidebarLink>
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
