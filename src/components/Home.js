import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="HomeContainer" style={{ marginTop: '80px' }}>
      <h2 className='black'>PLANEXIA</h2>
      <h2> de Hnos. Ruiz Pereira</h2>
      <p className='p1'>
        Somos una empresa joven con la misión de brindar soluciones estratégicas empresariales y mejorar la
        toma de decisiones. Nuestra visión es lograr el cumplimiento y la maximización de los objetivos de nuestros clientes.
        Nuestros valores parten de la honestidad y la transparencia, buscamos la excelencia en los resultados y
        estamos comprometidos con la calidad de todas las fases del trabajo. Abiertos a la innovación y
        totalmente orientados a las necesidades del cliente. Consultoría estratégica:
        - Empresarial
        - Financiera
        - Agropecuaria
        - Impexpo
        - ERP
        - Software de gestión estratégica
        - Seguimiento e indicadores
      </p>
   
      <div className="div" style={{ fontfamily: 'Josefin Sans ,sans-serif'}}>
        <div className='div1'>
          <h2>Lic. Luis P. Ruiz Pereira</h2>
          <h3>Socio gerente</h3>
          <img src="/lucho.jpeg" alt="Foto de Luis P. Ruiz Pereira" className="perfil" />
          <a href="https://www.linkedin.com/in/luis-paulo-ruiz-pereira-60b766230/" target="">
            <img src="/logotipo-cuadrado-linkedin-aislado-sobre-fondo-blanco_469489-892.png" alt="Logo de LinkedIn" className="linkedin-logo" />
          </a>
        </div>
        <div>
          <h2>Roberto A. Ruiz Pereira</h2>
          <h3>Socio gerente</h3>
          <img src="/beto.png" alt="Foto de Roberto A. Ruiz Pereira" className="perfil" />
          <a href="https://www.linkedin.com/in/roberto-andres-ruiz-pereira-9933241a6/" target="">
            <img src="/logotipo-cuadrado-linkedin-aislado-sobre-fondo-blanco_469489-892.png" alt="Logo de LinkedIn" className="linkedin-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
