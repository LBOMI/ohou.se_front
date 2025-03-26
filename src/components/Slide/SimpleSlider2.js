import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const images = [
  'AD/add_mobile_1.avif',
  'AD/add_mobile_2.avif',
  'AD/add_mobile_3.avif',
  'AD/add_mobile_4.avif',
  'AD/add_mobile_5.avif',
  'AD/add_mobile_6.avif'
]

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
                    { images.map(( src, idx ) => (
                      <div key={idx}>
                        <img src={src} alt={`광고 이미지 ${idx + 1}`}/>
                      </div>
                    ))}
                  </StyledSlider>
                  
                  <IndexIndicator>
                    {currentIndex + 1} / {images.length}
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
    position: relative;
    border-radius: 13px;

    margin: 0 auto;
    width: 100%;
   height: 100%;

    .slick-list {
      width: 100%;
      border-radius: 4px;

      img {
        width: 100%;

      &:hover {
        transform: scale(1.05);
        transition: transform .25s;
      } 
    }
  `;

  const IndexIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: 700;
  color: #ffffff;

  background-color: rgba(33, 38, 41, 0.6);
  padding: 4px 10px;
  border-radius: 13px;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  cursor: pointer;

  svg {
    margin-left: 6px;
    font-size: 12px;
  }
`;

  export default SimpleSlider2;