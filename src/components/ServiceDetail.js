import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import { NavLink } from 'react-router-dom';
import Back from './back';

const ServiceDetail = () => {
  const { id } = useParams();

  const serviceDetails = {
    1: {
      name: 'Servicio Empresarial',
      description: 'Asesoramiento en finanzas y gestión económica.',
      additionalDetails: 'Ofrecemos soluciones personalizadas para el crecimiento de tu empresa.'
    },
    2: {
      name: 'Servicio Financiero',
      description: 'Asesoramiento y servicios financieros para empresas y particulares.',
      additionalDetails: 'Gestión de inversiones, planificación financiera y más.'
    },
    3: {
      name: 'Servicio Agropecuario',
      description: 'Asesoramiento integral para el sector agropecuario.',
      additionalDetails: 'Optimización de procesos, gestión de recursos y más.'
    },
    4: {
      name: 'Servicio Impexpo',
      description: 'Asesoramiento en comercio internacional y exportaciones.',
      additionalDetails: 'Facilitamos el proceso de importación y exportación de productos.'
    },
    5: {
      name: 'ERP && CRM',
      description: 'Soluciones integradas de planificación de recursos empresariales y gestión de relaciones con clientes.',
      additionalDetails: 'Mejora la eficiencia operativa y la interacción con tus clientes.'
    },
    6: {
      name: 'Seguimiento e Indicadores',
      description: 'Desarrollo de sistemas de seguimiento y medición de indicadores clave.',
      additionalDetails: 'Obtén información valiosa para la toma de decisiones estratégicas.'
    },
  };

  const service = serviceDetails[id];

  return (
    <div className="service-detail">
      <NavLink to="/">
        <Back />
      </NavLink>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p>{service.additionalDetails}</p>
    </div>
  );
};

export default ServiceDetail;
