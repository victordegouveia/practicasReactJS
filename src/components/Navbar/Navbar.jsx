import { Link } from 'react-router-dom';
import CartWidget from '../Navbar/CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="/RopaVibe.png" alt="Logo RopaVibe" />
                <ul className="nav-bar-items">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/categoria/camisas">Camisetas</Link>
                    </li>
                    <li>
                        <Link to="/categoria/franelas">Franelas</Link>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
}

export default Navbar;

