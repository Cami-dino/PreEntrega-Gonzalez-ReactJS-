import React from 'react';
import { useParams } from 'react-router-dom';

const Item = ({ productos }) => {
  const { id } = useParams(); // Captura el ID desde la URL
  const producto = productos.find((prod) => prod.id === parseInt(id)); // Busca el producto por ID

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default Item;
