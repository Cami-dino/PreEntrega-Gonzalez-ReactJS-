import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const categorias = ["maquillaje", "cosplay", "props"];

  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem", color: "white" }}>
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Tienda de Maquillajes y Disfraces
        </Link>
      </h1>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <Link to={`/category/${categoria}`} style={{ color: "white", textDecoration: "none" }}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
