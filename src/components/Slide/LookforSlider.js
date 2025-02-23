import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import { useState, useRef } from 'react';
import NextArrow from './NextArrow';

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

  export default LookforSlider;