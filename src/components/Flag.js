import styled from "styled-components";

const Container = styled.div`
    position : relative;
    display: inline-flex;
    align-items: center;
`;

const Icon = styled.svg`
    width: 26px;
    height: 30px;
`;

const Path = styled.path`
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: rgba(53, 197, 240, 0.86);
`;

const Label = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    color: white;
`;

const Flag = ({number}) => {
    return (
        <Container>
            <Icon viewBox = "0 0 26 30" fill = "none">
                <Path d = "M13 24.25L0 29.25V0h26v29.25l-13-5Z"/>
            </Icon>
            <Label>{number}</Label>
        </Container>
    );
};

export default Flag;