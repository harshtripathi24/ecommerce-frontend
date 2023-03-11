/* eslint-disable array-callback-return */
import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";

import "./Navlinks.css";

const ProductLinks = [
  {
    categoryName: "Self Help",
    childOptions: ["Top Seller", "Habits", "Investment", "Life Management"],
  },

  {
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
    categoryName: "Novels",
    childOptions: [
      "Top Seller",
      "Harry Potter",
      "Roemntic",
      "Murder Mysteries",
    ],
  },
  {
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
  return (
    <>
      {ProductLinks.map((category, id) => {
        return (
          <>
            <div key={id} className="navLinks">
              <ul>
                <li className="headerLink">
                  <a href="http://">{category.categoryName}</a>
                  <button className="expand">
                    <GoChevronDown id="down-icon" />
                  </button>

                  {category.childOptions.map((childCategory) => {
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
            ;
          </>
        );
      })}
    </>
  );
};

export default NavLinks;
