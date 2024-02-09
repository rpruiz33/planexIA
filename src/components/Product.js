import React from 'react';
import './Product.css';
const Product = ({ productId, productName }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <p>DOLIBARR 18.0.4 ERP Y CRM</p>
      <img src="/dolibarr.png" alt="Logo de la aplicación" className="App-logo2" />
      <p>Soluciones ERP y CRM para su su organizacion
      </p>
    </div>
  );
};

export default Product;
