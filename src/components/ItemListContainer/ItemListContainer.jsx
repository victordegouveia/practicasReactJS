import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { db } from "../../FireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoria } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const productosCollection = collection(db, "productos");
                const q = categoria ? query(productosCollection, where("categoria", "==", categoria)) : productosCollection;
                
                const querySnapshot = await getDocs(q);
                const items = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log("Productos obtenidos desde Firebase:", items);

                setProductos(items);
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setError("Hubo un problema al cargar los productos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoria]);

    if (loading) return <Loader />;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="container-productos">
            {productos.length > 0 ? (
                productos.map((prod) => <Item key={prod.id} producto={prod} />)
            ) : (
                <p className="empty-message">No hay productos disponibles en esta categoría.</p>
            )}
        </div>
    );
}

export default ItemListContainer;


