import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import styled from "styled-components";

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

function SimpleSlider() {
    const [currentIndex, setCurrentIndex ] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: isHovered, // 마우스를 올렸을 때만 화살표 표시
      prevArrow: isHovered ? <PrevArrow/> : null,
      nextArrow: isHovered ? <NextArrow/> : null,
      afterChange: (current) => setCurrentIndex(current),
    };
  
    return (
      <Container 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
                  <StyledSlider {...settings}>
                    <div>
                      <img src='AD\광고1.jpeg'></img>
                    </div>
                    <div>
                      <img src='AD\광고2.avif'></img>
                    </div>
                    <div>
                      <img src='AD\광고3.avif'></img>
                    </div>
                    <div>
                      <img src='AD\광고4.avif'></img>
                    </div>
                    <div>
                      <img src='AD\광고5.avif'></img>
                    </div>
                    <div>
                      <img src='AD\광고6.avif'></img>
                    </div>
                  </StyledSlider>
                  
                  <IndexIndicator>
                    {currentIndex + 1}/6 
                     <FontAwesomeIcon icon={faPlus} />
                    </IndexIndicator>
                  </Container>
          
    );
  }

  const Container = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
  `

  const StyledSlider = styled(Slider)`
    position: absolute;

    top: 0;
    left: 10px;
    width: 100%;
    height: 100%;

    .slick-list {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;

      &:hover {
        transform: scale(1.05);
        transition: transform .25s;
      } 
    }
  `;

  const IndexIndicator = styled.div`
    font-size: 13px;
    height: 25px;
    border-radius: 13px;
    background-color: rgba(33, 38, 41, 0.5);
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    line-height: 0;
    overflow: hidden;
    max-width: 100%;
    color: #ffffff;
    box-sizing: border-box;
    padding: 4px 8px 4px 10px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

  export default SimpleSlider;