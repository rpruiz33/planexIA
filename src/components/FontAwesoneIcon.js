import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './FontAwesoneIcon.css';

const FontAwesoneIcon = () => {
  return (
    <>
    
     <FontAwesomeIcon icon={faLinkedin}size="2x" style={{ color: 'black' ,     margin: '0px -122px 0px -119px'}}/>
    
   
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black',     margin: '0px -99px 0px 0px'}}/>
    
      
   
    <FontAwesomeIcon icon={faSquareInstagram} size="2x" style={{ color: 'black', margin: '0px -99px 0px 0px'}}/>
      
  
    </>
  );
};

export default FontAwesoneIcon;
