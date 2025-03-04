import styled from "styled-components";

function BodyNav() {
    return (
        <Container>
              <Icon>
                <a >
                  <img src='body_icon\오늘의집 아이콘1.avif'></img>
                  <span>연말빅세일</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\오늘의딜.png'></img>
                  <span>오늘의딜</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\집들이.avif'></img>
                  <span>집들이</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\행운출첵.avif'></img>
                  <span>행운출첵</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\살림살이.png'></img>
                  <span>살림살이</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\취향의발견.png'></img>
                  <span>취향의발견</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\오마트.png'></img>
                  <span>오마트</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\빠른배송.png'></img>
                  <span>빠른배송</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\리모델링.avif'></img>
                  <span>리모델링</span>
                </a>
              </Icon>
              <Icon>
                <a >
                  <img src='body_icon\입주청소.avif'></img>
                  <span>입주청소</span>
                </a>
              </Icon>
          </Container>
    )
}

const Container = styled.div`
  max-width: 1256px; /*media 1256*/
  padding: 30px 60px; /*media 1256*/
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Icon = styled.div`
  flex: 1;
  text-align: center;

  a {
    cursor: pointer;
    touch-action: manipulation;
  }

  img {
    max-width: 88px; /* media 1024*/
    background-color: transparent;
    width: 100%;
  }

  span {
    margin-top: 8px; /* media 1024*/
    line-height: 20px; /* media 1024*/
    display: block;
    color: #2F3438;
  }
`


export default BodyNav;