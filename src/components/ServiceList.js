import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceList.css';

const ServiceList = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const servicesRef = useRef([]);

  const services = [
    { id: 1, name: 'Empresarial' },
    { id: 2, name: 'Financiera' },
    { id: 3, name: 'Agropecuaria' },
    { id: 4, name: 'Impexpo' },
    { id: 5, name: 'ERP && CRM' },
    { id: 6, name: 'Seguimiento e indicadores' },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setTimeout(() => {
            setVisibleServices(prevVisibleServices => [...prevVisibleServices, id]);
          }, 1000); // Cambia este valor para ajustar el tiempo de retraso
        }
      });
    }, options);

    servicesRef.current.forEach(serviceRef => {
      observer.observe(serviceRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Oswald ,sans-serif' }}>
      <h2>Nuestros Servicios</h2>
      {services.map(service => (
        <nav key={service.id}>
          <div
            ref={el => (servicesRef.current[service.id] = el)}
            data-id={service.id}
            style={{ opacity: visibleServices.includes(service.id) ? 1 : 0, transition: 'opacity 0.5s' }}
          >
            <Link to={`/service/${service.id}`} className="service-link">
              {service.name}
            </Link>
          </div>
        </nav>
      ))}
    </div>
  );
};

export default ServiceList;
