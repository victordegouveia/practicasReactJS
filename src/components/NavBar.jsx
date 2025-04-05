import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Mi Tienda</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#products">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
            </li>
            </ul>
            <CartWidget />
        </div>
        </div>
    </nav>
);
};

export default NavBar;
