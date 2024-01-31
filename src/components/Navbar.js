
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <><header className="App-header" >
          <img src="/planexia.png" alt="Logo de la aplicación" className="App-logo" />
          <h1>Servicios de Consultoría Estratégica</h1>
          <p>Bienvenido a nuestra plataforma de consultoría estratégica.</p>
      </header><nav>
              <Link to="/">Servicios</Link>
              <Link to="/contact">Contacto</Link>
              <Link to="/product/123">Producto</Link>
          </nav></>
  );
};

export default Navbar;
