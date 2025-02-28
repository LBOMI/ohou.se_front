import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

import ScrollHideHeader from "./hideHeader";
import styled from "styled-components";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <header>
        <StickyContainer>
          
           <StickyContainer_1>
            
            {/* 햄버거 메뉴 버튼 */}
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>

            {/* 로고 */}
            <Logo>
            <a href="/">
              <img src="오늘의 집 logo.jpg" width="71" height="28" alt="오늘의 집 로고"></img>
              </a>
            </Logo>
  
            <Logo_N>
              <a>
                <span style={{color:"#35C5F0"}}>커뮤니티</span>
              </a>
              <a>
                <span>쇼핑</span>
              </a>
              <a>
                <span>인테리어/생활</span>
              </a>
            </Logo_N>
  
           
              {/* 검색창 */}
              <SearchBar>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="통합검색" />
              </SearchBar>
                
                
              {/* 돋보기 */}
              <MagnifyingGlass>
                <button type='button'>
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} />
                  <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                </button>
              </MagnifyingGlass>
    
              {/* 장바구니 & 로그인/회원가입 */}
                <UserActions>
                <CartIcon><a href="/cart"><FontAwesomeIcon icon={faCartShopping} /></a></CartIcon>
                <a href="/login">로그인</a>
                <a href="/signup">회원가입</a>
                <CustomerCenter><a href="/">고객센터</a></CustomerCenter>
                <WriteButton>
                  글쓰기<IconWrapper><FontAwesomeIcon icon={faChevronDown}/></IconWrapper>
                </WriteButton>
              </UserActions>

            
           </StickyContainer_1>
        
        </StickyContainer>
        
          <ScrollHideHeader/>
       
      </header>
    );
  
    
  }

  const StickyContainer = styled.div`
    margin: auto;
    position: fixed;
    z-index: 1200;
    transition: top 0.1s ease 0s;
    top: 0px;
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid #EAEDEF;
  `;

  const StickyContainer_1 = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    line-height: 0;

    @media (min-width: 1256px) {
      height: 80px;
      padding-top: 10px;
      // padding-bottom: 10px;
      max-width: 1256px;
      margin: 0 auto;
      padding: 0 60px;
    }

    @media (max-width: 1256px) {
      height: 80px;
      padding-top: 10px;
      // padding-bottom: 10px;
      max-width: 1256px;
      margin: 0 auto;
      // padding: 0 60px;
    }
    
    @media (max-width: 1024px) {
      height: 80px;
      padding-top: 10px;
      // padding-bottom: 10px;
      margin: 0 auto;
      padding: 0 60px;
    }

    @media (max-width: 825px) {
      height: 50.75px;
      margin: 0 auto;
      padding: 0 16px;
      width: 726.25px;
    }
    
    @media (min-width: 825px) {
      padding: 0 60px;
      max-width: 1256px;
    }
  `

  const Logo = styled.div`
    flex: 0 0 auto;
    color: #212629;
    margin-right: 20px;

    @media (min-width: 1024px) {
      margin-right: 15px;
    }

    @media (max-width: 825px) {
      margin-right: 0;
      margin-left: 30px;
    }

    @media (min-width: 825px) {
      position: static;
      transform: none;
      height: 30px;
    }

    a {
      border: none;
      background: none;
      font: inherit;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      margin: -4px;
      padding: 4px;
      font-size: 0;
      line-height: 0;
      color: #212629;
      outline: none;
      cursor: pointer;
      touch-action: manipulation;

    }
  `

  const Logo_N = styled.div`
    flex: 1 1 0px;
    white-space: nowrap;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    a {
      border: none;
      background: none;
      font: inherit;
      position: relative;
      display: inline-block;
      margin: 0 10px;
      padding: 21px 5px 15px;
      font-size: 18px;
      line-height: 1;
      font-weight: bold;
      outline: none;
      color: #191c1d;
      cursor: pointer;
      touch-action: manipulation;
    }

    span {
      display: inline-block;
      margin: -4px;
      padding: 4px;
      border-radius: 3px;

      &:hover {
      color: #35C5F0;
    }
    }

    @media (min-width: 768px) {
      display: block;
    }

    @media (max-width: 825px) {
      display: none;
    }
  `;

  const SearchBar = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 14px;

    input {
      border: none;
      outline: none;
      padding: 5px;
      width: 150px;
    }

    @media (max-width: 1024px) {
      display: none;
    }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
    color: #333;
  }

  @media (max-width: 825px) {
    display: none;
  }
`;

const CartIcon = styled.div`
  font-size: 24px;
  @media (max-width: 1024px) {
    display: none;
  }
`
const CustomerCenter = styled.div`
  @media (max-width: 1255px) {
    display: none;
  }
`

const WriteButton = styled.button`
  display: flex;
  width: 85px;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: white;
  background-color: #35C5F0;
  cursor: pointer;

  &:hover {
    background-color:rgb(49, 163, 198);
  }

  @media (max-width: 1255px) {
    width: 70px;
  }
`;


const IconWrapper = styled.span`
  color: white;

  @media (max-width: 1255px) {
    display: none;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;

  &:hover {
    color: #35C5F0;
  }

  @media (min-width: 825px) {
    display: none;
  }
`;

const MagnifyingGlass = styled.div`

  button {
    display: inline-block;
  border: none;
  background: none;
  font: inherit;
  padding: 6px;
  margin: 3px 1px;
  color: #2F3438;
  line-height: 0;
  outline: none;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-appearance: none;
  }

  span {
    display: inline-block;
    font-size: 24px;
    line-height: 1;
  }

  @media (min-width: 1024px) {
      display: none;
  }
`
  
  export default Header;