import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

import styled from "styled-components";

import { useState, useRef } from 'react';


function Best_Slider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 10,
      slidesToScroll: 10,
      variableWidth: true,
      afterChange: (current) => setCurrentSlide(current),
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>
    };
  
    const categories = [
      '전체', '크리스마스', '가구', '패브릭', '가전,디지털', 
      '주방용품', '식품', '데코,식물', '조명', '수납,정리',
      '생활용품', '생필품', '유아,아동', '반려동물', '캠핑,레저',
      '공구,DIY', '인테리어 시공', '렌탈,구독', '장보기', '혼수,신혼', 'Binary shop'
    ];

    return (
      <SliderContainer>
       
      <StyledSlider ref={sliderRef} {...settings} >
        {categories.map((label, idx) => (
            <Individual key={label} isSelected={idx === 0}>
              <label><span>{label}</span></label>
            </Individual>
        ))}
      </StyledSlider>

      </SliderContainer>
      
    )
  };

  const SliderContainer = styled.div`
    // position: relative;
    // z-index: 0;
    // width: 1136px;
    display: flex;
    margin: 0px;
    padding: 0px;
    list-style: none;
    // overflow: hidden;
  `;

  const StyledSlider = styled(Slider)`
    max-width: 1126.67px;
    width: auto;
  height: 32px;
  margin: 0;
  // overflow: hidden;
  `;

  const Individual = styled.div`
    display: inline-block;
    margin: 0 6px 0 0;
    padding: 0;
    flex-shrink: 0;
    scroll-snap-align: start;
    overflow: hidden;

    label {
      display: inline-block;
      position: relative;
      height: 32px;
      border-radius: 16px;
      padding-left: 12px;
      padding-right: 12px;
      line-height: 0;
      cursor: pointer;
      color: ${({ isSelected }) => isSelected ? '#fff' : 'rgb(47, 52, 56)'};
      background-color: ${({ isSelected }) => isSelected ? 'rgb(53, 197, 240)' : 'rgb(247, 249, 250)'};

      &:hover {
        background-color: ${({ isSelected }) => isSelected ? 'rgb(51, 158, 190)': 'rgb(228, 224, 224)'};
      }

      &::before {
        content: "";
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }

      span {
        font-size: 14px;
        line-height: 18px;
        vertical-align: middle;
        white-space: nowrap;
        cursor: inherit;
      }
}
  `
export default Best_Slider;