import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceList.css';
import { NavLink } from 'react-router-dom';

const ServiceList = () => {
  const services = [
    { id: 1, name: 'Empresarial' },
    { id: 2, name: 'Financiera' },
    { id: 3, name: 'Agropecuaria' },
    { id: 4, name: 'Impexpo' },
    { id: 5, name: 'ERP && CRM' },
    { id: 6, name: 'Seguimiento e indicadores' },
  ];

  // Dividir los servicios en dos grupos
  const firstGroup = services.slice(0, 3);
  const secondGroup = services.slice(3);

  return (
<>
      <NavLink to="" className='Home'>
        <img src="/desde2023.png" alt=""  className='servicios'/>
      </NavLink>
      
      {/* Mostrar el primer grupo de servicios */}
      <div className="HomeContainer" style={{ marginTop: '10%', marginBottom:'10%',margin: '8% 4% 26% 3%' }}>
      <div className="service-group">
         
        {firstGroup.map(service => (
          <nav key={service.id}>
            <Link to={`/service/${service.id}`} className="service-link">
              {service.name}
            </Link>
          </nav>
        ))}
      </div>
      
      {/* Mostrar el segundo grupo de servicios */}
      <div className="service-group">
        {secondGroup.map(service => (
          <nav key={service.id}>
            <Link to={`/service/${service.id}`} className="service-link">
              {service.name}
            </Link>
          </nav>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServiceList;
