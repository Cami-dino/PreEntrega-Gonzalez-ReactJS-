import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", textAlign: "center" }}>
      <img src={product.img} alt={product.name} style={{ maxWidth: "100%" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;

