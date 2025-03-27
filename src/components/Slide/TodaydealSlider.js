import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

import Counter from '../Counter';
import ScrapButton from '../ScrapButton';
import Star from '../Star';
import FreeShipping from '../Body/FreeShipping';
import PaymentDiscountCard from '../Body/PaymentDiscountCard';
import SpecialPrice from '../Body/SpecialPrice';

function Todaydeal_Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
      afterChange: (current) => setCurrentSlide(current),
    };
  
    const categories = [
      { img: 'Todaydeal/Todaydeal_1.avif', 
        name: '아이러브베베', 
        detail: '[최종17,910원/82초고평량]시그니앙 골드퍼플 70매 20팩 캡형 아기물티슈', 
        discount: '42%', 
        price: '22,900', 
        star: '4.9', 
        review: '리뷰 630', 
        istodaydepart: true, 
        isdeadline: true, 
        isFreeShipping: true, 
        isDiscountCard: true },

      { img: 'Todaydeal/Todaydeal_2.avif', 
        name: '헤드앤숄더', 
        detail: '두피 케어! 헤드앤숄더 특가 모음딜', 
        discount: '28%', 
        price: '37900 외', 
        star: '4.8', 
        review: '리뷰 5,739',
        isFreeShipping: true,
        isDiscountCard: true },

      { img: 'Todaydeal/Todaydeal_3.avif', 
        name: '미리내 농수산', 
        detail: '[1/3 단하루] 대추 방울토마토 로얄과 2Kg 5Kg 당일수확 산지직송', 
        discount: '47%', 
        price: '15.100', 
        star: '4.8', 
        review: '리뷰 24',
        isFreeShipping: true,
        isSpecialPrice: true },

      { img: 'Todaydeal/Todaydeal_4.avif', 
        name: '알텐바흐', 
        detail: '1/3일! 단하루 32% 홈쇼핑 완판! 알텐바흐 디펜더스 주방용품 모음전', 
        discount: '60%', 
        price: '73,500 외', 
        star: '4.7', 
        review: '리뷰 626',
        isFreeShipping: true},

      { img: 'Todaydeal/Todaydeal_5.avif', 
        name: '애경', 
        detail: '리큐/2080/르샤트라 세탁세제/유연제 등 할인 모음', 
        discount: '44%', 
        price: '19,500 외', 
        star: '4.8', 
        review: '리뷰 8,072',
        isFreeShipping: true},

      { img: 'Todaydeal/Todaydeal_6.avif', 
        name: '창신리빙', 
        detail: '[딱하루10,155원] 국산 냉동밥 보관용기 9P세트 (전자레인지 OK) / 냉장고 정리', 
        discount: '24%', 
        price: '14,300 외', 
        star: '4.6', 
        review: '리뷰 92,238',
        isFreeShipping: true},
      
      { isMore: true }
    ]
    return (
      <SliderContainer>
        <StyledSlider {...settings}>
          {categories.map((item, idx) => (
            item.isMore ? (
        
              <React.Fragment key = {`more-${idx}`}>
              <MoreContent key = {`more-${idx}`}>
                    <ArrowRight>
                      <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </ArrowRight>
                    <MoreText>더보기</MoreText>
              </MoreContent>
              </React.Fragment>
            ) : (
            <Contents key={`${item.name}-${idx}`}>
                          
                          <Images>
              
                                <img src={item.img} alt={item.name}/>
                               
                                <ScrapButton/>

                                <CounterWrapper>
                                  <Counter/>
                                </CounterWrapper>
                          </Images>

                          <Text>
                              <h1>
                                <Name>{item.name}</Name>
                                <Detail>{item.detail}</Detail>
                              </h1>
                              
                              <Price>
                                <DiscountRate>{item.discount}</DiscountRate>
                                <span>{item.price}</span>
                              </Price>

                              <Review>
                                <p>
                                  <Star/>
                                  <strong>{item.star}</strong>
                                  {item.review}
                                </p>
                              </Review>

                              {item.istodaydepart && 
                              <TodayDepartImg>
                                <img src='Todaydeal/오늘출발.png'/>
                              </TodayDepartImg>}

                              {item.isdeadline && 
                              <Deadline>평일 21:00까지 결제시</Deadline>}

                              {item.isFreeShipping && <FreeShipping/>}
                              {item.isSpecialPrice && <SpecialPrice/>}
                              {item.isDiscountCard && <PaymentDiscountCard/>}
                          </Text>
                      </Contents>)
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
    width: 100%;

    .slick-slide {
      padding: 0 8px;
      box-sizing: border-box;
      
    }

    .slick-list {
      margin: 0 -8px;
      overflow: hidden;
    }
  `;

  const Contents = styled.div`
    // padding: 0 10px 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  `;

  const Images = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%; 
    overflow: hidden;
    border-radius: 4px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      transition: transform 0.2s ease 0s; 

      &:hover {
        transform: scale(1.05);
      }
    }
  `;

  const CounterWrapper = styled.div`
    position: absolute;
    z-index: 3;
    background-color: #f77;
    color: #fff; 
    text-align: center;
    border-radius: 4px;
    top: 12px; /*media 768*/
    left: 12px; /*media 768*/
    font-size: 6.5px; /*media 768*/
    line-height: 5px; /*media 768*/
    width: 91px;
    height: 23px;
    /* pointer-events: none;  */
  `;

  const Text = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 9px; /*media 768*/
      margin-bottom: 0;
      font-weight: inherit;
    }
  `;

  const Name = styled.div`
    font-size: 11px;
    color: #828c94;
    font-weight: 500;
  `;

  const Detail = styled.div`
    font-size: 13px;
    color: #424242;
    margin-top: 5px;
    line-height: 17px;
    max-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  const Price = styled.div`
    margin-top: 4px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;

    span {
      color: #000;
    }
  `;

  const DiscountRate = styled.div`
    color: #35C5F0;
    margin-right: 6px;
  `;

  const Review = styled.div`
    margin-top: 5px;
    font-size: 12px;
    color: #9e9e9e;

    p {
      margin: 0;
      display: flex;
      align-items: center;

      strong {
        margin-right: 4px;
        color: #424242;
      }
    }
  `;

  const TodayDepartImg = styled.div`
    margin-top: 6px;

    img {
      height: 16px;
    }
  `;

  const Deadline = styled.div`
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(99, 145, 230);
  `;

  const MoreContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    margin: 0px 20px 0px 0px;
    padding: 0px;
    flex-shrink: 0;
    height: 370px;
    cursor: pointer;
  `;

  const ArrowRight = styled.div `
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
export default Todaydeal_Slider;