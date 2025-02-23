import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

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
    };
  
    return (
      <div className='Category_C_1_1'>
      <Slider ref={sliderRef} {...settings}>
        <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\크리스마스.avif'></img>
                          </div>
                          <span>크리스마스</span>
                        </a>
                      </div>
                   
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\가구.avif'></img>
                          </div>
                          <span>가구</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\패브릭.avif'></img>
                          </div>
                          <span>패브릭</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\가전,디지털.avif'></img>
                          </div>
                          <span>가전.디지털</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\주방용품.avif'></img>
                          </div>
                          <span>주방용품</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\식품.avif'></img>
                          </div>
                          <span>식품</span>
                        </a>
                      </div>
                   
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\데코,식물.avif'></img>
                          </div>
                          <span>데코,식물</span>
                        </a>
                      </div>
                 
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\조명.avif'></img>
                          </div>
                          <span>조명</span>
                        </a>
                      </div>
                  
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\수납,정리.avif'></img>
                          </div>
                          <span>수납,정리</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\생활용품.avif'></img>
                          </div>
                          <span>생활용품</span>
                        </a>
                      </div>
                  
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\생필품.avif'></img>
                          </div>
                          <span>생필품</span>
                        </a>
                      </div>
                  
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\유아,아동.avif'></img>
                          </div>
                          <span>유아, 아동</span>
                        </a>
                      </div>
                   
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\반려동물.avif'></img>
                          </div>
                          <span>반려동물</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\캠핑,레저.avif'></img>
                          </div>
                          <span>캠핑,레저</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\공구,DIY.avif'></img>
                          </div>
                          <span>공구,DIY</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\인테리어시공.webp'></img>
                          </div>
                          <span>인테리어시공</span>
                        </a>
                      </div>
                    
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\렌탈,구독.avif'></img>
                          </div>
                          <span>렌탈,구독</span>
                        </a>
                      </div>
                   
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\장보기.avif'></img>
                          </div>
                          <span>장보기</span>
                        </a>
                      </div>
                   
                      <div className='Category_C_1_1_ul_li'>
                        <a>
                          <div className='Category_C_1_1_ul_li_a_1'>
                            <img src='Category\혼수,신혼.avif'></img>
                          </div>
                          <span>혼수,신혼</span>
                        </a>
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

export default Categroy_Slider;