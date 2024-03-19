import React from 'react';
import './Product.css';
const Product = ({ productId, productName }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <p>ODOO 17 ERP Y CRM</p>
      <img src="/oddo-erp-crm-600x315-1.png" alt="Logo de la aplicación" className="App-logo2" />
      <p>Soluciones ERP y CRM para su empresa</p>
    </div>
  );
};

export default Product;
