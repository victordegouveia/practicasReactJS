import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/404";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Explora nuestras categorías!" />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
};

export default App;
