import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronUp, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import Modal from "react-modal";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import { useState, useEffect, useRef } from 'react';


//슬라이드
function SimpleSlider() {
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
                    <img src='AD\광고1.jpeg'></img>
                  </div>
                  <div>
                    <img src='AD\광고2.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고3.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고4.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고5.avif'></img>
                  </div>
                  <div>
                    <img src='AD\광고6.avif'></img>
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

const PrevArrow = ({ onClick }) => {
	return (
    <div  className='PrevArrow_button'>
		<button className='PrevArrow_button_b'
			onClick={onClick}
			type='button'
		>
		<span><FontAwesomeIcon icon={faChevronLeft} /></span>
		</button>
    </div>
	);
};

const NextArrow = ({ onClick }) => {
	return (
    <div  className='NextArrow_button'>
		<button
			onClick={onClick}
			type='button'
		>
		<span><FontAwesomeIcon icon={faChevronRight} /></span>
		</button>
    </div>
	);
};

const VerticalSlider = () => {
  const [isOpen_real, setIsOpen_Real] = useState(false);
  const dropdownRef = useRef(null); //드롭다운 외부 클릭하면 사라짐

  const Dropdown2 = () => {
    setIsOpen_Real(!isOpen_real);
  }

  const handelClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen_Real(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 0
        }
      }
    ]
  };

  return (
    <div className="real_vertical">
        <Slider {...settings}>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>1</span>
            <span style={{color:'red', fontSize:12, }}>new</span>
            <span style={{fontSize:14 }}>브레드박스</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>2</span>
            <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
            <span style={{fontSize:14 }}>붙이는 커튼</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>3</span>
            <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
            <span style={{fontSize:14 }}>먼지없는 러그</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>4</span>
            <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
            <span style={{fontSize:14 }}>이케아 트롤리</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>5</span>
            <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
            <span style={{fontSize:14 }}>무타공 벽선반</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>6</span>
            <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
            <span style={{fontSize:14 }}>추천코드</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>7</span>
            <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
            <span style={{fontSize:14 }}>타일 카페트</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>8</span>
            <span style={{color:'red', fontSize:12, }}>new</span>
            <span style={{fontSize:14 }}>필웰</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>9</span>
            <span style={{color:'red', fontSize:12, }}>new</span>
            <span style={{fontSize:14 }}>밧드아</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, paddingLeft:0 }}>10</span>
            <span style={{color:'red', fontSize:12, }}>new</span>
            <span style={{fontSize:14 }}>로보락</span>
          </div>
        </Slider>
        
            <button type='button' onClick={Dropdown2}>
              <span><FontAwesomeIcon icon={faChevronDown} /></span>
            </button>
              <div ref={dropdownRef} className={`dropDown2 ${isOpen_real ? "open" : ""}`}>
              <div className='dropDown2_1'>
                <div className='dropDown2_1_1'>
                  <div className='dropDown2_1_1_1'>
                    <span>인기 검색어</span>
                    <button type='button' onClick={Dropdown2}>
                      <span><FontAwesomeIcon icon={faChevronUp} /></span>
                    </button> 
                  </div>
                  <div className='dropDown2_1_1_2'> 
                    <div className='dropDown2_1_1_2_1'>
                      <span style={{ fontWeight: 700, paddingLeft:10}}>1</span>
                      <span style={{color:'red', fontSize:12, }}>new</span>
                      <span style={{fontSize:14 }}>브레드박스</span>
                    </div>
                    <div className='dropDown2_1_1_2_2'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>2</span>
                      <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                      <span style={{fontSize:14 }}>붙이는 커튼</span>
                    </div>          
                    <div className='dropDown2_1_1_2_3'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>3</span>
                      <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                      <span style={{fontSize:14 }}>먼지없는 러그</span>
                    </div>
                    <div className='dropDown2_1_1_2_4'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>4</span>
                      <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                      <span style={{fontSize:14 }}>이케아 트롤리</span>
                    </div>
                    <div className='dropDown2_1_1_2_5'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>5</span>
                      <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                      <span style={{fontSize:14 }}>무타공 벽선반</span>
                    </div>
                    <div className='dropDown2_1_1_2_6'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>6</span>
                      <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                      <span style={{fontSize:14 }}>추천코드</span>
                    </div>
                    <div className='dropDown2_1_1_2_7'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>7</span>
                      <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                      <span style={{fontSize:14 }}>타일 카페트</span>
                    </div>
                    <div className='dropDown2_1_1_2_8'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>8</span>
                      <span style={{color:'red', fontSize:12, }}>new</span>
                      <span style={{fontSize:14 }}>필웰</span>
                    </div>
                    <div className='dropDown2_1_1_2_9'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>9</span>
                      <span style={{color:'red', fontSize:12, }}>new</span>
                      <span style={{fontSize:14 }}>밧드아</span>
                    </div>
                    <div className='dropDown2_1_1_2_10'>
                      <span style={{ fontWeight: 700, paddingLeft:10 }}>10</span>
                      <span style={{color:'red', fontSize:12, }}>new</span>
                      <span style={{fontSize:14 }}>로보락</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
    </div>
  );
};

function LookforSlider() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
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

  
  return (
    <div className='B_lookfor_h3_1_19'>
      <Slider ref={sliderRef} {...settings}>
     
       
         
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                        <div className='B_lookfor_h3_1_2_15'>
                        <img src='lookfor_picture\lookfor1.avif'></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User1</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor_h3_1_2_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor_h3_1_2_2_path2'></path>
                                  <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor_h3_1_2_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    
                      <a></a>
                    </div>
                    </div>

                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>
                        <img src='lookfor_picture\lookfor2.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User2</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                <path className='B_lookfor_h3_1_2_2_path2'></path>
                                <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor_h3_1_2_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      
                      <a></a>
                    </div>
                    </div>
                 
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>
                        <img src='lookfor_picture\lookfor3.gif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User3</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                <path className='B_lookfor_h3_1_2_2_path2'></path>
                                <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                  <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        
                      </div>
                      </div>
                      <a></a>
                    </div>
                    </div>
                 
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>
                        <img src='lookfor_picture\lookfor4.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User4</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                <path className='B_lookfor_h3_1_2_2_path2'></path>
                                <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                    </div>
                  
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>
                        <img src='lookfor_picture\lookfor5.avif'></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User5</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g >
                                <path className='B_lookfor_h3_1_2_2_path2'></path>
                                <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                    </div>
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>

                        <img src='lookfor_picture\lookfor6.avif'></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User6</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path style={{fill:"#35C5F0", fillRule:"evenodd", d:"M20 2.75H4a1 1 0 0 0-1 1v17.073a.5.5 0 0 0 .732.442l7.803-4.096a1 1 0 0 1 .93 0l7.803 4.096a.5.5 0 0 0 .732-.442V3.75a1 1 0 0 0-1-1", clipRule:"evenodd"}}></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <g style={{fill:"#fff"}}>
                                <path className='B_lookfor_h3_1_2_2_path2'></path>
                                <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood></feFlood>
                                    <feColorMatrix></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur></feGaussianBlur>
                                    <feColorMatrix></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                    </div>

                  
                    <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>
                        <img src='lookfor_picture\lookfor8.avif'  ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User7</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor_h3_1_2_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor_h3_1_2_2_path2'></path>
                                  <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor_h3_1_2_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                    </div>

                    
                  <div className='B_lookfor_h3_1_2'>
                      <div className='B_lookfor_h3_1_2_1'>
                      <div className='B_lookfor_h3_1_2_15'>

                        <img src='lookfor_picture\lookfor1.avif' ></img>
                        <div className='B_lookfor_h3_1_2_1_1'>
                          <div className='B_lookfor_h3_1_2_1_1_1'>
                            <div className='B_lookfor_h3_1_2_1_1_1_1'>
                              <img src='lookfor_picture\lookfor_mini.avif'></img>
                            </div>
                            <span>User8</span>
                          </div>
                        </div>
                        <div className='B_lookfor_h3_1_2_2'>
                          <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor_h3_1_2_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor_h3_1_2_2_path2'></path>
                                  <path className='B_lookfor_h3_1_2_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor_h3_1_2_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      <a></a>
                    </div>
                    </div>
                  

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
              </div>
  )
};

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

