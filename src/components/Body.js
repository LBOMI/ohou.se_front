
import LookforSlider from "./Slide/LookforSlider";
import Categroy_Slider from "./Slide/CategorySlider";
import Todaydeal_Slider from "./Slide/TodaydealSlider";
import Exhibition_Slider from "./Slide/ExhibitionSlider";
import Best_Slider from "./Slide/BestSlider";

import BodyMain from "./BodyMain";

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

export default Body;