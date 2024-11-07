document.addEventListener("DOMContentLoaded", () => {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Cosplay Zone</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="#anime">Anime</a></li>
                        <li class="nav-item"><a class="nav-link" href="#videojuegos">Videojuegos</a></li>
                        <li class="nav-item"><a class="nav-link" href="#comics">Cómics</a></li>
                        <li class="nav-item"><a class="nav-link" href="#peliculas">Películas</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById("navbar").innerHTML = navbar;
});


import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cosplay Zone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link" href="#anime">Anime</a></li>
                        <li className="nav-item"><a className="nav-link" href="#videojuegos">Videojuegos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#comics">Cómics</a></li>
                        <li className="nav-item"><a className="nav-link" href="#peliculas">Películas</a></li>
                    </ul>
                    <CartWidget /> {/* Ícono del carrito */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
