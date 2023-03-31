/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

import { GoChevronDown } from "react-icons/go";

import "./Navlinks.css";
import SingleNavLink from "./SingleNavLink";

const ProductLinks = [
  {
    id: 1,
    categoryName: "Self Help",
    childOptions: ["Top Seller", "Habits", "Investment", "Life Management"],
  },

  {
    id: 2,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    id: 3,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    id: 4,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    id: 5,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    id: 6,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    id: 7,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    id: 8,
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
];

const NavLinks = () => {
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);

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
        <div className="navLinks">
          <ul>
            {ProductLinks.map((category, index) => {
              return <SingleNavLink key={category.id} {...category} />;
            })}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        {ProductLinks.map((category, index) => {
          return (
            <div className="navLinks" key={index}>
              <ul>
                <ul className="headerLink">
                  <li className="heading-Link">
                    <a href="http://">{category.categoryName}</a>
                    <button className="expand">
                      <GoChevronDown id="down-icon" />
                    </button>
                  </li>

                  {category.childOptions.map((childCategory, index) => {
                    return (
                      <ul>
                        <li className="child-list">
                          <a href="http://">{childCategory}</a>
                        </li>
                      </ul>
                    );
                  })}
                </ul>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
};

export default NavLinks;
