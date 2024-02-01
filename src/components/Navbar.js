// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import MiIcono from './FontAwesoneIcon'
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

      <nav className='nav2' style={{ fontFamily: 'Ubuntu, sans-serif' }}>

      <NavLink to="/home">nosotros</NavLink>
        <NavLink to="/">Servicios</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <NavLink to="/product/123">Producto</NavLink>
        <MiIcono className="icon"/>
      </nav>
      
    </header>
  );
};

export default Navbar;
