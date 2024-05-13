import React, { useContext, useEffect, useState } from "react";

import { GoChevronDown } from "react-icons/go";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import "./DeskNav.css";
import NavLinks from "./NavLinks";
import { useGlobalContext } from "../../Utilities/Context/Context";
import { Link } from "react-router-dom";

export const deskNavlinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "FAQ",
    url: "/FAQ",
  },

  {
    name: "Contact Us",
    url: "/contact_us",
  },

  {
    name: "About Us",
    url: "/about_us",
  },

  {
    name: "Privacy",
    url: "/privacy_policy",
  },
];

const DeskNav = () => {
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);
  // const [isNavOpen, setIsNavOpen] = useState(true);

  const { isNavOpen, openNav, closeNav } = useGlobalContext();

  const navHandler = () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  const detectWindowWidth = () => {
    setWindoWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowWidth);

    return () => {
      window.removeEventListener("resize ", detectWindowWidth);
    };
  }, [windoWidth]);

  if (windoWidth > 1232) {
    return (
      <>
        <div className="deskNav">
          <div className="leftNav">
            <div className="navButton">
              <button className="category-button" onClick={navHandler}>
                <FaBars className="navIcon-hamburger" />{" "}
                <span>Browse Categories </span>
                <GoChevronDown className="navIcon-down" />
              </button>

              <div className={`navBox ${isNavOpen ? "" : "hideNav"}`}>
                <NavLinks />
              </div>
            </div>
            <div className="navSupport">
              <div className="customerSupport">
                <FaHeadphonesAlt className="support-icon" />
                <div className="support-text">
                  <span className="support">Free Support 24x7</span>
                  <p className="support-number">+91-830-430-3001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rightNav">
            {deskNavlinks.map((link, index) => {
              return (
                <React.Fragment key={index}>
                  <Link to={`${process.env.REACT_APP_BASE_URL}${link.url}`}>
                    {link.name}
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="customerSupport">
        <FaHeadphonesAlt className="support-icon" />
        <div className="support-text">
          <span className="support">Free Support 24x7</span>
          <p className="support-number">+91-830-430-3001</p>
        </div>
      </div>
    );
  }
};

export default DeskNav;
