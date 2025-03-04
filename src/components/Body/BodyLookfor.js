import styled from "styled-components";

import LookforSlider from "../Slide/LookforSlider";

function BodyLookfor() {
    return (
        <Container>
            <Header>
              <HeaderOne>
                  <strong>이런 사진 찾고 있나요?</strong>
                  <span>좋아하실만한 인테리어 콘텐츠를 추천드려요</span>
              </HeaderOne>

              <PlusButton>
                <button type='button'>더보기</button>
              </PlusButton>
            </Header>
            {/* <div className='B_lookfor_h3'> */}
              {/* <div className='B_lookfor_h3_1'> */}
  
                <LookforSlider/>
  
              {/* </div> */}
            {/* </div> */}
        </Container>
    )
}

const Container = styled.div`
  max-width: 1256px;
  width: 100%;
  padding: 20px 60px; /*media 1256*/

  box-sizing: border-box;
  background: rgb(255, 255, 255);
  margin: 0 auto;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
  font-size: 0px;
  line-height: 1;
  margin: 0;
`

const HeaderOne = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 0px;
  margin: 0;


  strong {
//   display: inline-flex;
//   align-items: center;
//   max-width: 100%;
  cursor: pointer;

  overflow: hidden;
  display: inline-block;
  font-weight: 700;
  color: rgb(24, 24, 24);
  letter-spacing: -0.3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: 28px;

  &:hover {
    color: rgb(136, 141, 144);
  }
  }

   span {
    overflow: hidden;
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(56, 61, 65);
  letter-spacing: -0.3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  }
`

const PlusButton = styled.div`
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
export default BodyLookfor;