import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

import styled from "styled-components";

import { useState } from 'react';


function Exhibition_Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      afterChange: (current) => setCurrentSlide(current),
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,

      responsive : [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const categories = [
      { img: 'exhibition/기획전_1.avif', p1: '전시, 반품, 스크래치 득템의 기회!', p2: '빠른 품절! 리퍼마켓 ~82%'},
      { img: 'exhibition/기획전_2.avif', p1: '전상품 무료배송', p2: '매일 새로운 장보기 핫딜! 오마트'},
      { img: 'exhibition/기획전_3.avif', p1: '오늘의집 Only'},
      { img: 'exhibition/기획전_4.avif', p1: '배송 걱정없이 원하는 날 한번에 설치해요!', p2: '오늘의집 배송 꿀조합 가구 추천'},
      { isMore: true } // 더보기

    ]
  
    return (
      <SliderContainer>
        <StyledSlider {...settings} >
       
        
          {categories.map(({ img, p1, p2, isMore }, idx ) => (
            isMore ? (
              <Container key = "more" >
                <MoreContainer>
                  <a>
                  <Arrow>
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                  </Arrow>
                  <Plus>더보기</Plus>
                  </a>
                </MoreContainer>
              </Container>
            ) : (
              <Container key = { `slide-${idx}`}>
                <Image>
                  <img src={img} alt={p1 || '기획전 이미지'}/>
                </Image>
              <Text>
                <P1>{p1}</P1>
                <P2>{p2}</P2>
              </Text>

            </Container>
            )
            
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
    display: flex;
    margin: 0px;
    padding: 0px;
    // overflow: hidden;
    list-style: none;
  `;

  const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    padding: 0;
    flex-shrink: 0;
    scroll-snap-align: start;
    width: calc((100% - 60px) / 4);
  `;

  const Image = styled.div`
    position: relative;
    border-radius: 4px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0px;
      left: 0px;
      transition: transform 0.2s ease 0s;
    }
  `;

  const Text = styled.div`
    margin-top: 10px;
    min-width: 0px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(47, 52, 56);
    word-break: keep-all;
    overflow-wrap: break-word;
    cursor: pointer;
  `;

  const P1 = styled.p`
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  `;

  const P2 = styled.p`
    margin-top: 2px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
  `;

  const MoreContainer = styled.div`
    margin-right: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 20px 0px 0px;
    padding: 0px;
    flex-shrink: 0;
    scroll-snap-align: start;
    /* width: 266.67px; */
    height: 213.77px;

    a {
      color: rgb(47, 52, 56);
      display: inline-block;
      font-weight: 500;
      padding: 6px 16px;
      cursor: pointer;
      touch-action: manipulation;
      text-decoration: none;
    }
`;
  
const Arrow = styled.div`
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

const Plus = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
export default Exhibition_Slider;
  