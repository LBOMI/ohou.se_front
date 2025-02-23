import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'


const PrevArrow = ({ onClick }) => {
    return (
    <div  className='PrevArrow_button'>
        <button className='PrevArrow_button_b'
            onClick={onClick}
            type='button'
        >
        <span><FontAwesomeIcon icon={faChevronLeft} /></span>
        </button>
    </div>
    );
};

export default PrevArrow;