import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/404";

// Importa los estilos globales
import './styles.css';

const App = () => {
  return (
    <Router>
      {/* Barra de navegación */}
      <NavBar />

      {/* Configuración de las rutas */}
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />} 
        />
        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer greeting="¡Explora nuestras categorías!" />} 
        />
        <Route 
          path="/product/:productId" 
          element={<ItemDetailContainer />} 
        />
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
