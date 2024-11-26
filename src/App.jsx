import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import Item from './components/Item';
import Category from './components/Category';

const App = () => {
  const [productos] = useState([
    { id: 1, nombre: 'Maquillaje Artístico', categoria: 'maquillajes', precio: 15.99 },
    { id: 2, nombre: 'Disfraz de Vampiro', categoria: 'disfraces', precio: 49.99 },
    { id: 3, nombre: 'Sombras de Fantasía', categoria: 'maquillajes', precio: 25.50 },
    { id: 4, nombre: 'Disfraz de Pirata', categoria: 'disfraces', precio: 39.99 }
  ]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalogo productos={productos} />} />
        <Route path="/item/:id" element={<Item productos={productos} />} />
        <Route path="/category/:categoryId" element={<Category productos={productos} />} />
      </Routes>
    </Router>
  );
};

export default App;
