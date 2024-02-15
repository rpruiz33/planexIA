import React from 'react';
import { useParams } from 'react-router-dom';
import Service1 from './servicio-empresarial';
import Service2 from './servicio-financiero';
import Service3 from './servicioAgrpecuario';
import Service4 from './Impexpo';
import Service5 from './ERP&&CRM';
import Service6 from './Seguimeinto';

const ServiceDetail = () => {
  const { id } = useParams();

  let serviceComponent;

  switch (id) {
    case '1':
   
      serviceComponent = <Service1 />;
      break;
    case '2':
      serviceComponent = <Service2 />;
      break;
    case '3':
      serviceComponent = <Service3 />;
      break;
    case '4':
      serviceComponent = <Service4 />;
      break;
    case '5':
      serviceComponent = <Service5 />;
      break;
    case '6':
      serviceComponent = <Service6 />;
      break;
    default:
      serviceComponent = <div>Servicio no encontrado</div>;
      break;
  }

  return (
    <div>
      {serviceComponent}
    </div>
  );
};

export default ServiceDetail;
