
import React from "react";

export const Company = ({ onMouseEnterCompany, onMouseLeaveCompany}) => {
  return (
    <li
      className="company-class"
        onMouseEnter={onMouseEnterCompany}
        onMouseLeave={onMouseLeaveCompany}
    >
      Company
    </li>
  );
};
