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
        {ProductLinks.map((category, index) => {
          return <SingleNavLink key={category.id} {...category} />;
        })}
      </>
    );
  } else {
    return (
      <>
        {ProductLinks.map((category, index) => {
          return (
            <div className="navLinks" key={index}>
              <ul>
                <li className="headerLink">
                  <a href="http://">{category.categoryName}</a>
                  <button className="expand">
                    <GoChevronDown id="down-icon" />
                  </button>

                  {category.childOptions.map((childCategory, index) => {
                    return (
                      <ul>
                        <li className="child-list">
                          <a href="http://">{childCategory}</a>
                        </li>
                      </ul>
                    );
                  })}
                </li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
};

export default NavLinks;
