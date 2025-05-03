import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useAppContext } from '../../Contex/Contex';

function ItemDetail({ producto, volverAlInicio }) {
    const [contador, setContador] = useState(1);
    const { agregarAlCarrito } = useAppContext();
    const [error, setError] = useState(null);

    if (!producto || !producto.id) {
        return <p className="error-message">⚠️ Producto no disponible</p>;
    }

    const { nombre, precio, categoria, descripcion, stock } = producto;

    function handleAgregarAlCarrito() {
        if (stock === 0) {
            setError("Este producto está agotado.");
            return;
        }

        const nuevoProducto = { ...producto, cantidad: contador };
        agregarAlCarrito(nuevoProducto);
        console.log("Agregado al carrito:", nuevoProducto);
        setContador(1);
    }

    return (
        <div className="card p-4">
            <h3 className="card-header">{nombre}</h3>
            <div className="card-body">
                <h5>Precio: <b>${precio}</b></h5>
                <h5>Categoría: <b>{categoria ? categoria.toUpperCase() : "Sin categoría"}</b></h5>
                <p><b>{descripcion}</b></p>
                <p>Quedan <b>{stock} disponibles</b></p>

                {error && <p className="error-message">{error}</p>}

                <ItemCount 
                    stock={stock} 
                    contador={contador} 
                    setContador={(valor) => {
                        if (valor >= 1 && valor <= stock) {
                            setContador(valor);
                        }
                    }} 
                />

                <button
                    className="btn btn-secondary my-2"
                    onClick={handleAgregarAlCarrito}
                    disabled={stock === 0}
                >
                    {stock === 0 ? "Sin stock" : "Agregar al carrito"}
                </button>
                
                <button className="btn btn-secondary my-2" onClick={volverAlInicio}>
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}

export default ItemDetail;
