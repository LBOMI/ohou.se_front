import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretUp} from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";

const MENU_ITEMS = [
    "브레드박스", "붙이는 커튼", "먼지없는 러그", "이케아 트롤리", "무타공 벽선반",
    "추천코드", "타일 카페트", "필웰", "밧드아", "로보락"
];

const VerticalSlider = () => {
    const [isOpen_real, setIsOpen_Real] = useState(false);
    const dropdownRef = useRef(null); //드롭다운 외부 클릭하면 

     useEffect(() => { // ESC키를 누르면 드롭다운 닫힘
        const handleKeyPress = (event) => {
          if (event.key === "Escape") {
            setIsOpen_Real(false);
            document.activeElement.blur();
          }
        };
    
        if (isOpen_real) {
          document.addEventListener("keydown", handleKeyPress);
        } else {
          document.removeEventListener("keydown", handleKeyPress);
        }
    
        return () => document.removeEventListener("keydown", handleKeyPress);
      }, [isOpen_real]);

    const handelClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen_Real(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handelClickOutside);
      return () => {
        document.removeEventListener("mousedown", handelClickOutside);
      };
    }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 0
          }
        }
      ]
    };
  
    return (
      <RealVertical>
          <StyledSlider {...settings}>
          {MENU_ITEMS.map((item, index) => (
          <Slide key={index}>
            <span className="rank">{index + 1}</span>
            <span className="new"><FontAwesomeIcon icon={faCaretUp} /></span>
            <span className="item">{item}</span>
          </Slide>
        ))}
          </StyledSlider>
          
            {/* 드롭다운 버튼 */}
            <DropdownButton onClick={() => setIsOpen_Real(!isOpen_real)}>
              <FontAwesomeIcon icon={faChevronDown} />
            </DropdownButton>
                
            {/* 드롭다운 메뉴 */}
            {/* {isOpen_real && ( */}
            <DropdownMenu ref={dropdownRef} isOpen={isOpen_real}>
              <DropdownHeader>
                <span>인기 검색어</span>
                <CloseButton onClick={() => setIsOpen_Real(false)}>
                <FontAwesomeIcon icon={faChevronUp} />
                </CloseButton>
              </DropdownHeader>

              <DropdownList >
                {MENU_ITEMS.map((item, index) => (
                  <DropdownItem key={index}>
                  <span className="rank">{index + 1}</span>
                  <span className="new">new</span>
                  <span className="item">{item}</span>
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownMenu>
            {/* )} */}
      </RealVertical>
    );
  };

  const RealVertical = styled.div`
   flex: 0 0 auto;
   display: flex;
   margin-left 10px;
   width: 192px;
   height: 30px;
   overflow: hidden;
   align-items: center;
   justify-content: center;

   @media (max-width: 825px) {
      display: none;
    }
  `;

  const StyledSlider = styled(Slider)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 30px;
    margin-left: 0px;

  `

  const Slide = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    gap: 5px;
  
    .rank {
        font-weight: 700;
        margin-right: 5px;
    }

    .new {
        color: red;
        font-size: 12px;
        margin-right: 5px;
    }

    .item {
        font-size: 14px;
    }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 0px;
  width: 200px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 100;
  padding: 20px;

  /* 애니메이션 적용 */
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transform: ${(props) => (props.isOpen ? "translateY(0px)" : "translateY(-10px)")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s;
  
  /* 드롭다운이 닫혀있을 때 클릭 방지 */
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  box-shadow: ${(props) => (props.isOpen ? "0 4px 10px rgba(0, 0, 0, 0.15)" : "none")};
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const DropdownList = styled.div`
//   position: absolute;
//   top: 50px;
//   right: 0;
//   width: 200px;
//   padding: 8px 12px;
//   background: white;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   overflow: hidden;
//   z-index: 100;

  
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  font-size: 14px;
  
  .rank {
    font-weight: bold;
  }

  .new {
    color: red;
    font-size: 12px;
  }

  &:hover {
    background: #f8f8f8;
  }
`;


  export default VerticalSlider;