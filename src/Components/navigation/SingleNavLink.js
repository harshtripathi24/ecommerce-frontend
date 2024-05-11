/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleNavLink = ({ categoryName, childOptions }) => {
  const [showChildLinks, setShowCHildLinks] = useState(false);

  const navigate = useNavigate();

  const categoryHandler = (value) => {
    navigate(`searched_page/${value}`);
    navigate(0);
  };

  return (
    <>
      <div className="NavLinkContainer">
        <div className="headerLink">
          <li className="haeding-Link">
            <a
              onMouseEnter={() => setShowCHildLinks(true)}
              onMouseLeave={() => setShowCHildLinks(false)}
              onClick={() => categoryHandler(categoryName)}
            >
              {categoryName}
            </a>
            <button
              className="expandButton"
              onMouseEnter={() => setShowCHildLinks(true)}
              onMouseLeave={() => setShowCHildLinks(false)}
              onClick={() => setShowCHildLinks(!showChildLinks)}
            >
              <FaAngleRight id="down-icon" />
            </button>
          </li>
        </div>

        {showChildLinks && (
          <div
            className="childLinkDiv"
            onMouseEnter={() => setShowCHildLinks(true)}
            onMouseLeave={() => setShowCHildLinks(false)}
          >
            {childOptions.map((childCategory, index) => {
              return (
                <div key={index} className="child-list">
                  <a onClick={() => categoryHandler(childCategory)}>
                    {childCategory}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SingleNavLink;
