import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

import styled from "styled-components";

import { useState, useRef } from 'react';


function Exhibition_Slider() {
    const sliderRef = useRef(null);
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
      nextArrow: <NextArrow/>
    };

    const categories = [
      { img: 'exhibition/기획전_1.avif', p1: '전시, 반품, 스크래치 특템의 기회!', p2: '빠른 품절! 리퍼마켓 ~82%'},
      { img: 'exhibition/기획전_2.avif', p1: '전상품 무료배송', p2: '매일 새로운 장보기 핫딜! 오마트'},
      { img: 'exhibition/기획전_3.avif', p1: '오늘의집 Only'},
      { img: 'exhibition/기획전_4.avif', p1: '배송 걱정없이 원하는 날 한번에 설치해요!', p2: '오늘의집 배송 꿀조합 가구 추천'},
      { img: 'exhibition/기획전_2.avif', p1: '전상품 무료배송', p2: '매일 새로운 장보기 핫딜! 오마트'}

    ]
  
    return (
      <SliderContainer>
        <StyledSlider ref={sliderRef} {...settings} >
       
        
          {categories.map(({ img, p1, p2 }, idx ) => (
            <Container key = {img}>
              <Image>
                <img src={img} />
              </Image>
              <Text>
                <P1>{p1}</P1>
                <P2>{p2}</P2>
              </Text>

            </Container>
          ))}
                        
                    
                    {/* <div className='Exhibition_c1_1_2'>
                        <div className='Exhibition_c1_1_2_1' style={{cursor:"pointer"}}>
                        <div className='Exhibition_c1_1_1_174' style={{ marginRight: 20 }}>
                          <img src='exhibition\기획전_2.avif' ></img>
                          <div className='Exhibition_c1_1_2_1_1'>
                            <div className='Exhibition_c1_1_2_1_1_1'></div>
                          </div>
                          </div>
                        </div>
                        <div className='Exhibition_c1_1_1_2' style={{cursor:"pointer"}}>
                          <p className='Exhibition_c1_1_1_2_p1'>전상품 무료배송</p>
                          <p className='Exhibition_c1_1_1_2_p2'>매일 새로운 장보기 핫딜! 오마트</p>
                        </div>
                        <a></a>
                      </div>
                      <div className='Exhibition_c1_1_3'>
                        <div className='Exhibition_c1_1_3_1' style={{cursor:"pointer"}}>
                        <div className='Exhibition_c1_1_1_174' style={{ marginRight: 20 }}>
                          <img src='exhibition\기획전_3.avif'></img>
                          <div className='Exhibition_c1_1_3_1_1'>
                            <div className='Exhibition_c1_1_3_1_1_1'></div>
                          </div>
                          </div>
  
                        </div>
                        <div className='Exhibition_c1_1_3_2' style={{cursor:"pointer"}}>
                          <p className='Exhibition_c1_1_3_2_p1'></p>
                          <p className='Exhibition_c1_1_3_2_p2'>오늘의집 Only</p>
                        </div>
                        <a></a>
                      </div>
                      <div className='Exhibition_c1_1_4'>
                        <div className='Exhibition_c1_1_4_1' style={{cursor:"pointer"}}>
                        <div className='Exhibition_c1_1_1_174' style={{ marginRight: 20 }}>
                          <img src='exhibition\기획전_4.avif'></img>
                          <div className='Exhibition_c1_1_4_1_1'>
                            <div className='Exhibition_c1_1_4_1_1_1'></div>
                          </div>
                          </div>
  
                        </div>
                        <div className='Exhibition_c1_1_4_2' style={{cursor:"pointer"}}>
                          <p className='Exhibition_c1_1_4_2_p1'>배송 걱정없이 원하는 날 한번에 설치해요!</p>
                          <p className='Exhibition_c1_1_4_2_p2'>오늘의집 배송 꿀조합 가구 추천</p>
                        </div>
                        <a></a>
                      </div> */}
                      <div>
                      <div className='Exhibition_c1_1_5'>
                      <a>
                        <div className='Exhibition_c1_1_5_1' >
                          <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                        <div className='Exhibition_c1_1_5_2'>더보기</div>
                      </a>
                      </div>
                      </div>
  
                    
        </StyledSlider>
        {currentSlide > 0 && (
        <div  className='PrevArrow2_button'>
        <button className='PrevArrow2_button_b'
          onClick={() => sliderRef.current.slickPrev()}
          style={{
            margin: 0,
            border: "none",
            background: "none",
            font: "inherit",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 700,
            boxSizing: "border-box",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            padding: 0,
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            webkitboxpack: "center",
            justifyContent: "center",
            borderRadius: 24,
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "0 2px 5px rgba(63, 71, 77, 0.15)",
            cursor: "pointer",
            touchAction: "manipulation",
          }}
          type='button'
        >
        <span><FontAwesomeIcon icon={faChevronLeft} /></span>
        </button>
        </div>
      )}
      {currentSlide === 0 && (
        <div  className='NextArrow_button'>
        <button 
          onClick={() => sliderRef.current.slickNext()}
          style={{
            margin: 0,
            border: "none",
            background: "none",
            font: "inherit",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 700,
            boxSizing: "border-box",
            textAlign: "center",
            color: "rgb(255, 255, 255)",
            padding: 0,
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            webkitboxpack: "center",
            justifyContent: "center",
            borderRadius: 24,
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "0 2px 5px rgba(63, 71, 77, 0.15)",
            cursor: "pointer",
            touchAction: "manipulation",
          }}
          type='button'
        >
        <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </button>
        </div>
      )}
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
    overflow: hidden;
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
  `
export default Exhibition_Slider;
  