function Todaydeal_Slider() {
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
    <div className='Todaydeal_C_1_1'>
      <Slider ref={sliderRef} {...settings}>
      <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
            
                              <img src='Todaydeal\Todaydeal_1.avif'></img>
                             
                              <button type='button' >
                                <svg width={24} height={24} viewBox='0 0 24 24'>
                                  <defs>
                                    <path
                                    d='M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z'></path>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} >
                              
                                    </filter>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} ></filter>

                                  </defs>
                                  <g fill='none' fillRule='nonzero' transform='matrix(1 0 0 -1 0 24)'>
                                    <use fill='#000'></use>
                                    <use fill='#fff' fillOpacity={.4}></use>
                                    <use fill='#000'></use>
                                    <path stroke='#fff' d='M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z'></path>
                                  </g>
                                </svg>
                                <svg width={24} height={24} viewBox='0 0 24 24' >
                                  <path fill='#fff' fillRule='nonzero' d='M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z' fillOpacity={0.5}></path>
                                </svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div><Counter/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>아이러브베베</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>[최종17,910원/82초고평량]시그니앙 골드퍼플 70매 20팩 캡형 아기물티슈</span>
                            </h1>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>42
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>22,900</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg width="13.2" height="13.2" viewBox="0 0 24 24">
                                  <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                  </svg>
                                <strong>4.9</strong>
                                리뷰 630
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span4'>
                              <img src='Todaydeal\오늘출발.png'></img>
                            </span>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span5'>평일 21:00까지 결제시</span>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                              <svg aria-label='무료배송' width={47} height={20} viewBox='0 0 47 20'>
                                <g fill='none' fillRule='evenodd'>
                                  <rect width={47} height={20} fill='#000' fillOpacity={.07} fillRule='nonzero' rx={4}></rect>
                                  <path fill='#757575' d='M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z'></path>
                                </g>
                              </svg>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div3'>
                              <img src='Todaydeal\card-promotion-badge.png'></img>
                              <span>최대 10% 결제할인</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              
                              <img src='Todaydeal\Todaydeal_2.avif'></img>
                              <button type='button' >
                                <svg width={24} height={24} viewBox='0 0 24 24'>
                                  <defs>
                                    <path
                                    d='M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z'></path>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} >
                              
                                    </filter>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} ></filter>

                                  </defs>
                                  <g fill='none' fillRule='nonzero' transform='matrix(1 0 0 -1 0 24)'>
                                    <use fill='#000'></use>
                                    <use fill='#fff' fillOpacity={.4}></use>
                                    <use fill='#000'></use>
                                    <path stroke='#fff' d='M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z'></path>
                                  </g>
                                </svg>
                                <svg width={24} height={24} viewBox='0 0 24 24' >
                                  <path fill='#fff' fillRule='nonzero' d='M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z' fillOpacity={0.5}></path>
                                </svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div><Counter/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>헤드앤숄더</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>두피 케어! 헤드앤숄더 특가 모음딜</span>
                            </h1>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>28
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>37900 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg width="13.2" height="13.2" viewBox="0 0 24 24">
                                <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                </svg>
                                <strong>4.8</strong>
                                리뷰 5,739
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                            <svg aria-label='무료배송' width={47} height={20} viewBox='0 0 47 20'>
                                <g fill='none' fillRule='evenodd'>
                                  <rect width={47} height={20} fill='#000' fillOpacity={.07} fillRule='nonzero' rx={4}></rect>
                                  <path fill='#757575' d='M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z'></path>
                                </g>
                              </svg>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div3'>
                              <img src='Todaydeal\card-promotion-badge.png'></img>
                              <span>최대 15% 결제할인</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                            
                              <img src='Todaydeal\Todaydeal_3.avif'></img>
                              <button type='button' >
                                <svg width={24} height={24} viewBox='0 0 24 24'>
                                  <defs>
                                    <path
                                    d='M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z'></path>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} >
                              
                                    </filter>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} ></filter>

                                  </defs>
                                  <g fill='none' fillRule='nonzero' transform='matrix(1 0 0 -1 0 24)'>
                                    <use fill='#000'></use>
                                    <use fill='#fff' fillOpacity={.4}></use>
                                    <use fill='#000'></use>
                                    <path stroke='#fff' d='M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z'></path>
                                  </g>
                                </svg>
                                <svg width={24} height={24} viewBox='0 0 24 24' >
                                  <path fill='#fff' fillRule='nonzero' d='M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z' fillOpacity={0.5}></path>
                                </svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div><Counter/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>미리내 농수산</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>[1/3 단하루] 대추 방울토마토 로얄과 2Kg 5Kg 당일수확 산지직송</span>
                            </h1>
                    
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>47
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>15.100</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg width="13.2" height="13.2" viewBox="0 0 24 24" >
                                <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                </svg>
                                <strong>4.8</strong>
                                리뷰 24
                              </p>
                            </div>
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                            <svg aria-label='무료배송' width={47} height={20} viewBox='0 0 47 20' >
                                <g fill='none' fillRule='evenodd'>
                                  <rect width={47} height={20} fill='#000' fillOpacity={.07} fillRule='nonzero' rx={4}></rect>
                                  <path fill='#757575' d='M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z'></path>
                                </g>
                              </svg>
                            <svg aria-label='특가' width={30} height={20} viewBox='0 0 30 20'>
                              <rect width={30} height={20} fill='#F77' rx={4}></rect>
                              <path 
                              fill='#fff'
                              d='M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z'></path>
                            </svg>
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              
                              <img src='Todaydeal\Todaydeal_4.avif'></img>
                              <button type='button' >
                                <svg width={24} height={24} viewBox='0 0 24 24'>
                                  <defs>
                                    <path
                                    d='M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z'></path>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} >
                              
                                    </filter>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} ></filter>

                                  </defs>
                                  <g fill='none' fillRule='nonzero' transform='matrix(1 0 0 -1 0 24)'>
                                    <use fill='#000'></use>
                                    <use fill='#fff' fillOpacity={.4}></use>
                                    <use fill='#000'></use>
                                    <path stroke='#fff' d='M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z'></path>
                                  </g>
                                </svg>
                                <svg width={24} height={24} viewBox='0 0 24 24' >
                                  <path fill='#fff' fillRule='nonzero' d='M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z' fillOpacity={0.5}></path>
                                </svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div><Counter/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>알텐바흐</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>1/3일! 단하루 32% 홈쇼핑 완판! 알텐바흐 디펜더스 주방용품 모음전</span>
                            </h1>
                          
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>60
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>73,500 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg width="13.2" height="13.2" viewBox="0 0 24 24" >
                                <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                </svg>
                                <strong>4.7</strong>
                                리뷰 626
                              </p>
                            </div>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                            <svg aria-label='무료배송' width={47} height={20} viewBox='0 0 47 20' >
                                <g fill='none' fillRule='evenodd'>
                                  <rect width={47} height={20} fill='#000' fillOpacity={.07} fillRule='nonzero' rx={4}></rect>
                                  <path fill='#757575' d='M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z'></path>
                                </g>
                              </svg>
                            </span>
                          
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              
                              <img src='Todaydeal\Todaydeal_5.avif'></img>
                              <button type='button' >
                                <svg width={24} height={24} viewBox='0 0 24 24'>
                                  <defs>
                                    <path
                                    d='M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z'></path>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} >
                              
                                    </filter>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} ></filter>

                                  </defs>
                                  <g fill='none' fillRule='nonzero' transform='matrix(1 0 0 -1 0 24)'>
                                    <use fill='#000'></use>
                                    <use fill='#fff' fillOpacity={.4}></use>
                                    <use fill='#000'></use>
                                    <path stroke='#fff' d='M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z'></path>
                                  </g>
                                </svg>
                                <svg width={24} height={24} viewBox='0 0 24 24' >
                                  <path fill='#fff' fillRule='nonzero' d='M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z' fillOpacity={0.5}></path>
                                </svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div><Counter/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>애경</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>리큐/2080/르샤트라 세탁세제/유연제 등 할인 모음</span>
                            </h1>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>44
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>19,500 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg width="13.2" height="13.2" viewBox="0 0 24 24" >
                                <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                </svg>
                                <strong>4.8</strong>
                                리뷰 8,072
                              </p>
                            </div>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                            <svg aria-label='무료배송' width={47} height={20} viewBox='0 0 47 20' >
                                <g fill='none' fillRule='evenodd'>
                                  <rect width={47} height={20} fill='#000' fillOpacity={.07} fillRule='nonzero' rx={4}></rect>
                                  <path fill='#757575' d='M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z'></path>
                                </g>
                              </svg>
                            </span>
                          
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className='Todaydeal_C_1_1_li_1'>
                      <article>
                        <a></a>
                        <div className='Todaydeal_C_1_1_li_1_1'>
                          <div className='Todaydeal_C_1_1_li_1_1_1'>
                            <div className='Todaydeal_C_1_1_li_1_1_1_1'>
                              
                              <img src='Todaydeal\Todaydeal_6.avif'></img>
                              <button type='button' >
                                <svg width={24} height={24} viewBox='0 0 24 24'>
                                  <defs>
                                    <path
                                    d='M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z'></path>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} >
                              
                                    </filter>
                                    <filter width={"150%"} height={"150%"} x="-25%" y={"-25%"} filterUnits={"objectBoundingBox"} ></filter>

                                  </defs>
                                  <g fill='none' fillRule='nonzero' transform='matrix(1 0 0 -1 0 24)'>
                                    <use fill='#000'></use>
                                    <use fill='#fff' fillOpacity={.4}></use>
                                    <use fill='#000'></use>
                                    <path stroke='#fff' d='M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z'></path>
                                  </g>
                                </svg>
                                <svg width={24} height={24} viewBox='0 0 24 24' >
                                  <path fill='#fff' fillRule='nonzero' d='M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z' fillOpacity={0.5}></path>
                                </svg>
                              </button>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_2'></div>
                              <div className='Todaydeal_C_1_1_li_1_1_1_1_3'>
                                <div><Counter/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='Todaydeal_C_1_1_li_1_2'>
                          <div className='Todaydeal_C_1_1_li_1_2_1'>
                            <h1>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span1'>창신리빙</span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span2'>[딱하루10,155원] 국산 냉동밥 보관용기 9P세트 (전자레인지 OK) / 냉장고 정리</span>
                            </h1>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span3'>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_1'>24
                                <span>%</span>
                              </span>
                              <span className='Todaydeal_C_1_1_li_1_2_1_span3_2'>14,300 외</span>
                            </span>
                            <div className='Todaydeal_C_1_1_li_1_2_1_div'>
                              <p>
                                <svg width="13.2" height="13.2" viewBox="0 0 24 24" >
                                <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                </svg>
                                <strong>4.6</strong>
                                리뷰 92,238
                              </p>
                            </div>
                            
                            <span className='Todaydeal_C_1_1_li_1_2_1_span6'>
                            <svg aria-label='무료배송' width={47} height={20} viewBox='0 0 47 20' >
                                <g fill='none' fillRule='evenodd'>
                                  <rect width={47} height={20} fill='#000' fillOpacity={.07} fillRule='nonzero' rx={4}></rect>
                                  <path fill='#757575' d='M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z'></path>
                                </g>
                              </svg>
                            </span>
                          
                          </div>
                        </div>
                      </article>
                    </div>
                   
                  <div>
                    <div className='Todaydeal_C_last'>
                        <a>
                          <div className='Todaydeal_C_last_1'>
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                          </div>
                          <div className='Todaydeal_C_last_2'>더보기</div>
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

