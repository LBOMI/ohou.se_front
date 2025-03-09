import styled from "styled-components";

import Categroy_Slider from "../Slide/CategorySlider";

function Category() {
    return (
        <Container>
            <Header>
                <strong>카테고리별 상품 찾기</strong>
            </Header>

            <Categroy_Slider/>

          </Container>
    )
}

const Container = styled.div`
  // width: 100%;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  max-width: 1256px;
  padding: 0px 60px;
  margin: auto;
`

const Header = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: space-between;
  width: 100%;
  // max-width: 100%;
  padding: 20px 0px;
  // font-size: 0px;
  line-height: 1;

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
    cursor: pointer;


    &:hover {
    color: rgb(136, 141, 144);
    }
  }
`
export default Category;