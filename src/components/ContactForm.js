import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import SuccessMessage from './SuccessMessage';

const ContactForm = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y99ax2q', 'template_661dwxp', form.current, {
        publicKey: 'FoFhSWkjyUnaPyFKW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true); // Establece el estado de éxito en verdadero después de enviar el formulario
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  // Renderiza el formulario solo si isSuccess es falso
  const renderForm = () => {
    if (!isSuccess) {
      return (
        <form ref={form} onSubmit={sendEmail}>
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
            <input className='email2' id="message" name="message" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  return (
    <div className="contact-form-container">
      {/* Renderiza el formulario o el componente SuccessMessage dependiendo del estado de isSuccess */}
      {isSuccess ? <SuccessMessage /> : renderForm()}
    </div>
  );
};

export default ContactForm;
