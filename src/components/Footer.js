import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";


function Footer() {
    return (
      <Background>
        <Container>
          <FirstSection>
            <Header>
              <a>고객센터</a>
              <span><FontAwesomeIcon icon={faChevronRight} /></span>
            </Header>
            <Number>
              <a>1670-0876</a>
              <time dateTime='09:00'>09:00</time>~
              <time dateTime='18:00'>18:00</time>
            </Number>
            <Inquiry>
              <span>평일: 전체 문의 상담</span><br/>
              <span>토요일, 공휴일: 오늘의집 직접배송 주문건 상담</span><br/>
              <span>일요일: 휴무</span>
            </Inquiry>
            <ContactButton>
              <KaKaoTalkButton>카톡 상담(평일 09:00~18:00)</KaKaoTalkButton>
              <EmailButton>이메일 문의</EmailButton>
            </ContactButton>
          </FirstSection>

          <VerticalBar/>

          <Option>
            <span>회사소개</span>
            <span>채용정보</span>
            <span>이용약관</span>
            <span style={{fontWeight:700}}>개인정보 처리방침</span>
            <span>공지사항</span>
            <span>안전거래센터</span>
            <span>입점신청</span>
            <span>제휴/광고 문의</span>
            <span>시공파트너 안내</span>
            <span style={{fontWeight:700}}>파트너 개인정보 처리방침</span>
            <span>상품광고 소개</span>
            <span>고객의 소리</span>
          </Option>

          <VerticalBar/>

          <Details>
            {/* <div className='footer_1_5_1'> */}
              <CompanyInfo>
                <Individual>
                  {/* <span>|</span> */}
                  (주)버킷플레이스
                </Individual>
                <Individual>
                  <span>|</span>대표이사 이승재
                </Individual>
                <Individual>
                  <span>|</span>
                  <address>서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층</address>
                </Individual>
                <Individual>
                  {/* <span>|</span> */}
                  <a>contact@bucketplace.net</a>
                </Individual>
                <Individual>
                  <span>|</span>
                  <span>사업자등록번호 119-86-91245</span>
                  <CheckBusinessInfo><a target='_blank'>사업자정보확인</a></CheckBusinessInfo>
                </Individual>
                <Individual>
                  {/* <span>|</span> */}
                  <span>통신판매업신고번호 제2018-서울서초-0580호</span>
                </Individual>
              </CompanyInfo>
            {/* </div> */}
            {/* <div className='footer_1_5_2'> */}
              <span>고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</span>
              <ConfirmationOfService><a target='_blank'>서비스가입사실확인</a></ConfirmationOfService>
            {/* </div> */}
            <CertificationMark>
              <IconBox>
                <img src='footer\footer_isms.png'/>
                <IsmsText>
                  <span>오늘의집 서비스 운영</span>
                  <br></br>
                  2024. 09. 08 ~ 2027. 09. 07
                </IsmsText>
              </IconBox>
              <IconBox>
                <img src='footer\footer_iso27001 인증 마크.png'/>
              </IconBox>
              <IconBox>
                <a target='_blank'>
                  <img src='footer\footer_pcr 인증마크.png'/>
                </a>
              </IconBox>
            </CertificationMark>
            <span>
            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
            </span>
            <SNSIcon>
              <a href ="https://youtube.com" target = "_blank" rel = "noopener noreferrer">
                <svg viewBox='0 0 24 24' fill='none'>
                  <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                  <path d='M18.7086 8.63031C18.5472 8.02758 18.0736 7.55392 17.4709 7.39258C16.3783 7.09985 12.0002 7.09985 12.0002 7.09985C12.0002 7.09985 7.62199 7.09985 6.53062 7.39258C5.92789 7.55392 5.45423 8.02758 5.29289 8.63031C5.00016 9.72168 5.00016 12.0001 5.00016 12.0001C5.00016 12.0001 5.00016 14.2785 5.29289 15.3699C5.45423 15.9726 5.92789 16.4462 6.53062 16.6076C7.62199 16.9003 12.0002 16.9003 12.0002 16.9003C12.0002 16.9003 16.3783 16.9003 17.4697 16.6076C18.0724 16.4462 18.5461 15.9726 18.7074 15.3699C19.0002 14.2785 19.0002 12.0001 19.0002 12.0001C19.0002 12.0001 19.0002 9.72168 18.7074 8.63031H18.7086Z' fill='white'></path>
                  <path d='M10.6013 14.0994L14.2396 11.9997L10.6013 9.8999V14.0994Z' fill='currentColor'></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg viewBox='0 0 24 24' fill='none'>
                  <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                  <path d='M9.10061 5.04896C8.3558 5.0841 7.84718 5.20296 7.40253 5.37768C6.94235 5.55702 6.5523 5.79768 6.16422 6.18717C5.77614 6.57665 5.53715 6.96698 5.35907 7.42786C5.18673 7.87349 5.06997 8.38253 5.03707 9.12776C5.00417 9.87299 4.99689 10.1125 5.00053 12.0135C5.00417 13.9144 5.01257 14.1527 5.04869 14.8995C5.08425 15.6441 5.20269 16.1526 5.37741 16.5974C5.55703 17.0576 5.79742 17.4475 6.18704 17.8357C6.57666 18.2239 6.96671 18.4624 7.42871 18.6407C7.87392 18.8128 8.3831 18.9301 9.12819 18.9627C9.87328 18.9953 10.1131 19.0029 12.0135 18.9993C13.9139 18.9956 14.1531 18.9872 14.8997 18.9518C15.6464 18.9164 16.1522 18.7971 16.5971 18.6232C17.0573 18.4432 17.4475 18.2032 17.8354 17.8134C18.2234 17.4237 18.4622 17.0331 18.6402 16.5719C18.8126 16.1267 18.9298 15.6175 18.9622 14.873C18.9948 14.1258 19.0025 13.8872 18.9988 11.9866C18.9952 10.0859 18.9867 9.84765 18.9513 9.10116C18.9158 8.35467 18.7972 7.84773 18.6227 7.40266C18.4428 6.94248 18.2027 6.55285 17.8132 6.16435C17.4237 5.77584 17.0328 5.53714 16.5718 5.35962C16.1263 5.18728 15.6174 5.06982 14.8723 5.03762C14.1272 5.00542 13.8874 4.99716 11.9863 5.0008C10.0852 5.00444 9.84724 5.01256 9.10061 5.04896ZM9.18237 17.7034C8.49986 17.6737 8.12928 17.5603 7.88232 17.4654C7.55527 17.3394 7.32231 17.1871 7.07619 16.9433C6.83007 16.6996 6.67886 16.4658 6.55118 16.1394C6.45528 15.8925 6.33978 15.5223 6.30786 14.8398C6.27314 14.1021 6.26586 13.8807 6.2618 12.0118C6.25774 10.1429 6.26488 9.92171 6.29722 9.18376C6.32634 8.50181 6.44044 8.13081 6.53522 7.88399C6.66122 7.55652 6.81299 7.32398 7.05729 7.078C7.30159 6.83201 7.53469 6.68053 7.86132 6.55285C8.108 6.45653 8.47816 6.34201 9.16039 6.30953C9.89862 6.27453 10.1198 6.26753 11.9884 6.26347C13.857 6.25941 14.0788 6.26641 14.8173 6.29889C15.4992 6.32857 15.8704 6.44155 16.1169 6.53689C16.4441 6.66289 16.6769 6.81423 16.9229 7.05896C17.1689 7.30368 17.3205 7.53594 17.4482 7.86327C17.5447 8.10925 17.6592 8.47927 17.6914 9.16192C17.7265 9.90015 17.7345 10.1215 17.7379 11.9899C17.7412 13.8584 17.7346 14.0803 17.7023 14.818C17.6725 15.5005 17.5594 15.8712 17.4643 16.1184C17.3383 16.4454 17.1864 16.6785 16.9419 16.9243C16.6975 17.1701 16.4647 17.3216 16.1379 17.4493C15.8915 17.5455 15.5209 17.6603 14.8393 17.6928C14.101 17.7275 13.8798 17.7348 12.0105 17.7388C10.1412 17.7429 9.92074 17.7353 9.18251 17.7034M14.889 8.25877C14.8898 8.72273 15.2664 9.09822 15.7304 9.09738C16.1943 9.09654 16.5698 8.71993 16.569 8.25597C16.5681 7.792 16.1915 7.41652 15.7276 7.41736C15.7276 7.41736 15.7274 7.41736 15.7273 7.41736C15.2635 7.41834 14.8881 7.79494 14.889 8.25877ZM8.4055 12.007C8.40942 13.9922 10.0217 15.5979 12.0065 15.5941C13.9913 15.5904 15.5981 13.9782 15.5943 11.993C15.5905 10.0078 13.9778 8.40171 11.9928 8.40563C10.0077 8.40955 8.40172 10.0221 8.4055 12.007ZM9.66635 12.0045C9.66383 10.7158 10.7064 9.669 11.9951 9.66648C13.2839 9.66396 14.3306 10.7066 14.3332 11.9953C14.3357 13.284 13.2931 14.3308 12.0044 14.3333C10.7158 14.336 9.66901 13.2936 9.66635 12.0051V12.0045Z' fill='white'></path>
                  
                </svg>
                </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg viewBox='0 0 24 24' fill='none'>
                  <g>
                  <path d='M23 12C23 5.92486 18.0751 1 12 1C5.92486 1 1 5.92486 1 12C1 17.4903 5.02252 22.0412 10.2812 22.8664V15.1797H7.48828V12H10.2812V9.57656C10.2812 6.81969 11.9235 5.29688 14.4361 5.29688C15.6397 5.29688 16.8984 5.51172 16.8984 5.51172V8.21875H15.5114C14.145 8.21875 13.7188 9.06674 13.7188 9.93664V12H16.7695L16.2818 15.1797H13.7188V22.8664C18.9775 22.0412 23 17.4905 23 12Z' fill='currentColor'></path>
                  <path d='M16.2818 15.1797L16.7695 12H13.7188V9.93664C13.7188 9.06674 14.145 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6397 5.29688 14.4361 5.29688C11.9235 5.29688 10.2812 6.81969 10.2812 9.57656V12H7.48828V15.1797H10.2812V22.8664C10.8413 22.9542 11.4152 23 12 23C12.5848 23 13.1587 22.9542 13.7188 22.8664V15.1797H16.2818Z' fill='white'></path>
                  </g>
                  <defs></defs>
                  
                </svg>
              </a>
              <a>
              <svg viewBox='0 0 24 24' fill='none'>
                  <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                  <path d='M14.6548 6.5H9.34617C8.98953 6.5 8.70036 6.77492 8.70036 7.11427V12.4991C8.70036 12.8382 8.98953 13.1132 9.34617 13.1132H11.7936C11.7768 13.7122 11.5225 14.3691 11.1359 14.9432C10.7632 15.4965 10.1507 16.0415 9.81838 16.3021C9.80983 16.3089 9.80136 16.3154 9.79337 16.3217C9.72167 16.3871 9.66939 16.4632 9.66826 16.5686C9.66714 16.6486 9.71075 16.7105 9.75928 16.7761L9.77173 16.7896L11.4662 18.6074C11.4662 18.6074 11.549 18.6908 11.6175 18.7066C11.6948 18.7243 11.7823 18.7265 11.8429 18.6818C14.7987 16.5067 15.2256 13.7794 15.2999 12.3034C15.3001 12.295 15.3004 7.11427 15.3004 7.11427C15.3004 6.77492 15.0114 6.5 14.6548 6.5Z' fill='white'></path>
                  
                </svg>
              </a>
              <a>
              <svg viewBox='0 0 24 24' fill='none'>
                  <circle cx={12} cy={12} r={11} fill='currentColor'></circle>
                  <path d='M7.96631 5.76685H16.033V13.8335H7.96631V5.76685ZM12.5913 8.24889V9.81433L11.4126 8.24889H10.1381V11.3515H11.4082V9.78601L12.5872 11.3515H13.8612V8.24889H12.5913Z' fill='white'></path>
                  <path d='M7.96631 14.454H16.033L14.5204 16.3156H9.47869L7.96631 14.454Z' fill='white'></path>
                  <path d='M9.98281 16.9361H14.0161L11.9993 19.4181L9.98281 16.9361Z' fill='white'></path>
                </svg>
              </a>
            </SNSIcon>
            <CopyRight>
            <span>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</span>
            </CopyRight>
          </Details>
        </Container>
      </Background>
    )
  }

  const Background = styled.div`
    margin-top: auto;
    z-index: 100;
    padding: 40px 0;
    background-color: #F7F9FA;
  `

  const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 16px;
    display: grid;
    grid-column-gap: 24px;

    @media (min-width: 1256px) {
      max-width: 1256px;
      margin: 0 auto; 
      padding: 0 60px; 
    }

    @media (min-width: 1024px) {
      grid-template-columns:256px 1px 256px 1px 2fr;;
      grid-row-gap: 24px;
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1px 1fr;
      grid-row-gap: 24px;
    }

    @media (min-width: 768px) {
      padding: 0 40px; 
    }
  `;

  const FirstSection = styled.div`
    color: #2F3438;
  `;

  const Header = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 2px;

    a {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      touch-action: manipulation;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      display: inline-block;
      font-size: 12px;
      line-height: 1;
    }
  `;

  const Number = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 20px 0 8px;

    a {
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      white-space: nowrap;
      margin-right: 6px;
      cursor: pointer;
      touch-action: manipulation;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    time {
      font-size: 14px;
      line-height: 20px;
    }
  `;

  const Inquiry = styled.div`
    font-size: 11px;
    line-height: 20px;
    white-space: pre-wrap;
    margin-bottom: 12px;
    padding-right: 10px; /*media 1256*/

    span {
      position: relative;
      padding-left: 15px;

      &::before {
        content: '•';
        position: absolute;
        font-size: 10px;
        left: 7px;
      }
    }
  `;

  const ContactButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
  `

  const KaKaoTalkButton = styled.button`
    margin: 0;
    background: none;
    font: inherit;
    font-size: 14px;
    line-height: 20px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 32px;
    border-radius: 4px;
    padding: 0 8px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: #2F3438;
    border: 1px solid #E6E6E6;
    width: fit-content;
    white-space: nowrap;
    cursor: pointer;
    touch-action: manipulation;
  `;

  const EmailButton = styled.button`
    margin: 0;
    background: none;
    font: inherit;
    font-size: 14px;
    line-height: 20px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 32px;
    border-radius: 4px;
    padding: 0 8px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: #2F3438;
    border: 1px solid #E6E6E6;
    width: fit-content;
    white-space: nowrap;
    cursor: pointer;
    touch-action: manipulation;

    &:hover {
      text-decoration: underline;
    }
  `;

  const VerticalBar = styled.div`
    width: 100%;
    background-color: #EAEDEF;
  `;

  const Option = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, min-content);
    grid-auto-flow: column;
    grid-column-gap: 8px;
    grid-row-gap: 20px;

    span {
      font-size: 12px;
      line-height: 16px;
      display: inline-block;
      color: #2F3438;
      white-space: nowrap;
      cursor: pointer;
      touch-action: manipulation;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  const Details = styled.div`
    font-size: 10px;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #828C94;

    @media (max-width: 1024px) {
      grid-column-start: 1;
      grid-column-end: 6;
    }
  `;

  const CompanyInfo = styled.div`
    overflow: hidden;
    margin-left: -9px;
  `;

  const Individual = styled.div`
    font-size: 12px;
    line-height: 20px;
    display: inline-block;
    white-space: nowrap;

    span {
      margin: 0px 4px;
    }

    address {
      display: inline-block;
      font-style: normal;
      font-weight: 400;
    }

    a {
      margin: 0px 4px;
      cursor: pointer;
      touch-action: manipulation;
    }
  `;

  const CheckBusinessInfo = styled.a`
    font-weight:700;
    color: rgb(130, 140, 148);
    cursor: pointer;
    touch-action: manipulation;
  `;

  const ConfirmationOfService = styled.a`
    font-weight: 700;
    color:#828C94;
    cursor: pointer;
    touch-action: manipulation;
  `;

  const CertificationMark = styled.div`
    display: grid;
    grid-column-gap: 6px;
    grid-template-columns: max-content minmax(min-content, 116px) minmax(min-content, 116px);
  `;

  const IconBox = styled.div`
    display: flex;
    height: 40px;
    padding: 0 6px;
    gap: 6px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.08);

    img {
      width: 32px;
      aspect-ratio: auto 32 / 32;
      height: 32px;
      border: none;
      overflow-clip-margin: content-box;
      overflow: clip;
    }

    a {
      cursor: pointer;
      touch-action: manipulation;
      color: inherit;
      text-decoration: none;
    }
  `;

  const IsmsText = styled.div`
    font-size: 10px;
    line-height: 14px;
    color: #828C94;
  `;

  const SNSIcon = styled.div`
    display: flex;
    gap : 12px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      touch-action: manipulation;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #676a6c;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  `;

  const CopyRight = styled.div`
    padding: 0;
  `
  export default Footer;