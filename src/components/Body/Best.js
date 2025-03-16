import styled from "styled-components";

import Best_Slider from "../Slide/BestSlider";
import Flag from "../Flag";
import Star from "../Star";
import OnlyFlag from "./OnlyFlag";
import ScrapButton from "../ScrapButton";

function Best() {
    return (
        <Container>
            <Header>
              <HeaderOne>
                  <strong>베스트</strong>
              </HeaderOne>
              <HeaderTwo>
                <button type='button'>더보기</button>
              </HeaderTwo>
            </Header>

              <Best_Slider/>
              
              <Contents>
                <Content> 
                    <Background>
                      <FlagWrapper>
                        <Flag number = "1"/>
                      </FlagWrapper>

                      <ScrapButtonWrapper>
                        <ScrapButton/>
                      </ScrapButtonWrapper>

                      <Img>
                        <img src='best\best_1.avif' ></img>
                      </Img>
                    </Background>
                  <Text>
                    <Description>
                      <Company>아엠홈</Company>
                      <span>맞춤 비침없는 도톰 레이스/쉬폰커튼(나비주름/핀형/봉집)</span>
                    </Description>
                    <Price>
                      <DiscountRate>28%</DiscountRate>
                      <span>16,800</span>
                    </Price>
                    <Addition>
                      <Star/>
                      <strong>4.7</strong>
                      <span>리뷰 39,766</span>
                    </Addition>
                  </Text>
                </Content>

                <Content> 
                    <Background>
                    <FlagWrapper>
                        <Flag number = "2"/>
                      </FlagWrapper>
                    
                      <ScrapButtonWrapper>
                        <ScrapButton/>
                      </ScrapButtonWrapper>

                      <Img>
                        <OnlyFlagWrapper>
                          <OnlyFlag/>
                        </OnlyFlagWrapper>
                        <img src='best\best_2.avif'/>
                        </Img>
                    </Background>
       
                  <Text>
                    <Description>
                      <Company>헬로우슬립</Company>
                      <span>[최대15%쿠폰+사은품]부드러운 카스테라 워싱 향균 옥수수솜 사계절&한파용 차렵이불세트</span>
                    </Description>
                    <Price>
                      <DiscountRate>37%</DiscountRate>
                      <span>35,900</span>
                    </Price>
                    <Addition>
                      <Star/>
                      <strong>4.8</strong>
                      <span>리뷰 43,751</span>
                    </Addition>
                  </Text>
                </Content>

                <Content> 
                <Background>
                    <FlagWrapper>
                        <Flag number = "3"/>
                      </FlagWrapper>
                    
                      <ScrapButtonWrapper>
                        <ScrapButton/>
                      </ScrapButtonWrapper>

                      <Img>
                        <OnlyFlagWrapper>
                          <OnlyFlag/>
                        </OnlyFlagWrapper>
                        <img src='best\best_3.avif'/>
                        </Img>
                    </Background>
                  <Text>
                    <Description>
                      <Company>퀵슬립</Company>
                      <span>Q4 유로탑 롤팩 매트리스 2size_적당푹신(롤팩)</span>
                    </Description>
                    <Price>
                      <DiscountRate>57%</DiscountRate>
                      <span>299,900</span>
                    </Price>
                    <Addition>
                      <Star/>
                      <strong>4.8</strong>
                      <span>리뷰 16,581</span>
                    </Addition>
                    <TodayDepart>
                      <img src='Todaydeal\오늘출발.png'/>
                    </TodayDepart>
                    <PaymentTime>평일 12:00까지 결제시</PaymentTime>
                    <SpecialPrice>
                      <svg aria-label='특가' width={30} height={20} viewBox='0 0 30 20'>
                                <rect width={30} height={20} fill='#F77' rx={4}></rect>
                                <path 
                                fill='#fff'
                                d='M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z'></path>
                              </svg>
                            
                    </SpecialPrice>
                  </Text>
                </Content>
            </Contents>
          </Container>
    )
}

const Container = styled.div`
  // width: 100%;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  max-width: 1256px;
  padding: 50px 60px 10px 60px;
  margin: auto;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
  font-size: 0px;
  line-height: 1;
`

const HeaderOne = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  // min-width: 0px;
  cursor: pointer;

  strong {
    overflow: hidden;
    display: inline-block;
    font-weight: 700;
    color: rgb(47, 52, 56);
    letter-spacing: -0.3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    line-height: 28px;

    &:hover {
      color: rgb(136, 141, 144);
    }
  }
`

const HeaderTwo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 0px;
  margin-left: 10px;

  button {
    display: inline-block;
    margin: 0px;
  padding: 0px;
  border: none;
  background: none;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(53, 197, 240);
  cursor: pointer;
  
  &:hover {
    color: rgb(165, 210, 224);
  }
  }
`
const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 10px;
`

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0px;
  flex-flow: column;
`

const Background = styled.div`
  position: relative;
  // padding-bottom: 100%;
  width: 100%;
  height: 100%;
  background-color: rgb(247, 249, 250);
  border-radius: 4px;
  z-index: 20;

  @media (min-width: 1256px) {
    height: 362.89px;
  }
`;

const FlagWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  z-index: 10; /* 이미지보다 위에 배치 */
`;

const Img = styled.div`
  position: absolute;
  // width: 100%;
  // height: 100%;
  top: 0;
  left: 0;
  border-radius: 4px;
  overflow: hidden;
  // object-fit: cover;
  margin: 0;
  z-index: 1; /* 기본값보다 낮은 값으로 설정 */

  img {
    position: relative;
    // top: 0;
    // left: 0;
    width: 100%;
    // height: 100%;
    // object-fit: cover;
    border-radius: 4px;
    z-index: 1;
  }
`;

const Text = styled.div`
  width: 100%;
  margin: 0;
`

const Description = styled.div`
  margin-top: 10px;

  span {
    font-size: 14px;
  line-height: 18px;
  max-height: 36px;
  margin-top: 4px;
  word-break: break-all;
  transition: opacity 0.1s ease 0s;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  color: rgb(47, 52, 56);

    &:hover {
      cursor: pointer;
      color: rgb(92, 99, 105);
    }
  }
`

const Company = styled.div`
  font-size: 12px;
  line-height: 16px;
  display: block;
  word-break: break-all;
  color: rgb(130, 140, 148);
`

const Price = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4px;

  span {
    font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: rgb(47, 52, 56);
  }
`

const DiscountRate = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  margin-right: 2px;
  color: rgb(53, 197, 240);
`

const Addition = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: rgb(130, 140, 148);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 4px;

  strong {
    margin-right: 4px;
    color: rgb(47, 52, 56);
    font-weight: bold;
  }

  span {
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    color: rgb(130, 140, 148);
  }
`;

const OnlyFlagWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 71%;
  width: 29%;
  height: 29%;
  margin: 0;
  z-index: 30;
`

const ScrapButtonWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  border: none;
  background: none;
  font: inherit;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  z-index: 30;
`

const TodayDepart = styled.div`
  display: flex;
  margin-top: 4px;

  img {
    width: auto;
    height: 15px;
    border: 0;
  }
`;

const PaymentTime = styled.div`
  display: inline-block;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(99, 145, 230);
`;

const SpecialPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
`

export default Best;