import { Link } from 'react-router-dom';
import { useAppContext } from '../../Contex/Contex';
import './Item.css';

function Item({ producto }) {
    if (!producto || !producto.id) {
        return <p className="error-message">⚠️ Producto no disponible</p>;
    }

    const { id, nombre, precio, stock, imagen } = producto;
    const { agregarAlCarrito } = useAppContext();
    const agotado = stock === 0;

    console.log("Producto recibido:", producto);
    console.log("Imagen cargada para:", nombre, "➡️", imagen);

    return (
        <div className="card p-4">
            {}
            {imagen ? (
                <img src={imagen} alt={nombre} className="producto-imagen" />
            ) : (
                <p className="error-message">⚠️ Imagen no disponible</p>
            )}
            
            <h3 className="card-header">{nombre}</h3>
            <h5 className="card-body">Precio: ${precio}</h5>
            <p aria-live="polite">
                {agotado ? "⛔ Producto agotado" : `Quedan ${stock} disponibles`}
            </p>

            <button
                className="btn btn-secondary my-2"
                onClick={() => agregarAlCarrito(producto, 1)}
                disabled={agotado}
                aria-label={`Agregar ${nombre} al carrito`}
            >
                {agotado ? "Sin stock" : "Agregar al carrito"}
            </button>

            <Link to={`/detalle/${id}`}>
                <button className="btn btn-secondary my-2">Ver detalle</button>
            </Link>
        </div>
    );
}

export default Item;
