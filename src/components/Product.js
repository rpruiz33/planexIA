import React from 'react';
import './Product.css';
const Product = ({ productId, productName }) => {
  return (
    <div className='HomeContainer12'>
      <h2 className='App-logo2'>{productName}</h2>
      <p className='ps'>ODOO 17 ERP Y CRM</p>
      <img src="/oddo-erp-crm-600x315-1.png" alt="Logo de la aplicación" className="App-logo23" />
      <p className='ps1'>Soluciones ERP y CRM para su empresa</p>
    </div>
  );
};

export default Product;
