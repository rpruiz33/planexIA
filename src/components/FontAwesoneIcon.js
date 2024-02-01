import { faFacebook, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontAwesoneIcon.css';

const FontAwesoneIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon icon-linkedin" />

      <FontAwesomeIcon icon={faFacebook} size="2x" className="icon icon-facebook" />

      <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="icon icon-instagram" />
    </>
  );
};

export default FontAwesoneIcon;
