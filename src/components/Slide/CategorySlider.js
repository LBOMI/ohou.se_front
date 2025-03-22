import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

import styled from "styled-components";

import { useState, useRef } from 'react';


function Categroy_Slider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 13,
      slidesToScroll: 13,
      afterChange: (current) => setCurrentSlide(current),
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>
    };
  
    const categories = [
      { label: '크리스마스', img: '/Category/크리스마스.avif' },
      { label: '가구', img: '/Category/가구.avif' },
      { label: '패브릭', img: '/Category/패브릭.avif' },
      { label: '가전.디지털', img: '/Category/가전,디지털.avif' },
      { label: '주방용품', img: '/Category/주방용품.avif' },
      { label: '식품', img: '/Category/식품.avif' },
      { label: '데코,식물', img: '/Category/데코,식물.avif' },
      { label: '조명', img: '/Category/조명.avif' },
      { label: '수납,정리', img: '/Category/수납,정리.avif' },
      { label: '생활용품', img: '/Category/생활용품.avif' },
      { label: '생필품', img: '/Category/생필품.avif' },
      { label: '유아, 아동', img: '/Category/유아,아동.avif' },
      { label: '반려동물', img: '/Category/반려동물.avif' },
      { label: '캠핑,레저', img: '/Category/캠핑,레저.avif' },
      { label: '공구,DIY', img: '/Category/공구,DIY.avif' },
      { label: '인테리어시공', img: '/Category/인테리어시공.webp' },
      { label: '렌탈,구독', img: '/Category/렌탈,구독.avif' },
      { label: '장보기', img: '/Category/장보기.avif' },
      { label: '혼수,신혼', img: '/Category/혼수,신혼.avif' }
    ]
    return (
      <SliderContainer>
      <StyledSlider ref={sliderRef} {...settings}>
        {categories.map(({ label, img }, idx ) => (
          <Imageitem key = {label}>
            <label>
              <img src={img} alt={label}/>
              <span>{label}</span>
            </label>
          </Imageitem>
        ))}
        
      </StyledSlider>
      
      </SliderContainer>
    )
  }

const SliderContainer = styled.div`
  position: relative;
  z-index: 0;
`;

const StyledSlider = styled(Slider)`
  height: 98px;
  margin-left: 0;
`;

const Imageitem = styled.div`
  width: 72px;
  cursor: pointer;
  touch-action: manipulation;
  color: inherit;
  text-decoration: none;

  img {
    width: 100%;
    height: 72px;
    object-fit: contain;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    line-height: 18px;
    color: rgb(47, 52, 56);
    text-align: center;
    white-space: nowrap;
  }
`
export default Categroy_Slider;