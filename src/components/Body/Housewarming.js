import styled from "styled-components";

import ScrapButton from "../ScrapButton";

function Housewarming() {
    return (
        <Container>
            <Header>
              <HeaderOne>
                  <strong>이주의 집들이! 발굴하러 가볼까요?</strong>
              </HeaderOne>
              <HeaderTwo>
                <button type='button'>더보기</button>
              </HeaderTwo>
            </Header>
              <Body>
                <Contents>
                  <Img>
                    <img src='jipdlei\집들이1.avif' />
                    <StyledScrapButton/>
                  </Img>
                  <Text>
                    <p>
                      <span>식물과 컬러로 포인트! </span>
                      공간 디자이너 부부와 아이가 사는 집
                    </p>
                  </Text>
                </Contents>
                <Contents>
                  <Img>
                    <img src='jipdlei\집들이2.avif'/>
                    <StyledScrapButton/>
                  </Img>
                  <Text>
                    <p>
                      <span>블랙&그레이톤으로 </span>
                      정돈된 호텔의 무드를 느낄 수 있는 집
                    </p>
                  </Text>
                </Contents>
                <Contents>
                  <Img>
                    <img src='jipdlei\집들이3.webp'/>
                    <StyledScrapButton/>
                  </Img>
                  <Text>
                    <p>
                      <span>공간 분위기 바꾸기? </span>
                      가구&소품 재배치로 어렵지 않게 완성!
                    </p>
                  </Text>
                </Contents>
                <Contents>
                  <Img>
                    <img src='jipdlei\집들이4.avif'></img>
                    <StyledScrapButton/>
                  </Img>
                  <Text>
                    <p>
                      <span>30평대 같은 </span>
                      대면형 주방을 실현한, 18평 신희타 리모델링기
                    </p>
                  </Text>
                </Contents>
              </Body>
            </Container>

    )
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  max-width: 1256px;
  padding: 0px 60px;
  margin: 25px auto;
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

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`

const Contents = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0px;
  flex-flow: column;
`

const Img = styled.div`
  height: 179px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0px;
    left: 0px;
    transform: scale(1);
    transition: transform 0.2s ease 0s;

    &:hover {
        transform: scale(1.05);
        transition: transform .25s;
      } 
  }

  
`

const StyledScrapButton = styled(ScrapButton)`
  position: absolute;  // 이미지 위에 배치
  bottom: 10px;        
  right: 5px;
  border-radius: 50%;
  padding: 8px;
  // z-index: 10000;   
`;

const Text = styled.div`
  margin-top: 5px;
  min-width: 0px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(47, 52, 56);
  word-break: keep-all;
  overflow-wrap: break-word;
  cursor: pointer;

  p {
    overflow: hidden;

    span {
      color: rgb(53, 197, 240);
      font-weight: 700;
    }
  }
`

export default Housewarming;