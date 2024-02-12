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
              <p className='contact'>Contactos y Redes Sociales</p>
            </div>
         
            <div className="address-icon">
              <i className="fa fa-envelope-square"></i>
              <p > : info@planexia.com</p>
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
        
                  
                </small>{' '}
              </span>
            </div>
          </div>
        </div>

       
      </div>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <div></div>
      <a className="color" href="https://api.whatsapp.com/send?phone=5491138833433" target="">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      
    </footer>
  );
};

export default Footer;
