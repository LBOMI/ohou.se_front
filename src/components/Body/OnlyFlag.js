import styled from "styled-components";

function OnlyFlag() {
    return (
        <Container>
            <img src='best\bestOnly.png'/>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
  margin: 0;

  img {
    width: 100%;
    background-color: transparent;
    border: 0;
  }
`;

export default OnlyFlag;
