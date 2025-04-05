import React from "react";
import { FaShoppingCart } from "react-icons/fa"; 

const CartWidget = () => {
    return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaShoppingCart size={24} style={{ marginRight: "5px" }} /> {}
      <span>3</span> {}
    </div>
);
};

export default CartWidget;
