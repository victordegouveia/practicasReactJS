import './ItemCount.css';

function ItemCount({ stock, contador, setContador }) {
    function modificarContador(operacion) {
        setContador((prev) => {
            if (operacion === "+" && prev < stock) return prev + 1;
            if (operacion === "-" && prev > 1) return prev - 1;
            return prev;
        });
    }

    return (
        <div className="item-count-container">
            <div className="counter-controls">
                <button 
                    className="btn btn-secondary" 
                    onClick={() => modificarContador("-")} 
                    disabled={contador <= 1}
                    aria-label="Disminuir cantidad"
                >
                    -
                </button>
                
                <p id="contador" aria-live="polite">Cantidad: {contador}</p>
                
                <button 
                    className="btn btn-secondary" 
                    onClick={() => modificarContador("+")} 
                    disabled={contador >= stock}
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>
            </div>

            {contador === stock && (
                <p className="stock-warning">¡Stock máximo alcanzado!</p>
            )}
        </div>
    );
}

export default ItemCount;
