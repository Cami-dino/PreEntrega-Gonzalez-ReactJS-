import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase";
import { db } from "../firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const productRef = collection(db, "products");
      const q = categoryId
        ? query(productRef, where("category", "==", categoryId))
        : productRef;

      const querySnapshot = await getDocs(q);
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
