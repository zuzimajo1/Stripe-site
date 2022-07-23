

import React from "react";

export const Developers = ({ onMouseEnterDeveloper, onMouseLeaveDeveloper }) => {
  return (
    <li
      className="developers-class"
      onMouseEnter={onMouseEnterDeveloper}
      onMouseLeave={onMouseLeaveDeveloper}
    >
      Developers
    </li>
  );
};
