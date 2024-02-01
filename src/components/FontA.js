import { faFacebook, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontAwesoneIcon.css';

const icono2 = () => {
  return (
    <>
      <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'black', margin: '0px -101px 0px -99px' }} />

      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        style={{
          color: 'black',
          margin: '6px -50px 5px 63px',
          '@media (max-width: 1433px)': {
            margin: '6px -87px 5px 39px',
          },
        }}
      />

      <FontAwesomeIcon
        icon={faSquareInstagram}
        size="2x"
        style={{
          color: 'black',
          margin: '0px -10px 0px 0px',
          '@media (max-width: 1535px)': {
            margin: '0px 0px 0px 0px',
          },
        }}
      />
    </>
  );
};

export default icono2
