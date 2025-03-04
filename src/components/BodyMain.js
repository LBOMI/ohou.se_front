import SimpleSlider from "./Slide/SimpleSlider";
import SimpleSlider2 from "./Slide/SimpleSlider2";

import styled from "styled-components";

function BodyMain() {
    return (
        <Container>
            <Mainbanner>
              <section>
                
                  <MainImage src='오늘의집 main picture.avif'/>
                  
                  <MainbannerUser>
                    
                    <StyledParagraph>아이 있는 집 맞나요? 모던함이 돋보이는 집</StyledParagraph>
                    <User>
                      <img src='B_main\B_main_small.avif'></img>
                      <span>오늘의집에디터</span>
                    </User>
                  </MainbannerUser>
                
              </section>
            </Mainbanner>

            <AddSlide>
                <SimpleSlider/>
            </AddSlide>
            
            <MobileSlide>
                <SimpleSlider2/>
            </MobileSlide>
          </Container>
    )
}

const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 60px;
  width: 100%;
  height: 100%;


  box-sizing: border-box;
  display: flex;
  // align-items: stretch;

  
  @media (min-width: 1024px) {
    padding: 0 60px;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`

const Mainbanner = styled.div`
  flex: 3;
  
  section {
    overflow: hidden;
    position: relative;
    // padding-top: 59.976387249114524%;
    font-size: 0;
    border-radius: 4px;
    cursor: pointer;
    touch-action: manipulation;
  }


  @media (max-width: 825px) {
    display: none;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #EAEDEF;
  transition: .2s transform;

  &:hover {
    transform: scale(1.05);
  }
`

const MainbannerUser = styled.div`
    position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 170px;
  padding: 0px 30px 30px;
  box-sizing: border-box;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, .4)
  );
  pointer-events: none;

`

const StyledParagraph = styled.p`
  overflow: hidden;
  display: flex;
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  word-break: keep-all;
  text-overflow: ellipsis;
  text-shadow: 0 2px 10px rgba(63, 71, 77, 0.25);
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
 
  margin: 0; 
`;

const User = styled.span`
  display: flex;
  width: 300px;
  height: 23px;
  align-items: center;
  margin-top: 8px;

  img {
    height: 100%;
    margin-right: 7px;
    border-radius: 100%;
  }

  span {
    font-size: 15px;
    color: #ffffff;
  }
`

const AddSlide = styled.div`
  flex: 1;
  
  @media (max-width: 825px) {
    display: none;
  }
`;

const MobileSlide = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 825px) {
    display: none;
  }
`


export default BodyMain;