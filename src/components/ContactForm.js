import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [response, setResponse] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

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
      const data = await response.json();
      console.log('Datos recibidos:', data);
      setResponse(data);
      setMessageSent(true); // Cambiar el estado a true cuando el formulario se envíe correctamente
     
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  console.log('Estado de messageSent:', messageSent); 
  return (
    <div className="contact-form-container" style={{ fontFamily: 'Oswald, sans-serif' }}>
      <h2 className='con'>Contacto</h2>
      {!messageSent ? (
        <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/submit-form">
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
     
      ) : (
        <div >
          <p>¡Tu mensaje ha sido enviado con éxito!</p>
          {/* Puedes agregar aquí cualquier otra información o acción que desees */}
        </div>
      )}

    </div>
  );
};

export default ContactForm;
