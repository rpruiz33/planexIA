import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './FontAwesoneIcon.css';

const FontAwesoneIcon = () => {
  return (
    <>
    
     <FontAwesomeIcon icon={faLinkedin}size="2x" style={{ color: '#0077B5' }} />
    
   
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877F2' }} />
      
   
    <FontAwesomeIcon icon={faSquareInstagram} size="2x" style={{ color: '#E4405F' }} />
      
  
    </>
  );
};

export default FontAwesoneIcon;
