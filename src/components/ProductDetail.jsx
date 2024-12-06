import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncmock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProducts().then((data) => {
            const foundProduct = data.find((item) => item.id === id);
            setProduct(foundProduct);
        });
    }, [id]);

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div style={{ padding: "1rem" }}>
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Descripción: {product.description}</p>
        </div>
    );
};

export default ItemDetailContainer;
