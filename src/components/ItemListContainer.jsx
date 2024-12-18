import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncmock";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((data) =>
      setProduct(data.find((item) => item.id === id))
    );
  }, [id]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