function Counter() {
  const [count, setCount] = useState(10 * 60 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => {
        if(prevCount <= 0) {
          clearInterval(id);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(id);
    
  }, []);
  
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2,'0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };
  return <h1>{formatTime(count)} 남음</h1>;
}


const ScrollHideHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  
  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handelClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)
    && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current){
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className='sticky-container' >
    <div className='s-c_layout'
    style={{ position: "fixed",
      // top: 80,
      width: "100%",
      transition: "transform 0.3s ease",
      transform: isVisible ? "translateY(0)" :" translateY(-250%)",
      backgroundColor: "#fff",
      borderbottom: "1px solid #EAEDEF",
      zIndex: 1100}}>
          <div className='s-c_4'>
            <div  className='s-c_4_1'>
              <nav className='s-c_4_nav'>
                <span>
                  <div className='s-c_4_1_1'>
                    <a>  
                    <div className="s-c_4_1_1_2">
                      <p>
                      홈
                      </p>
                    </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_2'>
                    <a>
                      <div className='s-c_4_1_2_1'>
                        <p>추천</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_3'>
                    <a>
                      <div className='s-c_4_1_3_1'>
                        <p>#채널</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_4'>
                    <a>
                      <div className='s-c_4_1_4_1'>
                        <p>집들이</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_5'>
                    <a>
                      <div className='s-c_4_1_5_1'>
                        <p>집사진</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_6'>
                    <a>
                      <div className='s-c_4_1_6_1'>
                        <p>3D인테리어</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_7'>
                    <a>
                      <div className='s-c_4_1_7_1'>
                        <p>살림수납</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_8'>
                    <a>
                      <div className='s-c_4_1_8_1'>
                        <p>반려동물</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_9'>
                    <a>
                      <div className='s-c_4_1_9_1'>
                        <p>육아</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_10'>
                    <a>
                      <div className='s-c_4_1_10_1'>
                        <p>홈스토랑</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_11'>
                    <a>
                      <div className='s-c_4_1_11_1'>
                        <p>플랜테리어</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_12'>
                    <a>
                      <div className='s-c_4_1_12_1'>
                        <p>콜렉터블</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_13'>
                    <a>
                      <div className='s-c_4_1_13_1'>
                        <p>캠핑</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_14'>
                    <a>
                      <div className='s-c_4_1_14_1'>
                        <p>취미</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_15'>
                    <a>
                      <div className='s-c_4_1_15_1'>
                        <p>핫플레이스</p>
                      </div>
                    </a>
                  </div>
                </span>
                <span>
                  <div className='s-c_4_1_16'>
                    <a>
                      <div className='s-c_4_1_16_1'>
                        <p>이벤트</p>
                      </div>
                    </a>
                  </div>
                </span>
              </nav>
              
              <span className='s-c_4_span' >
              
              
                  {/* 드롭다운 */}
                  <button type='button' onClick = {toggleDropdown} >
                  
                  <span >  
                  <FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                  </span>

              <div ref={dropdownRef} className={`dropDown ${isOpen ? "open" : ""}`}>
                <div className='dropDown_1'>
                
                 
               
                  <div className='dropDown_1_1'>
                  <span className='dropDown_1_1_0'><a>살림수납</a></span>
                  <span className='dropDown_1_1_1'><a>반려동물</a></span>
                  <span className='dropDown_1_1_2'><a>육아</a></span>
                  <span className='dropDown_1_1_3'><a>홈스토랑</a></span>
                  <span className='dropDown_1_1_4'><a>플랜테리어</a></span>
                  <span className='dropDown_1_1_5'><a>콜렉터블</a></span>
                    <span>
                      <a>캠핑</a>
                    </span>
                    <span><a>취미</a></span>
                    <span><a>핫플레이스</a></span>
                    <span><a>이벤트</a></span>
                 
                  </div>
                </div>

              </div>
              
            </div>
            
            {/* <div className='real_vertical'> */}
     
                <VerticalSlider />
             
             {/* </div> */}
          </div>
        </div>
        </div>
  )
}


