import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-5">
            <div className="p-4 text-center bg-light rounded shadow">
                <h2>{greeting}</h2>
            </div>
        </div>
    );
};

export default ItemListContainer;
