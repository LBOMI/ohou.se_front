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
      PrevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>
    };
  
    return (
      <SliderContainer>
       
      <StyledSlider ref={sliderRef} {...settings} >
        
            <IndividualFirst>
                <label>
                  {/* <input type='checkbox' checked></input> */}
                  <span>전체</span>
                </label>
            </IndividualFirst>
                      
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>크리스마스</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>가구</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>패브릭</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>가전,디지털</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>주방용품</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>식품</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>데코,식물</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>조명</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>수납,정리</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>가전,디지털</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>생활용품</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>생필품</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>유아,아동</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>반려동물</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>캠핑,레저</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>공구,DIY</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>인테리어 시공</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>렌탈,구독</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>장보기</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>혼수,신혼</span>
                </label>
            </Individual>
  
            <Individual>
                <label>
                  {/* <input type='checkbox'></input> */}
                  <span>Binary shop</span>
                </label>
            </Individual>
            
      </StyledSlider>
      {currentSlide > 0 && (
        <PrevArrow/>
      )}
      {currentSlide >= 0 && (
        <NextArrow/>
      )}
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
    overflow: hidden;
  `;

  const StyledSlider = styled(Slider)`
    max-width: 1126.67px;
    width: auto;
  height: 32px;
  margin: 0;
  overflow: hidden;
  `

  const IndividualFirst = styled.div`
    margin: 0px 6px 0px 0px;
    padding: 0px;
    flex-shrink: 0;
    scroll-snap-align: start;

    label {
      display: inline-block;
      position: relative;
      height: 32px;
      border-radius: 16px;
      padding-left: 12px;
      padding-right: 12px;
      line-height: 0;
      color: rgb(255, 255, 255);
      background-color: rgb(53, 197, 240);
      cursor: pointer;

      &:hover {
        background-color: rgb(51, 158, 190);
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
      color: rgb(47, 52, 56);
      background-color: rgb(247, 249, 250);
      cursor: pointer;

      &:hover {
        background-color: rgb(228, 224, 224);
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
  `
export default Best_Slider;