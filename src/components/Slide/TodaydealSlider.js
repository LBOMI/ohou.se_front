import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import { useState, useRef } from 'react';

import Counter from '../Counter';

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

export default Todaydeal_Slider;