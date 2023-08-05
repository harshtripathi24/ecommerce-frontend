import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import BackDrop from "./BackDrop";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";

import "./MainNavigation.css";
const MainNaviagtion = () => {
  const [isDrawerIsOpen, setIsDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerIsOpen(false);
  };

  return (
    <>
      {isDrawerIsOpen && <BackDrop onClick={closeDrawer} />}
      {isDrawerIsOpen && (
        <SideDrawer
          className="sideDrawer"
          onClick={closeDrawer}
          show={isDrawerIsOpen}
        >
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <div className="nav-button">
        <button onClick={openDrawer}>
          <AiOutlineMenu />
        </button>
      </div>
    </>
  );
};

export default MainNaviagtion;
