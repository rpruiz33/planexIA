import React from 'react';
import Back from './back'
import './ServiceDetail.css';
const Service1 = () => {
  return (
    <div className='service-detail'>
         <Back/>
      <h2 >Servicio Empresarial</h2>
      <p >Asesoramiento en finanzas y gestión económica.</p>
      <p >Ofrecemos soluciones personalizadas para el crecimiento de tu empresa.</p>
    </div>
  );
};

export default Service1;