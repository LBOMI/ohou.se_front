import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const NextArrow = ({ onClick }) => {
    return (
    <div  className='NextArrow_button'>
        <button
            onClick={onClick}
            type='button'
        >
        <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </button>
    </div>
    );
};

export default NextArrow;