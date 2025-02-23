import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

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
    };
  
    return (
      <div className='Exhibition_c1_1'>
        <Slider ref={sliderRef} {...settings} >
       
        <div className='Exhibition_c1_1_1'>
                        <div className='Exhibition_c1_1_1_1' style={{cursor:"pointer"}}>
                          <div className='Exhibition_c1_1_1_174' style={{ marginRight: 20 }}>
                          <img src='exhibition\기획전_1.avif'></img>
                          <div className='Exhibition_c1_1_1_1_1'>
                            <div className='Exhibition_c1_1_1_1_1_1'></div>
                          </div>
                          </div>
                        <div className='Exhibition_c1_1_1_2' style={{cursor:"pointer"}}>
                          <p className='Exhibition_c1_1_1_2_p1'>전시, 반품, 스크래치 특템의 기회!</p>
                          <p className='Exhibition_c1_1_1_2_p2'>빠른 품절! 리퍼마켓 ~82%</p>
                        </div>
                        <a className='Exhibition_c1_1_1_a'></a>
                      </div>
                      </div>
                    
                    <div className='Exhibition_c1_1_2'>
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
                      </div>
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
  
                    
        </Slider>
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
      </div>
    )
  }

export default Exhibition_Slider;
  