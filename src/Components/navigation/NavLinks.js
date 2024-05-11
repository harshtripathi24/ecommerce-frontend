/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

import { GoChevronDown } from "react-icons/go";

import "./Navlinks.css";
import SingleNavLink from "./SingleNavLink";

const ProductLinks = [
  {
    id: 1,
    categoryName: "Most Selling",
    childOptions: [
      "Psychology of Money",
      "Think Fast and Slow ",
      "Heritage",
      "Love Unscripted",
    ],
  },

  {
    id: 2,
    categoryName: "Self Help",
    childOptions: [
      "Psychology Of Money",
      "Eat that Frog",
      "Thinking Fast and Slow",
      "Think and Grow Rich",
    ],
  },
  {
    id: 3,
    categoryName: "Money Management ",
    childOptions: [
      "Psychology Of Money",
      "Think and Grow Rich",
      "Range",
      "Thinking Fast and Slow",
    ],
  },
  {
    id: 4,
    categoryName: "Fantasy Novels",
    childOptions: [
      "Woven in Moonlight",
      "Perused by a Dragon",
      "Heritage",
      "The Chaos of Stars",
    ],
  },
  {
    id: 5,
    categoryName: "SciFi Novel",
    childOptions: [
      "Shadow Land",
      "Dance with the Dead",
      "Secret and Lies",
      "The Sleep Walkers",
    ],
  },
  {
    id: 6,
    categoryName: "Horror Books",
    childOptions: [
      "Dance with the Dead",
      "Black Forest",
      "The Last Chance Hotel",
      "House of Furies",
    ],
  },
  {
    id: 7,
    categoryName: "Thriller",
    childOptions: [
      "Black Forest",
      "The Last Chance Hostel",
      "The Sleep Walker",
      "Dance with the Dead",
    ],
  },
  {
    id: 8,
    categoryName: "Romance",
    childOptions: ["Love Unscripted", "It Ends With Us"],
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
