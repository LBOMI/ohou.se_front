import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

const PrevArrow = (props) => {
  const {onClick, currentSlide} = props;

  // 첫 번째 슬라이드에서는 숨기기
  if (currentSlide === 0) return null;

    return (
    <PrevArrowButton>
        <button
            onClick={onClick}
            type='button'
        >
        <span><FontAwesomeIcon icon={faChevronLeft} /></span>
        </button>
    </PrevArrowButton>
    );
};

const PrevArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 0%;
  z-index: 3000;
  cursor: pointer; 

  button {
    margin: 0;
    border: none;
    background: none;
    font: inherit;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    box-sizing: border-box;
    text-align: center;
    color: #ffffff;
    padding: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 24px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 5px rgba(63, 71, 77, 0.15);
    cursor: pointer; 
  }

  span {
    display: inline-block;
    font-size: 24px;
    line-height: 1;
    color: #2F3438;
    cursor: pointer; 
  }
`


export default PrevArrow;