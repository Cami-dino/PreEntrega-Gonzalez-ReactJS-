import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import NavBar from '.scr/components/NavBar';
import ItemListContainer from '.scr/components/ItemListContainer';



function App() {
  const App = () => {
    return (
      <div>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </div>
    );
  };
}
export default App