function Header() {

  return (
    <header>
      <div className='sticky-container' style={{height: 80.75}}>
        <div className='sticky-container_1'>
         <div className='sticky-container_1-1'>
          <div className='sticky-container_1-1_1'>
            <button type='button'>
              <span><FontAwesomeIcon icon={faBars} /></span>
            </button>
          </div>
          <div className='logo'>
            <a>
            <img src="오늘의 집 logo.jpg" width="71" height="28"></img>
            </a>
          </div>

          <div className='logo_N'>
            <a>
              <span style={{color:"#35C5F0"}}>커뮤니티</span>
            </a>
            <a>
              <span>쇼핑</span>
            </a>
            <a>
              <span>인테리어/생활</span>
            </a>
          </div>

         
         <div className='sticky-container_2'>
          <div className='sticky-container_2_1'>
            <div className='sticky-container_2_1_1'>
              <div className='sticky-container_2_1_1_1'>
                <div className='sticky-container_2_1_1_1_1'>
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                  <input 
                    type='text' 
                    placeholder='통합검색' 
                    autoComplete='off' 
                    aria-autocomplete='list'>
                  </input>
                  <div className='sticky-container_2_1_1_1_1_1'></div>
                </div>
              </div>
              
            </div>
            <div className='sticky-container_2_1_2'>
              <button type='button'>
                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
              </button>
            </div>
            <a className='sticky-container_2_1_3a'>
              <span><FontAwesomeIcon icon={faCartShopping}/></span>
            </a>
            <div className='sticky-container_2_1_4'>
              <div className='sticky-container_2_1_4_1'>
                <a className='sticky-container_2_1_4_1_a1'>로그인</a>
                <a className='sticky-container_2_1_4_1_a2'>회원가입</a>
                <a className='sticky-container_2_1_4_1_a3'>고객센터</a>
              </div>
              <span className='sticky-container_2_1_4_span'>
                <button role='button' type='button'>
                  <span className='sticky-container_2_1_4_2'>글쓰기</span>
                  <span className='sticky-container_2_1_4_3'><FontAwesomeIcon icon={faChevronDown} /></span>
                </button>
              </span>
            </div>
          </div>
          
          </div>
          
         </div>
      </div>
      </div>
      
        <ScrollHideHeader/>
     
    </header>
  );

}


