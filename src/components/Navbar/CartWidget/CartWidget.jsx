import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from '/src/Contex/Contex.jsx';

function CartWidget() {
    const { carrito } = useAppContext();
    const cantidad = carrito.length > 0 ? carrito.length : 0;

    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cantidad}</span>
        </div>
    );
}

export default CartWidget;
