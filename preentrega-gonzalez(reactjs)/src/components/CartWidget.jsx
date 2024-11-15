//src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5em', marginRight: '0.5em' }}>🛒</span>
      <span style={{ fontSize: '1em', fontWeight: 'bold' }}>3</span>
    </div>
  );
};

export default CartWidget;
