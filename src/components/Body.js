
import LookforSlider from "./Slide/LookforSlider";
import Categroy_Slider from "./Slide/CategorySlider";
import Todaydeal_Slider from "./Slide/TodaydealSlider";
import Exhibition_Slider from "./Slide/ExhibitionSlider";
import Best_Slider from "./Slide/BestSlider";

import BodyMain from "./BodyMain";
import BodyNav from "./BodyNav";
import BodyLookfor from "./Body/BodyLookfor";
import Housewarming from "./Body/Housewarming";
import Category from "./Body/Category";
import Todaydeal from "./Body/Todaydeal";
import UserReview from "./Body/UserReview";
import Exhibition from "./Body/Exhibition";

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
          <BodyMain/>
          <BodyNav/>
          <BodyLookfor/>
          <Housewarming/>
          <Category/>
          <Todaydeal/>
          <UserReview/>
          <Exhibition/>
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

export default Body;