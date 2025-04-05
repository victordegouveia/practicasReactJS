import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams(); 
    const [items, setItems] = useState([]);

    useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
        setTimeout(() => {
        const products = [
            { id: 1, name: "Producto 1", category: "categoría1" },
            { id: 2, name: "Producto 2", category: "categoría2" },
        ];
        resolve(products);
        }, 1000);
    });

    fetchProducts.then((data) => {
        if (categoryId) {
        setItems(data.filter((item) => item.category === categoryId));
        } else {
        setItems(data);
        }
    });
    }, [categoryId]);

    return (
    <div>
        <h2>{greeting}</h2>
        <ul>
        {items.map((item) => (
            <li key={item.id}>
            <a href={`/product/${item.id}`}>{item.name}</a>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default ItemListContainer;