function Body() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section>
      <div className='B_mains'>
        <div className='B_main'>
          <div className='B_main1'>
            <section>
              <a >
                <img className='B_main_section_a_img' src='오늘의집 main picture.avif'></img>
                
                <div className='B_main1_1'>
                  
                  <p className='B_main1_1_p'>아이 있는 집 맞나요? 모던함이 돋보이는 집</p>
                  <span className='B_main1_1_s'>
                    <img src='B_main\B_main_small.avif'></img>
                    <span>오늘의집에디터</span>
                  </span>
                </div>
              </a>
            </section>
          </div>
          <div className='B_main2'>
              <SimpleSlider/>
          </div>
          <div className='B_main3'>
              <SimpleSlider2/>
          </div>
        </div>
        <div className='B_nav'>
          <div className='B_nav_1'>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\오늘의집 아이콘1.avif'></img>
                <span>연말빅세일</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\오늘의딜.png'></img>
                <span>오늘의딜</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\집들이.avif'></img>
                <span>집들이</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\행운출첵.avif'></img>
                <span>행운출첵</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\살림살이.png'></img>
                <span>살림살이</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\취향의발견.png'></img>
                <span>취향의발견</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\오마트.png'></img>
                <span>오마트</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\빠른배송.png'></img>
                <span>빠른배송</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\리모델링.avif'></img>
                <span>리모델링</span>
              </a>
            </div>
            <div className='B_nav_2' >
              <a >
                <img src='body_icon\입주청소.avif'></img>
                <span>입주청소</span>
              </a>
            </div>
          </div>
          
        </div>
        <div className='B_lookfor'>
          <div className='B_lookfor_h'>
            <div className='B_lookfor_h1'>
              <div className='B_lookfor_h1_1'>
                <strong>이런 사진 찾고 있나요?</strong>
              </div>
              <div className='B_lookfor_h1_2'>
                <span>좋아하실만한 인테리어 콘텐츠를 추천드려요</span>
              </div>
            </div>
            <div className='B_lookfor_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='B_lookfor_h3'>
            <div className='B_lookfor_h3_1'>

              <LookforSlider/>

            </div>
          </div>
        </div>
        <div className='B_lookfor2'>
          <div className='B_lookfor2_1h'>
            <div className='B_lookfor2_1'>
              <div className='B_lookfor2_1_1'>
                <strong>이주의 집들이! 발굴하러 가볼까요?</strong>
              </div>
            </div>
            <div className='B_lookfor_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='B_lookfor2_2'>
            <div className='B_lookfor2_2_1'>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                 
                  <img src='jipdlei\집들이1.avif' />
                  
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                  <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor2_2_1_1_1_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor2_2_1_1_1_2_path2'></path>
                                  <path className='B_lookfor2_2_1_1_1_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor2_2_1_1_1_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>식물과 컬러로 포인트! </span>
                    공간 디자이너 부부와 아이가 사는 집
                  </p>
                </div>
                <a></a>
              </div>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이2.avif' style={{height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                  <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor2_2_1_1_1_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor2_2_1_1_1_2_path2'></path>
                                  <path className='B_lookfor2_2_1_1_1_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor2_2_1_1_1_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>블랙&그레이톤으로 </span>
                    정돈된 호텔의 무드를 느낄 수 있는 집
                  </p>
                </div>
                <a></a>
              </div>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이3.webp' style={{width: 268 ,height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                  <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor2_2_1_1_1_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor2_2_1_1_1_2_path2'></path>
                                  <path className='B_lookfor2_2_1_1_1_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor2_2_1_1_1_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>공간 분위기 바꾸기? </span>
                    가구&소품 재배치로 어렵지 않게 완성!
                  </p>
                </div>
                <a></a>
              </div>
              <div className='B_lookfor2_2_1_1'>
                <div className='B_lookfor2_2_1_1_1'>
                  <img src='jipdlei\집들이4.avif' style={{height:179}}></img>
                  <div className='B_lookfor2_2_1_1_1_1'>
                    <div className='B_lookfor2_2_1_1_1_1_1'></div>
                  </div>
                  <div className='B_lookfor2_2_1_1_1_2'>
                  <button type='button' >
                            <span>
                              <svg style={{width: 24, height: 24, fill:'none'}}>
                                <path className='B_lookfor2_2_1_1_1_2_path'></path>
                                </svg>
                              <svg style={{width: 24, height: 24, fill:'none', opacity:1}}>
                                <g >
                                  <path className='B_lookfor2_2_1_1_1_2_path2'></path>
                                  <path className='B_lookfor2_2_1_1_1_2_path3'></path>
                                </g>
                                <defs>
                                  <clipPath>
                                    <path className='B_lookfor2_2_1_1_1_2_path4'></path>
                                  </clipPath>
                                  <filter>
                                    <feFlood style={{floodOpacity:0}}></feFlood>
                                    <feColorMatrix style={{values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}></feColorMatrix>
                                    <feOffset style={{dy: 2}}></feOffset>
                                    <feGaussianBlur style={{stdDeviation: 2.5}}></feGaussianBlur>
                                    <feColorMatrix style={{values:"0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"}}></feColorMatrix>
                                    <feBlend></feBlend>
                                    <feBlend></feBlend>
                                  </filter>
                                </defs>
                                </svg>
                            </span>
                          </button>
                  </div>
                </div>
                <div className='B_lookfor2_2_1_1_2'>
                  <p>
                    <span>30평대 같은 </span>
                    대면형 주방을 실현한, 18평 신희타 리모델링기
                  </p>
                </div>
                <a></a>
              </div>
            </div>
          </div>
        </div>
        <div className='Categroy_'>
          <div className='Category_1h'>
            <div className='Category_1h_1'>
              <div className='Category_1h_1_1'>
                <strong>카테고리별 상품 찾기</strong>
              </div>
            </div>
            <div className='Category_1h_2'></div>
          </div>
          <div className='Category_C'>
            <div className='Category_C_1'>
              <div className='Category_C_1_1'>
               <Categroy_Slider/>
              </div>
              
            </div>
          </div>
        </div>
        <div className='Todaydeal'>
          <div className='Todaydeal_h'>
            <div className='Todaydeal_h_1'>
              <div className='Todaydeal_h_1_1'>
                <strong>오늘의 딜</strong>
              </div>
            </div>
            <div className='Todaydeal_h_2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='Todaydeal_C'>
            <div className='Todaydeal_C_1'>
              <div className='Todaydeal_C_1_1'>
                <Todaydeal_Slider/>
              </div>
              
            </div>
          </div>
        </div>
        <div className='UserReview'>
          <div className='UserReview_h'>
            <div className='UserReview_h1'>
              <div className='UserReview_h1_1'>
                <strong>유저들의 인테리어 시공 리뷰</strong>
              </div>
            </div>
            <div className='UserReview_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='UserReview_c'>
            <div className='UserReview_c_1'>
              <div className='UserReview_c_1_1'>
                <div className='UserReview_c_1_1_1'>
                  <img className='UserReview_img1' src='UserReview\유저리뷰_1.avif'></img>
                  <div className='UserReview_c_1_1_1_1'>
                    <div className='UserReview_c_1_1_1_1_1'></div>
                  </div>
                </div>
                <div className='UserReview_c_1_1_2'>
                  <p className='UserReview_c_1_1_2_p1'>디자인코드인테리어</p>
                  <p className='UserReview_c_1_1_2_p2'>제가 여러 업체 실측&상담을 한 끝에 디자인 코드를 선택했습니다
모든면에서 다 좋았지만!
정해진 예산에 최대한으로 맞춰 도와주셨구
무엇보다 소통이 정말 잘됐습니다
전체공사라 의논할게 정말 많았는데 밤낮 가리지않고
소통을 잘 해주셔서 정말 만족스러운 결과물이 나왔습니다
제 지인들께도 무조건 추천 할꼬에욧</p>
                </div>
                {/* <a className='UserReview_c_1_1_a'></a> */}
              </div>
              <div className='UserReview_c_1_2'>
              <div className='UserReview_c_1_2_1'>
                  <img className='UserReview_img2' src='UserReview\유저리뷰_2.avif' ></img>
                  <div className='UserReview_c_1_2_1_1'>
                    <div className='UserReview_c_1_2_1_1_1'></div>
                  </div>
                </div>
                <div className='UserReview_c_1_2_2'>
                  <p className='UserReview_c_1_2_2_p1'>요즘인테리어</p>
                  <p className='UserReview_c_1_2_2_p2' >저희는 구축 아파트를 계약해서 무조건 올수리 인테리어를 생각했던 예비 신혼 부부입니다 여러 업체를 상담했지만 인테리어는 처음이라 판단이 잘 안섰는데 현실적으로 실현 가능한 인테리어를 고민해주시고 소통도 가장 잘된다고 느꼈던 권지헌 대표님과 최종 계약을 진행했습니다 결과적으로는 기대하던 것 보다도 훨씬 인테리어가 잘 나와서 너무나도 만족스럽습니다☺️ 우선 권지헌 대표님과  진행하면서 가장 만족스러웠던 점은 소통이었습니다 저희가 업체 선정을 일찍해서 첫미팅부터 공사 완성까지 약 5-6개월 정도가 걸렸는데 그 기간동안 단 한번도 연락 문제없이 바로바로 피드백을 주시고 더 나은 의견이 있으면 반영해서 수정해주셔서 더 좋은 인테리어가 나올 수 있었던 것 같습니다 그리고 대표님께서 젊은 감각을 가지고 해주셔서 그런지 타업체 분들 보다도 제가 원하는 그림을 대충 설명드려도 너무도 정확하고 빠르게 파악해주시고 제 취향에 맞게 인테리어적으로 제안도 많이 해주셔서 어려웠던 인테리어를 끝까지 잘 마무리할 수 있었습니다 정말 공사들어가는 그날 그날 바꾼 부분들 마저도 완벽했어요!! 공사뿐만 아니라 공사를 끝내고도 인테리어 업체의 역할이 중요하다고 생각하는데 그 부분에서도 너무 완벽하셨습니다🥲 문제가 있는 부분들은 그때 그때 다 처리해주시고 입주청소업체와도 문제가 있어서 혼란스러운 상황도 있었는데 그 부분들도 다 잘 처리할 수 있도록 도와주셨어요 대표님뿐만 아니라 공사해주시는 공사 팀 분들의 실력도 물론 출중하셔서 진짜 솔직히 거의 문제가 될 부분도 없었어요..아직은 가구가 덜 들어와서 조금 부족해보일 수 있지만 인테리어 자체를 너무 완벽하게 해주셔서 앞으로 채울 모습들이 더 기대가 됩니다 집 준비하면서 다른 신경쓸 것도 많아서 업체랑의 문제가 많으면 더 힘들었을텐데 대표님과 진행한 덕분에 잘 마무리할 수 있었구요 앞으로 주변에 인테리어 고민하시면 무조건 추천드릴 예정이에요 저희의 첫 집을 맡길 수 있어서 정말 감사했습니다~!</p>
                </div>
                {/* <a></a> */}
              </div>
              <div className='UserReview_c_1_3'>
                <div className='UserReview_c_1_3_1'>
                  <img className='UserReview_img3' src='UserReview\유저리뷰_3.avif'></img>
                  <div className='UserReview_c_1_3_1_1'>
                    <div className='UserReview_c_1_3_1_1_1'></div>
                  </div>
                </div>
                <div className='UserReview_c_1_3_2'>
                  <p className='UserReview_c_1_3_2_p1'>ABLY_design</p>
                  <p className='UserReview_c_1_3_2_p2'>구○빈 팀장님께서 소통도 원할히 잘 해주시고 젊은 감각으로  이런저런 부자재들을 트렌디한 것으로 잘 추천해주셨습니다. 첫 미팅때부터 3D 도면 준비해서 설명해주시니 이해도 잘 되고 저희 예산에 최대한 맞춰주시려고 애쓰셨습니다. 공사 후에도 A/S 요청 편히 받아주시고 최대한 불편함 없도록 신경써 주셨습니다. </p>
                </div>
                {/* <a></a> */}
                </div>
            </div>
          </div>
        </div>
        <div className='Exhibition'>
          <div className='Exhibition_h'>
            <div className='Exhibition_h1'>
              <div className='Exhibition_h1_1'>
                <strong>오늘의 기획전</strong>
              </div>
            </div>
            <div className='Exhibition_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='Exhibition_c'>
            <div className='Exhibition_c1'>
              
                <Exhibition_Slider/>

              
            </div>
          </div>
        </div>
        <div className='Best'>
          <div className='Best_h'>
            <div className='Best_h1'>
              <div className='Best_h1_1'>
                <strong>베스트</strong>
              </div>
            </div>
            <div className='Best_h2'>
              <button type='button'>더보기</button>
            </div>
          </div>
          <div className='Best_c'>
            <div className='Best_c1'>
              <div className='Best_c1_1'>
          
                  <Best_Slider/>
        
                
              </div>
            </div>
            <div className='Best_c2'>
              <article> 
                <a></a>
                <div className='Best_c2_1'>
                  <div className='Best_c2_1_1'>
                    <div className='Best_c2_1_1_1'>
                      <svg width={26} height={30} fill='none'>
                        <path fillRule='evenodd' clipRule={"evenodd"} d='m13 24.25-13 5V0h26v29.25l-13-5Z' fill='rgba(53, 197, 240, 0.86)'></path>
                      </svg>
                      <span className='Best_c2_1_1_1_span'>1</span>                    
                      </div>
                    <button type='button'>
                      <span className='Best_c2_1_1_span'>
                        <svg width={24} height={24} fill='none'>
                          <g fill='#fff'>
                            <path d='M4.3 4.05V19.5l6.63-3.482a2.3 2.3 0 0 1 2.14 0l6.63 3.481V4.05zM4 2.75h16a1 1 0 0 1 1 1v17.073a.5.5 0 0 1-.732.442l-7.803-4.096a1 1 0 0 0-.93 0l-7.803 4.096A.5.5 0 0 1 3 20.824V3.75a1 1 0 0 1 1-1'></path>
                            <path fillOpacity={0.5} d='M4.3 4.05V19.5l6.63-3.482a2.3 2.3 0 0 1 2.14 0l6.63 3.481V4.05z'></path>
                          </g>
                          <defs></defs>
                        </svg>
                      </span>
                    </button>
                    <div className='Best_c2_1_1_2'>
                      <div className='Best_c2_1_1_2_1'>
                      </div>
                      <img src='best\best_1.avif' ></img>
                    </div>
                  </div>
                </div>
                <div className='Best_c2_2'>
                  <div className='Best_c2_2_1'>
                    <div className='Best_c2_2_1_1'>아엠홈</div>
                    <span>맞춤 비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)</span>
                  </div>
                  <div className='Best_c2_2_2'>
                    <span className='Best_c2_2_2_span1'>28
                      <span>%</span>
                    </span>
                    <span className='Best_c2_2_2_span2'>
                      16,800
                      <span></span>
                    </span>
                  </div>
                  <div className='Best_c2_2_3'>
                    <span className='Best_c2_2_3_span1'><svg width="13.2" height="13.2" viewBox="0 0 24 24">
                                  <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                  </svg></span>
                    <strong>4.7</strong>
                    <span className='Best_c2_2_3_span2'>리뷰 39,766</span>
                  </div>
                  <div className='Best_c2_2_4'>
                    <svg></svg>
                  </div>
                </div>
              </article>
              <article> 
                <a></a>
                <div className='Best_c2_11'>
                  <div className='Best_c2_11_1'>
                    <div className='Best_c2_11_1_1'>
                    <svg width={26} height={30} fill='none'>
                        <path fillRule='evenodd' clipRule={"evenodd"} d='m13 24.25-13 5V0h26v29.25l-13-5Z' fill='rgba(53, 197, 240, 0.86)'></path>
                      </svg>
                      <span className='Best_c2_11_1_1_span'>2</span>                       
                      </div>
                    <button type='button'>
                    <span className='Best_c2_1_1_span'>
                        <svg width={24} height={24} fill='none'>
                          <g fill='#fff'>
                            <path d='M4.3 4.05V19.5l6.63-3.482a2.3 2.3 0 0 1 2.14 0l6.63 3.481V4.05zM4 2.75h16a1 1 0 0 1 1 1v17.073a.5.5 0 0 1-.732.442l-7.803-4.096a1 1 0 0 0-.93 0l-7.803 4.096A.5.5 0 0 1 3 20.824V3.75a1 1 0 0 1 1-1'></path>
                            <path fillOpacity={0.5} d='M4.3 4.05V19.5l6.63-3.482a2.3 2.3 0 0 1 2.14 0l6.63 3.481V4.05z'></path>
                          </g>
                          <defs></defs>
                        </svg>
                      </span>
                    </button>
                    <div className='Best_c2_11_1_2'>
                      <div className='Best_c2_11_1_2_1'>
                        <div className='Best_c2_11_1_2_1_1'>
                          <img src='best\bestOnly.png'></img>
                        </div>
                      </div>
                      <div className='Best_c2_11_1_2_2'>
                      <img className='Best_c2_11_1_2_3' src='best\best_2.avif' ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Best_c2_22'>
                  <div className='Best_c2_22_1'>
                    <div className='Best_c2_22_1_1'>헬로우슬립</div>
                    <span>[최대15%쿠폰+사은품]부드러운 카스테라 워싱 향균 옥수수솜 사계절&한파용 차렵이불세트</span>
                  </div>
                  <div className='Best_c2_22_2'>
                    <span className='Best_c2_22_2_span1'>37
                      <span>%</span>
                    </span>
                    <span className='Best_c2_22_2_span2'>
                      35,900
                      <span></span>
                    </span>
                  </div>
                  <div className='Best_c2_22_3'>
                    <span className='Best_c2_22_3_span1'>
                    <svg width="13.2" height="13.2" viewBox="0 0 24 24">
                                  <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                  </svg>
                    </span>
                    <strong>4.8</strong>
                    <span className='Best_c2_22_3_span2'>리뷰 43,751</span>
                  </div>
                  <div className='Best_c2_22_4'>
                    <svg></svg>
                  </div>
                </div>
              </article>
              <article> 
                <a></a>
                <div className='Best_c2_111'>
                  <div className='Best_c2_111_1'>
                    <div className='Best_c2_111_1_1'>
                    <svg width={26} height={30} fill='none'>
                        <path fillRule='evenodd' clipRule={"evenodd"} d='m13 24.25-13 5V0h26v29.25l-13-5Z' fill='rgba(53, 197, 240, 0.86)'></path>
                      </svg>
                      <span className='Best_c2_111_1_1_span'>3</span>                       
                      </div>
                    <button type='button'>
                    <span className='Best_c2_1_1_span'>
                        <svg width={24} height={24} fill='none'>
                          <g fill='#fff'>
                            <path d='M4.3 4.05V19.5l6.63-3.482a2.3 2.3 0 0 1 2.14 0l6.63 3.481V4.05zM4 2.75h16a1 1 0 0 1 1 1v17.073a.5.5 0 0 1-.732.442l-7.803-4.096a1 1 0 0 0-.93 0l-7.803 4.096A.5.5 0 0 1 3 20.824V3.75a1 1 0 0 1 1-1'></path>
                            <path fillOpacity={0.5} d='M4.3 4.05V19.5l6.63-3.482a2.3 2.3 0 0 1 2.14 0l6.63 3.481V4.05z'></path>
                          </g>
                          <defs></defs>
                        </svg>
                      </span>
                    </button>
                    <div className='Best_c2_111_1_2'>
                      <div className='Best_c2_111_1_2_1'>
                        <div className='Best_c2_111_1_2_1_1'>
                          <img src='best\bestOnly.png'></img>
                        </div>
                      </div>
                      <div className='Best_c2_111_1_2_2'>
                      <img className='Best_c2_111_1_2_3' src='best\best_3.avif' ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Best_c2_222'>
                  <div className='Best_c2_222_1'>
                    <div className='Best_c2_222_1_1'>퀵슬립</div>
                    <span>Q4 유로탑 롤팩 매트리스 2size_적당푹신(롤팩)</span>
                  </div>
                  <div className='Best_c2_222_2'>
                    <span className='Best_c2_222_2_span1'>57
                      <span>%</span>
                    </span>
                    <span className='Best_c2_222_2_span2'>
                      299,900
                      <span></span>
                    </span>
                  </div>
                  <div className='Best_c2_222_3'>
                    <span className='Best_c2_222_3_span1'>
                    <svg width="13.2" height="13.2" viewBox="0 0 24 24">
                                  <path 
                                   fill='currentColor'
                                   fillRule='evenodd'
                                   d='M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z'>
                                  </path>
                                  </svg>
                    </span>
                    <strong>4.8</strong>
                    <span className='Best_c2_222_3_span2'>리뷰 16,581</span>
                  </div>
                  <div className='Best_c2_222_31'>
                    <img src='Todaydeal\오늘출발.png'></img>
                  </div>
                  <span className='Best_c2_222_31_span'>평일 12:00까지 결제시</span>
                  <div className='Best_c2_222_4'>
                  <svg aria-label='특가' width={30} height={20} viewBox='0 0 30 20'>
                              <rect width={30} height={20} fill='#F77' rx={4}></rect>
                              <path 
                              fill='#fff'
                              d='M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z'></path>
                            </svg>
                          
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className='footer_1'>
        <div className='footer_1_1'>
          <div className='footer_1_1_1'>
            <a>고객센터</a>
            <span><FontAwesomeIcon icon={faChevronRight} /></span>
          </div>
          <div className='footer_1_1_2'>
            <a>1670-0876</a>
            <time dateTime='09:00'>09:00</time>~
            <time dateTime='18:00'>18:00</time>
          </div>
          <div className='footer_1_1_3'>
            <div className='footer_1_1_3_1'>평일: 전체 문의 상담</div>
            <div className='footer_1_1_3_2'>토요일, 공휴일: 오늘의집 직접배송 주문건 상담</div>
            <div className='footer_1_1_3_3'>일요일: 휴무</div>
          </div>
          <div className='footer_1_1_4'>
            <button>카톡 상담(평일 09:00~18:00)</button>
            <a>이메일 문의</a>
          </div>
        </div>
        <div className='footer_1_2'></div>
        <div className='footer_1_3'>
          <a className='footer_1_3_a1'>회사소개</a>
          <a className='footer_1_3_a2'>채용정보</a>
          <a className='footer_1_3_a3'>이용약관</a>
          <a className='footer_1_3_a4' style={{fontWeight:700}}>개인정보 처리방침</a>
          <a className='footer_1_3_a5'>공지사항</a>
          <a className='footer_1_3_a6'>안전거래센터</a>
          <a className='footer_1_3_a7'>입점신청</a>
          <a className='footer_1_3_a8'>제휴/광고 문의</a>
          <a className='footer_1_3_a9'>시공파트너 안내</a>
          <a className='footer_1_3_a10' style={{fontWeight:700}}>파트너 개인정보 처리방침</a>
          <a className='footer_1_3_a11' >상품광고 소개</a>
          <a className='footer_1_3_a12'>고객의 소리</a>
        </div>
        <div className='footer_1_4'></div>
        <div className='footer_1_5'>
          <div className='footer_1_5_1'>
            <div className='footer_1_5_1_1'>
              <div className='footer_1_5_1_1_1'>
                <span>|</span>(주)버킷플레이스
              </div>
              <div className='footer_1_5_1_1_2'>
                <span>|</span>대표이사 이승재
              </div>
              <div className='footer_1_5_1_1_3'>
                <span>|</span><address>서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층</address>
              </div>
              <div className='footer_1_5_1_1_4'>
                <span>|</span><a>contact@bucketplace.net</a>
              </div>
              <div className='footer_1_5_1_1_5'>
                <span>|</span><span>사업자등록번호 119-86-91245</span>
                <a target='_blank'>사업자정보확인</a>
              </div>
              <div className='footer_1_5_1_1_6'>
                <span>|</span><span>통신판매업신고번호 제2018-서울서초-0580호</span>
              </div>
            </div>
          </div>
          <div className='footer_1_5_2'>
            <span>고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</span>
            <a target='_blank'>서비스가입사실확인</a>
          </div>
          <div className='footer_1_5_3'>
            <div className='footer_1_5_3_1'>
              <img src='footer\footer_isms.png'></img>
              <div className='footer_1_5_3_1_1'>
                <span>오늘의집 서비스 운영</span>
                <br></br>
                2024. 09. 08 ~ 2027. 09. 07
              </div>
            </div>
            <div className='footer_1_5_3_2'>
              <img src='footer\footer_iso27001 인증 마크.png'></img>
            </div>
            <div className='footer_1_5_3_3'>
              <a target='_blank'>
                <img src='footer\footer_pcr 인증마크.png'></img>
              </a>
            </div>
          </div>
          <div className='footer_1_5_4'>
          (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
          </div>
          <div className='footer_1_5_5'>
            <a>
              <svg className='footer_1_5_5_s1' width={24} height={24} viewBox='0 0 24 24' fill='none'>
                <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                <path d='M18.7086 8.63031C18.5472 8.02758 18.0736 7.55392 17.4709 7.39258C16.3783 7.09985 12.0002 7.09985 12.0002 7.09985C12.0002 7.09985 7.62199 7.09985 6.53062 7.39258C5.92789 7.55392 5.45423 8.02758 5.29289 8.63031C5.00016 9.72168 5.00016 12.0001 5.00016 12.0001C5.00016 12.0001 5.00016 14.2785 5.29289 15.3699C5.45423 15.9726 5.92789 16.4462 6.53062 16.6076C7.62199 16.9003 12.0002 16.9003 12.0002 16.9003C12.0002 16.9003 16.3783 16.9003 17.4697 16.6076C18.0724 16.4462 18.5461 15.9726 18.7074 15.3699C19.0002 14.2785 19.0002 12.0001 19.0002 12.0001C19.0002 12.0001 19.0002 9.72168 18.7074 8.63031H18.7086Z' fill='white'></path>
                <path d='M10.6013 14.0994L14.2396 11.9997L10.6013 9.8999V14.0994Z' fill='currentColor'></path>
              </svg>
            </a>
            <a>
              <svg className='footer_1_5_5_s2'width={24} height={24} viewBox='0 0 24 24' fill='none'>
                <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                <path d='M9.10061 5.04896C8.3558 5.0841 7.84718 5.20296 7.40253 5.37768C6.94235 5.55702 6.5523 5.79768 6.16422 6.18717C5.77614 6.57665 5.53715 6.96698 5.35907 7.42786C5.18673 7.87349 5.06997 8.38253 5.03707 9.12776C5.00417 9.87299 4.99689 10.1125 5.00053 12.0135C5.00417 13.9144 5.01257 14.1527 5.04869 14.8995C5.08425 15.6441 5.20269 16.1526 5.37741 16.5974C5.55703 17.0576 5.79742 17.4475 6.18704 17.8357C6.57666 18.2239 6.96671 18.4624 7.42871 18.6407C7.87392 18.8128 8.3831 18.9301 9.12819 18.9627C9.87328 18.9953 10.1131 19.0029 12.0135 18.9993C13.9139 18.9956 14.1531 18.9872 14.8997 18.9518C15.6464 18.9164 16.1522 18.7971 16.5971 18.6232C17.0573 18.4432 17.4475 18.2032 17.8354 17.8134C18.2234 17.4237 18.4622 17.0331 18.6402 16.5719C18.8126 16.1267 18.9298 15.6175 18.9622 14.873C18.9948 14.1258 19.0025 13.8872 18.9988 11.9866C18.9952 10.0859 18.9867 9.84765 18.9513 9.10116C18.9158 8.35467 18.7972 7.84773 18.6227 7.40266C18.4428 6.94248 18.2027 6.55285 17.8132 6.16435C17.4237 5.77584 17.0328 5.53714 16.5718 5.35962C16.1263 5.18728 15.6174 5.06982 14.8723 5.03762C14.1272 5.00542 13.8874 4.99716 11.9863 5.0008C10.0852 5.00444 9.84724 5.01256 9.10061 5.04896ZM9.18237 17.7034C8.49986 17.6737 8.12928 17.5603 7.88232 17.4654C7.55527 17.3394 7.32231 17.1871 7.07619 16.9433C6.83007 16.6996 6.67886 16.4658 6.55118 16.1394C6.45528 15.8925 6.33978 15.5223 6.30786 14.8398C6.27314 14.1021 6.26586 13.8807 6.2618 12.0118C6.25774 10.1429 6.26488 9.92171 6.29722 9.18376C6.32634 8.50181 6.44044 8.13081 6.53522 7.88399C6.66122 7.55652 6.81299 7.32398 7.05729 7.078C7.30159 6.83201 7.53469 6.68053 7.86132 6.55285C8.108 6.45653 8.47816 6.34201 9.16039 6.30953C9.89862 6.27453 10.1198 6.26753 11.9884 6.26347C13.857 6.25941 14.0788 6.26641 14.8173 6.29889C15.4992 6.32857 15.8704 6.44155 16.1169 6.53689C16.4441 6.66289 16.6769 6.81423 16.9229 7.05896C17.1689 7.30368 17.3205 7.53594 17.4482 7.86327C17.5447 8.10925 17.6592 8.47927 17.6914 9.16192C17.7265 9.90015 17.7345 10.1215 17.7379 11.9899C17.7412 13.8584 17.7346 14.0803 17.7023 14.818C17.6725 15.5005 17.5594 15.8712 17.4643 16.1184C17.3383 16.4454 17.1864 16.6785 16.9419 16.9243C16.6975 17.1701 16.4647 17.3216 16.1379 17.4493C15.8915 17.5455 15.5209 17.6603 14.8393 17.6928C14.101 17.7275 13.8798 17.7348 12.0105 17.7388C10.1412 17.7429 9.92074 17.7353 9.18251 17.7034M14.889 8.25877C14.8898 8.72273 15.2664 9.09822 15.7304 9.09738C16.1943 9.09654 16.5698 8.71993 16.569 8.25597C16.5681 7.792 16.1915 7.41652 15.7276 7.41736C15.7276 7.41736 15.7274 7.41736 15.7273 7.41736C15.2635 7.41834 14.8881 7.79494 14.889 8.25877ZM8.4055 12.007C8.40942 13.9922 10.0217 15.5979 12.0065 15.5941C13.9913 15.5904 15.5981 13.9782 15.5943 11.993C15.5905 10.0078 13.9778 8.40171 11.9928 8.40563C10.0077 8.40955 8.40172 10.0221 8.4055 12.007ZM9.66635 12.0045C9.66383 10.7158 10.7064 9.669 11.9951 9.66648C13.2839 9.66396 14.3306 10.7066 14.3332 11.9953C14.3357 13.284 13.2931 14.3308 12.0044 14.3333C10.7158 14.336 9.66901 13.2936 9.66635 12.0051V12.0045Z' fill='white'></path>
                
              </svg>
              </a>
            <a>
            <svg className='footer_1_5_5_s3' width={24} height={24} viewBox='0 0 24 24' fill='none'>
                <g>
                <path d='M23 12C23 5.92486 18.0751 1 12 1C5.92486 1 1 5.92486 1 12C1 17.4903 5.02252 22.0412 10.2812 22.8664V15.1797H7.48828V12H10.2812V9.57656C10.2812 6.81969 11.9235 5.29688 14.4361 5.29688C15.6397 5.29688 16.8984 5.51172 16.8984 5.51172V8.21875H15.5114C14.145 8.21875 13.7188 9.06674 13.7188 9.93664V12H16.7695L16.2818 15.1797H13.7188V22.8664C18.9775 22.0412 23 17.4905 23 12Z' fill='currentColor'></path>
                <path d='M16.2818 15.1797L16.7695 12H13.7188V9.93664C13.7188 9.06674 14.145 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6397 5.29688 14.4361 5.29688C11.9235 5.29688 10.2812 6.81969 10.2812 9.57656V12H7.48828V15.1797H10.2812V22.8664C10.8413 22.9542 11.4152 23 12 23C12.5848 23 13.1587 22.9542 13.7188 22.8664V15.1797H16.2818Z' fill='white'></path>
                </g>
                <defs></defs>
                
              </svg>
            </a>
            <a>
            <svg className='footer_1_5_5_s4' width={24} height={24} viewBox='0 0 24 24' fill='none'>
                <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                <path d='M14.6548 6.5H9.34617C8.98953 6.5 8.70036 6.77492 8.70036 7.11427V12.4991C8.70036 12.8382 8.98953 13.1132 9.34617 13.1132H11.7936C11.7768 13.7122 11.5225 14.3691 11.1359 14.9432C10.7632 15.4965 10.1507 16.0415 9.81838 16.3021C9.80983 16.3089 9.80136 16.3154 9.79337 16.3217C9.72167 16.3871 9.66939 16.4632 9.66826 16.5686C9.66714 16.6486 9.71075 16.7105 9.75928 16.7761L9.77173 16.7896L11.4662 18.6074C11.4662 18.6074 11.549 18.6908 11.6175 18.7066C11.6948 18.7243 11.7823 18.7265 11.8429 18.6818C14.7987 16.5067 15.2256 13.7794 15.2999 12.3034C15.3001 12.295 15.3004 7.11427 15.3004 7.11427C15.3004 6.77492 15.0114 6.5 14.6548 6.5Z' fill='white'></path>
                
              </svg>
            </a>
            <a>
            <svg className='footer_1_5_5_s5' width={24} height={24} viewBox='0 0 24 24' fill='none'>
                <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                <path d='M7.96631 5.76685H16.033V13.8335H7.96631V5.76685ZM12.5913 8.24889V9.81433L11.4126 8.24889H10.1381V11.3515H11.4082V9.78601L12.5872 11.3515H13.8612V8.24889H12.5913Z' fill='white'></path>
                <path d='M7.96631 14.454H16.033L14.5204 16.3156H9.47869L7.96631 14.454Z' fill='white'></path>
                <path d='M9.98281 16.9361H14.0161L11.9993 19.4181L9.98281 16.9361Z' fill='white'></path>
              </svg>
            </a>
          </div>
          <p>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


export default function TodaysHouse() {
  return (
   <div className='entire' >
    <Header />
    <Body />
    <Footer />
    </div>
  )
};
