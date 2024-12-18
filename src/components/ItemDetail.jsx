import React from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import AddItemButton from "./AddItemButton";

const ItemDetail = ({ product }) => {
    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            <img src={product.img} alt={product.name} style={{ maxWidth: "50%" }} />
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <ItemQuantitySelector stock={product.stock} />
                <AddItemButton />
            </div>
        </div>
    );
};

export default ItemDetail;
