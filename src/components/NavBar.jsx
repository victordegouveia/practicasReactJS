import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Mi Tienda</div>
      <ul style={styles.links}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
};

export default NavBar;
