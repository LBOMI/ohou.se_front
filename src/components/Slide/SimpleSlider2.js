import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

function SimpleSlider2() {
    const [currentIndex, setCurrentIndex ] = useState(0);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
      afterChange: (current) => setCurrentIndex(current),
    };
  
    return (
      <div className='B_main20'>
                  <Slider {...settings}>
                    <div>
                      <img src='AD\add_mobile_1.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_2.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_3.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_4.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_5.avif'></img>
                    </div>
                    <div>
                    <img src='AD\add_mobile_6.avif'></img>
                    </div>
                  </Slider>
                  
                  <div style={{
                    fontSize: 13,
                    height: 25,
                    borderRadius: 13,
                    backgroundColor: "rgba(33, 38, 41, 0.5)",
                    fontWeight: 700,
                    display:" inline-flex",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    lineHeight: 0,
                    overflow: "hidden",
                    maxWidth: "100%",
                    color: "#ffffff",
                    boxSizing: "border-box",
                    padding: "4px 8px 4px 10px",
                    cursor: "pointer",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px"
                  }}>
                    {currentIndex + 1}/6 
                     <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
          
    );
  }

  export default SimpleSlider2;