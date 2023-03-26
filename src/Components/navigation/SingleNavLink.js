import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";

const SingleNavLink = ({ categoryName, childOptions }) => {
  const [showChildLinks, setShowCHildLinks] = useState(false);

  return (
    <ul className="headerLink">
      <li className="haeding-Link">
        <a href="http://">{categoryName}</a>
        <button
          className="expand"
          onClick={() => setShowCHildLinks(!showChildLinks)}
        >
          <GoChevronDown id="down-icon" />
        </button>
      </li>

      {showChildLinks && (
        <ul>
          {childOptions.map((childCategory, index) => {
            return (
              <li className="child-list">
                <a href="http://">{childCategory}</a>
              </li>
            );
          })}
        </ul>
      )}
    </ul>
  );
};

export default SingleNavLink;
