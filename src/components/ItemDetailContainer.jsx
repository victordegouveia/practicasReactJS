import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productId } = useParams(); // Obtiene el ID del producto de la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
    // Simulación de llamada asíncrona para obtener los detalles del producto
    const fetchProduct = new Promise((resolve) => {
        setTimeout(() => {
        const productDetails = { id: productId, name: "Producto Detallado", description: "Descripción del producto" };
        resolve(productDetails);
        }, 1000);
    });

    fetchProduct.then((data) => setProduct(data));
    }, [productId]);

    return (
    <div>
        {product ? (
        <>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button>Agregar al carrito</button>
        </>
        ) : (
        <p>Cargando detalles del producto...</p>
        )}
    </div>
    );
};

export default ItemDetailContainer;
