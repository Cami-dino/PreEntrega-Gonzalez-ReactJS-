import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const categorias = ['maquillajes', 'disfraces'];

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <h1>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Tienda de Maquillajes y Disfraces</Link>
      </h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <Link to={`/category/${categoria}`} style={{ color: 'white', textDecoration: 'none' }}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
