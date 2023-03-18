import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";

const SingleNavLink = ({ categoryName, childOptions }) => {
  const [showChildLinks, setShowCHildLinks] = useState(false);

  return (
    <div className="navLinks">
      <ul>
        <li className="headerLink">
          <a href="http://">{categoryName}</a>
          <button
            className="expand"
            onClick={() => setShowCHildLinks(!showChildLinks)}
          >
            <GoChevronDown id="down-icon" />
          </button>

          {childOptions.map((childCategory, index) => {
            return (
              <ul>
                {showChildLinks && (
                  <li className="child-list">
                    <a href="http://">{childCategory}</a>
                  </li>
                )}
              </ul>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default SingleNavLink;
