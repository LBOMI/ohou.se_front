import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import ScrapButton from '../ScrapButton';

function LookforSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
      afterChange: (current) => setCurrentSlide(current),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ]
    };

    const defaultMiniImg = 'lookfor_picture/lookfor_mini.avif';
    const categories = [
      { img1: 'lookfor_picture/lookfor1.avif', userName: 'User1' },
      { img1: 'lookfor_picture/lookfor2.avif', userName: 'User2' },
      { img1: 'lookfor_picture/lookfor3.gif', userName: 'User3' },
      { img1: 'lookfor_picture/lookfor4.avif', userName: 'User4' },
      { img1: 'lookfor_picture/lookfor5.avif', userName: 'User5' },
      { img1: 'lookfor_picture/lookfor6.avif', userName: 'User6' },
      { img1: 'lookfor_picture/lookfor7.avif', userName: 'User7' },
      { img1: 'lookfor_picture/lookfor8.avif', userName: 'User8' },
      { isMore: true } 
    ].map(item => ({ ...item, img2: defaultMiniImg}));
    
    return (
      <SliderContainer>
        <StyledSlider {...settings}>
          {categories.map(({ img1, img2, userName, isMore }, idx ) => (
            isMore ? (
              <React.Fragment key = {`more-${idx}`}>
               <MoreContent key={`more-${idx}`}>
                 <a>
                  <ArrowRight>
                   <span><FontAwesomeIcon icon={faArrowRight} /></span>
                  </ArrowRight>
                  <MoreText>더보기</MoreText>
                 </a>
                </MoreContent>
              </React.Fragment>
            ) : (
              <Content key={`category-${idx}`}>
                        <BackgroundImg>
                          <img src={img1} alt={userName}/>
                        </BackgroundImg>

                        <User>
                          <UserProfile>
                            <img src={img2} alt={userName}/>
                          </UserProfile>
                          <span>{userName}</span>
                        </User>

                        <ScrapButtonWrapper>
                          <ScrapButton/>
                        </ScrapButtonWrapper>
          
                      </Content>
            )
            
          ))}
         
           
                      
  
                  
                   
                  
  
                  </StyledSlider>
  
                
                </SliderContainer>
    )
  };

  const SliderContainer = styled.div`
    position: relative;
    z-index: 0;
    // width: 100%;
    height: 230.22px;

  `;

  const StyledSlider = styled(Slider)`
    position: relative;
    margin-left: 0;
    width: 100%;
    height: 230.22px;
    display: flex;
    padding: 0px;

    .slick-track {
      height: 230.22px;
    }

    .slick-slide {
      padding: 0 8px;
      box-sizing: border-box;
    }

    .slick-list {
      margin: 0 -8px; //마지막 여백 상쇄 처리
    }
  `;

  const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    flex-shrink: 0;
    scroll-snap-align: start;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    display: flex;

    flex-flow: column;
  `;

  const BackgroundImg = styled.div`
  width: 100%;
  height: 230.22px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover {
        transition: transform 0.2s ease 0s;
        transform: scale(1.05);
      }
    }
    
  `;
  const User = styled.div`
    height: 30px;
    position: absolute;
    padding: 8px;
    z-index: 1;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;

    span {
      overflow: hidden;
      display: inline-block;
      max-width: 100px;
      font-size: 12px;
      line-height: 20px;
      font-weight: 700;
      color: rgb(255, 255, 255);
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `;

  const UserProfile = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    overflow: hidden;
    display: inline-block;
    margin-right: 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
  `;

  const ScrapButtonWrapper = styled.div`
    position: absolute;
    padding: 8px;
    z-index: 1;
    right: 0px;
    bottom: 0px;
  `;

  const MoreContent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px;
    flex-shrink: 0;
    /* scroll-snap-align: start; */
    width: 172px;
    height: 230.22px;

    a {
      color: rgb(47, 52, 56);
      display: inline-block;
      font-weight: 500;
      padding: 6px 16px;
      cursor: pointer;
      touch-action: manipulation;
      width: 50px;
      height: 80px;
    }
  `;

  const ArrowRight = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgb(234, 237, 239);
    margin-bottom: 6px;
    position: relative;

    span {
      display: inline-block;
      font-size: 18px;
      line-height: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;

  const MoreText = styled.div`
    font-size: 14px;
    line-height: 20px;
  `
  export default LookforSlider;