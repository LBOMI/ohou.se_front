import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import { useState, useRef } from 'react';


function Best_Slider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 10,
      variableWidth: true,
      afterChange: (current) => setCurrentSlide(current)
    };
  
    return (
      <div className='Best_c1_1_1'>
       
      <Slider ref={sliderRef} {...settings} >
     
        <div className='Best_c1_1_1_1' >
      <label className='Best_c1_1_1_li_label_1' >
                          <input type='checkbox' checked></input>
                          <span>전체</span>
                        </label>
                        </div>
                      
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_2'>
                          <input type='checkbox'></input>
                          <span>크리스마스</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_3'>
                          <input type='checkbox'></input>
                          <span>가구</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_4'>
                          <input type='checkbox'></input>
                          <span>패브릭</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_5'>
                          <input type='checkbox'></input>
                          <span>가전,디지털</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_6'>
                          <input type='checkbox'></input>
                          <span>주방용품</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_7'>
                          <input type='checkbox'></input>
                          <span>식품</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_8'>
                          <input type='checkbox'></input>
                          <span>데코,식물</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_9'>
                          <input type='checkbox'></input>
                          <span>조명</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_10'>
                          <input type='checkbox'></input>
                          <span>수납,정리</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_11'>
                          <input type='checkbox'></input>
                          <span>가전,디지털</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_12'>
                          <input type='checkbox'></input>
                          <span>생활용품</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_13'>
                          <input type='checkbox'></input>
                          <span>생필품</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_14'>
                          <input type='checkbox'></input>
                          <span>유아,아동</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_15'>
                          <input type='checkbox'></input>
                          <span>반려동물</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_16'>
                          <input type='checkbox'></input>
                          <span>캠핑,레저</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_17'>
                          <input type='checkbox'></input>
                          <span>공구,DIY</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_18'>
                          <input type='checkbox'></input>
                          <span>인테리어시공</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_19'>
                          <input type='checkbox'></input>
                          <span>렌탈,구독</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_20'>
                          <input type='checkbox'></input>
                          <span>장보기</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_21'>
                          <input type='checkbox'></input>
                          <span>혼수,신혼</span>
                        </label>
                        </div>
  
                        <div className='Best_c1_1_1_1'>
                        <label className='Best_c1_1_1_li_label_22'>
                          <input type='checkbox'></input>
                          <span>Binary shop</span>
                        </label>  
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
      {currentSlide >= 0 && (
        <div  className='NextArrow_button' >
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
  };

export default Best_Slider;