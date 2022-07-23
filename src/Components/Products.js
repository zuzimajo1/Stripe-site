import React from "react";

export const Products = ({onMouseEnterProduct,onMouseLeaveProduct}) => {
  return (
    <li
      className="products-class"
     onMouseEnter={onMouseEnterProduct}
     onMouseLeave={onMouseLeaveProduct}
    >
      Products
    </li>
  );
};
