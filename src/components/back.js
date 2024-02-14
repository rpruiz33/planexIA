import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FontAwesoneIcon = () => {
  return (
    <>
      <Link to={`/`} className="service-link2">
      <FontAwesomeIcon icon={faLeftLong} size="3x" color='black'/>
      </Link>
    </>
  );
};

export default FontAwesoneIcon;
