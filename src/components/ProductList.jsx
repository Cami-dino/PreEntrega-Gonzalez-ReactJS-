import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../asyncmock";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();
        fetchData.then((data) => setProducts(data));
    }, [categoryId]);

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Catálogo de Productos</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ddd", padding: "1rem", width: "200px" }}>
                        <img src={product.img} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                        <h2>{product.name}</h2>
                        <p>Precio: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>
                            <Link to={`/item/${product.id}`}>Ver detalles</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
