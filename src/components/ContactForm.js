
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="contact-form-container" style={{ fontFamily: 'Oswald ,sans-serif' }} >
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;

