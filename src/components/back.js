import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FontAwesoneIcon = () => {
  return (
    <>
      <Link to={`/`} className="service-link">
        <FontAwesomeIcon icon={faBackward} size="2x" color='black'/>
      </Link>
    </>
  );
};

export default FontAwesoneIcon;
