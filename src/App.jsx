import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <NavBar />
      
      {/* Configuración de rutas */}
      <Routes>
        {/* Página principal con todos los productos */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />}
        />

        {/* Productos por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Explora nuestros productos" />}
        />

        {/* Detalle de un producto */}
        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

        {/* Página de checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>
    </div>
  );
};

export default App;
