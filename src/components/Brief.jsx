import React from "react";

const Brief = ({ items }) => {
  return (
    <div>
      <h3>Resumen:</h3>
      {items.map((item) => (
        <p key={item.id}>
          {item.name} - {item.quantity} x ${item.price}
        </p>
      ))}
      <p>Total: ${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default Brief;
