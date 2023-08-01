import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

const SingleNavLink = ({ categoryName, childOptions }) => {
  const [showChildLinks, setShowCHildLinks] = useState(false);

  return (
    <>
      <div className="NavLinkContainer">
        <div className="headerLink">
          <li className="haeding-Link">
            <a
              onMouseEnter={() => setShowCHildLinks(true)}
              onMouseLeave={() => setShowCHildLinks(false)}
              href="http://"
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
                <div className="child-list">
                  <a href="http://">{childCategory}</a>
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
