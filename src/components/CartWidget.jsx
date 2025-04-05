import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importa el ícono del carrito

const CartWidget = () => {
    return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaShoppingCart size={24} style={{ marginRight: "5px" }} /> {/* Ícono del carrito */}
      <span>3</span> {/* Número de ítems */}
    </div>
);
};

export default CartWidget;
