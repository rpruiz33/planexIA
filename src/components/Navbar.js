// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import MiIcono from './FontAwesoneIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Agrega un efecto secundario para cerrar el menú cuando el tamaño de la pantalla cambia
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 340) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`App-header ${isOpen ? 'open' : ''}`}>
      <div className="navbar">
        <NavLink to="/Home" className='Home'>
          <img src="/planexia.png" alt="Logo de la aplicación" className="App-logo" />
        </NavLink>

        <div >
          <h1 classname="tam" style={{ fontFamily: 'Oswald, sans-serif' }}>Servicios de Consultoría Estratégica</h1>
          <p classname="tam" style={{ fontFamily: 'Oswald, sans-serif' }}>Bienvenido a nuestra plataforma de consultoría estratégica.</p>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`nav2 ${isOpen ? 'open' : ''}`} style={{ fontFamily: 'Oswald, sans-serif' }}>
          <NavLink to="/home">Nosotros</NavLink>
          <NavLink to="/">Servicios</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
          <NavLink to="/product/123">Producto</NavLink>
          <MiIcono className="icon" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
