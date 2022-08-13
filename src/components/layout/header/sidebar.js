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
          <SidebarLink
            onClick={() => {
              toggleDrop();
              toggle();
            }}
            to="/home"
          >
            Home
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggleDrop();
              toggle();
            }}
            to="/about"
          >
            About
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            to="/services"
            onClick={() => {
              toggleDrop();
              toggle();
            }}
          >
            Services
          </SidebarLink>
        </NavItem>
        <NavItem>
          <DropLink onClick={() => toggleDrop()}>
            FAQs <BiChevronDown size={17} />
          </DropLink>
          <DropDownContainer open={dropOpen}>
            <NavItem>
              <SidebarLink
                to="/faqs"
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
                to="/comissions"
                onClick={() => {
                  toggleDrop();
                  toggle();
                }}
              >
                Commissions
              </SidebarLink>
            </NavItem>
          </DropDownContainer>
        </NavItem>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggleDrop();
              toggle();
            }}
            to="/complaints-handling-procedure"
          >
            Complaints
          </SidebarLink>
        </NavItem>
        <NavItem>
          <SidebarLink
            onClick={() => {
              toggleDrop();
              toggle();
            }}
            to="/contact"
          >
            Contact Us
          </SidebarLink>
        </NavItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
