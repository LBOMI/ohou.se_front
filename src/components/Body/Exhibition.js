import styled from "styled-components";

import Exhibition_Slider from "../Slide/ExhibitionSlider";


function Exhibition() {
    return (
        <Container>
            <Header>
              <HeaderOne>
                  <strong>오늘의 기획전</strong>
              </HeaderOne>
              <HeaderTwo>
                <button type='button'>더보기</button>
              </HeaderTwo>
            </Header>
                  <Exhibition_Slider/>
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

export default Exhibition;