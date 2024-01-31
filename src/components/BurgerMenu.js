// BurgerMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const services = [
    { id: 1, name: 'Empresarial' },
    { id: 2, name: 'Financiera' },
    { id: 3, name: 'Agropecuaria' },
    { id: 4, name: 'Impexpo' },
    { id: 5, name: 'ERP && CRM' },
    { id: 6, name: 'Seguimiento e indicadores' },
  ];

  return (
    <div className="burger-menu">
      <Link to="/Home">
        <img src="/planexia.png" alt="Logo de la aplicación" className="App-logo" />
      </Link>
      {services.map(service => (
        <Link key={service.id} to={`/service/${service.id}`}>
          {service.name}
        </Link>
      ))}
    </div>
  );
};

export default BurgerMenu;
