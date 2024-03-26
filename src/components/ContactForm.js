import React, { useState } from 'react';
import './ContactForm.css';
import SuccessMessage from './SuccessMessage';
const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append('name', e.target.name.value);
    formData.append('email', e.target.email.value);
    formData.append('message', e.target.message.value);

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        body: formData
      });
      
      // Verificar si la respuesta fue exitosa
      if (response.ok) {
        setIsSuccess(false); // Establecer el estado de éxito a true
      } else {
        setIsSuccess(true); // Si hay algún error en la respuesta, establecer el estado de éxito a false
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setIsSuccess(true); // Si hay un error al enviar los datos, establecer el estado de éxito a false
    }
  };

  let content;
  if (!isSuccess) {
    content = (
      <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/submit-form">
          <h2 className='con'>Contacto</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group1">
          <label htmlFor="message">Mensaje:</label>
          <textarea className='box' id="message" name="message" required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    );
  } else {
    content = (
      <div>
        <SuccessMessage />
      </div>
    );
  }

  return (
    <div className="contact-form-container" style={{ fontFamily: 'Oswald, sans-serif' }}>
    
      {content}
    </div>
  );
};

export default ContactForm;
