import { faSquareWhatsapp, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontAwesoneIcon.css';

const FontAwesoneIcon = () => {
  return (
    <>
   <a href="https://www.linkedin.com/in/planexia-s-a-3571b52b4/" target="" className="icon3">
        <FontAwesomeIcon icon={faLinkedin} size="1x" className="icon icon-instagram" />
      </a>



      <a href="https://www.instagram.com/" target="" className="icon3">
       
      <FontAwesomeIcon icon={faSquareInstagram} size="1x" className="icon icon-instagram" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5491138833433" className="icon3"target="">
      <FontAwesomeIcon icon={faSquareWhatsapp}  size="2
    1x" className="icon icon-instagram"/>
      </a>
     
    
    </>
  );
};

export default FontAwesoneIcon;
