import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(prod, cantidad) {
        if (!prod || !prod.id) {
            console.error("Error: El producto no tiene un ID válido:", prod);
            return;
        }

        const nuevoProducto = { ...prod, cantidad };

        setCarrito((prevCarrito) =>
            prevCarrito.some(el => el.id === prod.id)
                ? prevCarrito.map(el => (el.id === prod.id ? { ...el, cantidad: el.cantidad + cantidad } : el))
                : [...prevCarrito, nuevoProducto]
        );

        console.log("Producto agregado al carrito:", nuevoProducto);
    }

    return (
        <AppContext.Provider value={{ carrito, setCarrito, agregarAlCarrito }}>
            {children}
        </AppContext.Provider>
    );
};


