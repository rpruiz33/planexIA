import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './FontAwesoneIcon.css';

const FontAwesoneIcon = () => {
  return (
    <>
    
     <FontAwesomeIcon icon={faLinkedin}size="2x" style={{ color: 'black' ,     margin: '0px -101px 0px -99px'}}/>
    
   
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black',         margin: '6px -50px 5px -43px'}}/>
    
      
   
    <FontAwesomeIcon icon={faSquareInstagram} size="2x" style={{ color: 'black', margin: '0px -10px 0px 0px}'}}/>
      
  
    </>
  );
};

export default FontAwesoneIcon;
