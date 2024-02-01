import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './FontAwesoneIcon.css';

const FontAwesoneIcon = () => {
  return (
    <>
    
     <FontAwesomeIcon icon={faLinkedin}size="2x"  />
    
   
      <FontAwesomeIcon icon={faFacebook} size="2x" />
      
   
    <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
      
  
    </>
  );
};

export default FontAwesoneIcon;
