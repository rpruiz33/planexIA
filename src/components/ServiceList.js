import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceList.css';

const ServiceList = () => {
  const services = [
    { id: 1, name: '- Empresarial' },
    { id: 2, name: '- Financiera' },
    { id: 3, name: '- Agropecuaria' },
    { id: 4, name: '- Impexpo' },
    { id: 5, name: '- ERP && CRM' },
    { id: 6, name: '- Seguimiento e indicadores' },
  ];

  return (
    <div>
      <h2>Nuestros Servicios</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <Link to={`/service/${service.id}`} className="service-link">
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
