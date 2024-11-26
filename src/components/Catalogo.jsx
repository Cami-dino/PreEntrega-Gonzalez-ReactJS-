import React from 'react';
import { Link } from 'react-router-dom';

const Catalogo = ({ productos }) => {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/item/${producto.id}`}>{producto.nombre} - ${producto.precio}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;
