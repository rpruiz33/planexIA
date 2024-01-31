// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="App-header">
      <NavLink to="/Home" className='Home' >
        <img src="/planexia.png" alt="Logo de la aplicación" className="App-logo" />
      </NavLink>

      <div>
        <h1>Servicios de Consultoría Estratégica</h1>
        <p>Bienvenido a nuestra plataforma de consultoría estratégica.</p>
      </div>

      <nav>

      <NavLink to="/home">nosotros</NavLink>
        <NavLink to="/">Servicios</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <NavLink to="/product/123">Producto</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
