// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '2em', textAlign: 'center' }}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;