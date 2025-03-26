import styled from "styled-components";

function PaymentDiscountCard({ text = "최대 10% 결제할인 "}) {
    return (
        <Container>
            <img src='Todaydeal\card-promotion-badge.png' alt = "카드 프로모션 배지"/>
            <span>{text}</span>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 100%;
    width: fit-content;
    padding: 2px 5px;
    line-height: 16px;
    letter-spacing: -0.3px;
    border-radius: 4px;
    margin-top: 6px;
    color: rgb(47, 52, 56);
    border: 1px solid rgb(234, 237, 239);

    img {
      display: block;
      width: 11px;
      margin-right: 5px;
    }

    span {
      font-size: 10px;
      line-height: 14px;
      font-weight: 700;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
`;

export default PaymentDiscountCard;
