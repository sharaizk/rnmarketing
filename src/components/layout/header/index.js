import React, { useState } from "react";
import Nav from "./navbar";
import Sidebar from "./sidebar";
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <header>
      <Nav isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;
