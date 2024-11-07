
import React from 'react';
import Navbar from 'scr/Navbar.js';
import ItemListContainer from 'ItemListContainer';

function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenidos a Cosplay Zone!" />
        </div>
    );
}

export default App;
