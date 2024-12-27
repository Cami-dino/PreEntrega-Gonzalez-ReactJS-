import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
