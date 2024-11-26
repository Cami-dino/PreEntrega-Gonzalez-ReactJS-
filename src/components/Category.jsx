import React from 'react';
import { useParams } from 'react-router-dom';

const Category = ({ productos }) => {
  const { categoryId } = useParams(); // Captura la categoría desde la URL
  const productosFiltrados = productos.filter((prod) => prod.categoria === categoryId);

  return (
    <div>
      <h1>Productos en la Categoría: {categoryId}</h1>
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            <p>{producto.nombre} - ${producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
