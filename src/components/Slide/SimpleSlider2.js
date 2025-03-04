import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import styled from "styled-components";

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

function SimpleSlider2() {
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
                      <img src='AD\add_mobile_1.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_2.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_3.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_4.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_5.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_6.avif'></img>
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
   min-height: 175px;
   height: 100%;
   border-radius: 10px;
  `

  const StyledSlider = styled(Slider)`
    position: absolute;
    border-radius: 13px;

    margin: 0 auto;
    width: 100%;
    // min-height: 100px;
   height: 100%;

    .slick-list {
      width: 100%;
      // min-height: 100px;
  //  height: auto;
      border-radius: 4px;

      img {
        width: 100%;
        // height: auto;

      &:hover {
        transform: scale(1.05);
        transition: transform .25s;
      } 
    }
  `;

  const IndexIndicator = styled.div`
  //  position: relative;
    
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

  export default SimpleSlider2;