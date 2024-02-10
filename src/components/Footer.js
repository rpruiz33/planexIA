import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className='p1'>© 2024 PlanexIA. Todos los derechos reservados.</p>
      <div className="container">
        <div className="row">
          <div className='left'>
            <img src="planexia.png" alt="" className='logo123' />
            <div className="title-footer">
              <a className='contact'>Contactos y Redes Sociales</a>
            </div>
         
            <div className="address-icon">
              <i className="fa fa-envelope-square"></i>
              <a className="a1" href="mailto:info@planexia.com"> : info@planexia.com</a>
            </div>
            <br></br>
            <div className="social-icons">
              <a className="icon1" href="https://www.facebook.com/tupagina" target="_blank"><i className="fa fa-facebook"></i></a>
              <br></br>
              <br></br>
              <a className="icon2"href="https://www.instagram.com/tupagina" target="_blank"><i className="fa fa-instagram"></i></a>
              <br></br>
              <br></br>
              <a className="icon3"href="https://www.linkedin.com/tupagina" target="_blank"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>

          <div className="col-sm-3 col-xs-12  col-sm-offset-5 text-center" style={{ marginTop: '10px' }}>
            <div className='footer1'>
              <span>
                <small>
                  <a href="/about">Acerca de nosotros</a>
                  <br />
                  <a href="/services">Servicios</a>
                  <br />
                  <a href="/contact">Contacto</a>
                  <br />
                  <a href="/faq">Preguntas Frecuentes</a>
                  <br />
                  <br />
                  <a href="/privacy-policy">Política de Privacidad</a>
                  <br />
                  <a href="/terms-of-service">Términos de Servicio</a>
                  
                </small>{' '}
              </span>
            </div>
          </div>
        </div>

       
      </div>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <a href="https://api.whatsapp.com/send?phone=5491138833433" className="float" target="">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </footer>
  );
};

export default Footer;
