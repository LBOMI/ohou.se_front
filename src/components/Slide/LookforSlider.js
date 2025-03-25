import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

import { useState, useRef } from 'react';
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
  
    const categories = [
      { img1: 'lookfor_picture/lookfor1.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User1' },
      { img1: 'lookfor_picture/lookfor2.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User2' },
      { img1: 'lookfor_picture/lookfor3.gif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User3' },
      { img1: 'lookfor_picture/lookfor4.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User4' },
      { img1: 'lookfor_picture/lookfor5.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User5' },
      { img1: 'lookfor_picture/lookfor6.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User6' },
      { img1: 'lookfor_picture/lookfor7.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User7' },
      { img1: 'lookfor_picture/lookfor8.avif', img2: 'lookfor_picture/lookfor_mini.avif', userName: 'User8' },
      { isMore: true } 
    ]
    
    return (
      <SliderContainer>
        <StyledSlider {...settings}>
          {categories.map(({ img1, img2, userName, isMore }, idx ) => (
            isMore ? (
              <div>
              <div className='B_lookfor_h3_1_2_lastli'>
                <a>
                <div className='B_lookfor_h3_1_2_last'>
                  <span><FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
                <div className='B_lookfor_h3_1_2_last2'>더보기</div>
                </a>
                </div>
              </div>
            ) : (
<Content key = "more">
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
                        <a></a>
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
    width: 100%;
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
  `;

  const Content = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px 20px 0px 0px;
    padding: 0px;
    flex-shrink: 0;
    scroll-snap-align: start;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    display: flex;
  
    min-width: 0px;
    flex-flow: column;
  `;

  const BackgroundImg = styled.div`
  width: 100%;
  height: 230.22px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s ease 0s;
    }
    
  `;
  const User = styled.div`
    height: 30px;
    position: absolute;
    padding: 8px;
    font-size: 0px;
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
  `
  export default LookforSlider;