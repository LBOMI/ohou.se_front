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

import Navbar from './Dropdown/HeaderDropdown';

const VerticalSlider = () => {
    const [isOpen_real, setIsOpen_Real] = useState(false);
    const dropdownRef = useRef(null); //드롭다운 외부 클릭하면 사라짐

    const Dropdown2 = () => {
      setIsOpen_Real(!isOpen_real);
    }
  
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
      <div className="real_vertical">
          <Slider {...settings}>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>1</span>
              <span style={{color:'red', fontSize:12, }}>new</span>
              <span style={{fontSize:14 }}>브레드박스</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>2</span>
              <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
              <span style={{fontSize:14 }}>붙이는 커튼</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>3</span>
              <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
              <span style={{fontSize:14 }}>먼지없는 러그</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>4</span>
              <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
              <span style={{fontSize:14 }}>이케아 트롤리</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>5</span>
              <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
              <span style={{fontSize:14 }}>무타공 벽선반</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>6</span>
              <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
              <span style={{fontSize:14 }}>추천코드</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>7</span>
              <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
              <span style={{fontSize:14 }}>타일 카페트</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>8</span>
              <span style={{color:'red', fontSize:12, }}>new</span>
              <span style={{fontSize:14 }}>필웰</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>9</span>
              <span style={{color:'red', fontSize:12, }}>new</span>
              <span style={{fontSize:14 }}>밧드아</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, paddingLeft:0 }}>10</span>
              <span style={{color:'red', fontSize:12, }}>new</span>
              <span style={{fontSize:14 }}>로보락</span>
            </div>
          </Slider>
          
              <button type='button' onClick={Dropdown2}>
                <span><FontAwesomeIcon icon={faChevronDown} /></span>
              </button>
                <div ref={dropdownRef} className={`dropDown2 ${isOpen_real ? "open" : ""}`}>
                <div className='dropDown2_1'>
                  <div className='dropDown2_1_1'>
                    <div className='dropDown2_1_1_1'>
                      <span>인기 검색어</span>
                      <button type='button' onClick={Dropdown2}>
                        <span><FontAwesomeIcon icon={faChevronUp} /></span>
                      </button> 
                    </div>
                    <div className='dropDown2_1_1_2'> 
                      <div className='dropDown2_1_1_2_1'>
                        <span style={{ fontWeight: 700, paddingLeft:10}}>1</span>
                        <span style={{color:'red', fontSize:12, }}>new</span>
                        <span style={{fontSize:14 }}>브레드박스</span>
                      </div>
                      <div className='dropDown2_1_1_2_2'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>2</span>
                        <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                        <span style={{fontSize:14 }}>붙이는 커튼</span>
                      </div>          
                      <div className='dropDown2_1_1_2_3'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>3</span>
                        <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                        <span style={{fontSize:14 }}>먼지없는 러그</span>
                      </div>
                      <div className='dropDown2_1_1_2_4'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>4</span>
                        <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                        <span style={{fontSize:14 }}>이케아 트롤리</span>
                      </div>
                      <div className='dropDown2_1_1_2_5'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>5</span>
                        <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                        <span style={{fontSize:14 }}>무타공 벽선반</span>
                      </div>
                      <div className='dropDown2_1_1_2_6'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>6</span>
                        <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                        <span style={{fontSize:14 }}>추천코드</span>
                      </div>
                      <div className='dropDown2_1_1_2_7'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>7</span>
                        <span style={{color:'red', fontSize:12, }}><FontAwesomeIcon icon={faCaretUp} /></span>
                        <span style={{fontSize:14 }}>타일 카페트</span>
                      </div>
                      <div className='dropDown2_1_1_2_8'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>8</span>
                        <span style={{color:'red', fontSize:12, }}>new</span>
                        <span style={{fontSize:14 }}>필웰</span>
                      </div>
                      <div className='dropDown2_1_1_2_9'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>9</span>
                        <span style={{color:'red', fontSize:12, }}>new</span>
                        <span style={{fontSize:14 }}>밧드아</span>
                      </div>
                      <div className='dropDown2_1_1_2_10'>
                        <span style={{ fontWeight: 700, paddingLeft:10 }}>10</span>
                        <span style={{color:'red', fontSize:12, }}>new</span>
                        <span style={{fontSize:14 }}>로보락</span>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
      </div>
    );
  };

const ScrollHideHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  
  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handelClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)
    && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current){
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <StickyContainer 
      style = {{
        transition: "transform 0.3s ease",
        transform: isVisible ? "translateY(0)" :" translateY(-250%)",
      }}>
          <ContainerLayout>
            
            <Navbar/>

            <VerticalSlider />
             
          </ContainerLayout>
        </StickyContainer>
  )
}

const StickyContainer = styled.div`
    margin: auto;
    position: fixed;
    z-index: 1199;
    transition: top 0.1s ease 0s;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #ffffff;
    border-bottom: 1px solid #EAEDEF;

    @media (min-width: 825px) {
      top: 80px;
      height: 30px;
    }

    @media (max-width: 825px) {
      top: 50px;
      height: 30px;
    }
  `;

  const ContainerLayout = styled.div`
    height: 30px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: initial;
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;

    @media (max-width: 825px) {
      height: 40px;
      width: 694px;
      padding: 0 16px;
    }
  `



export default ScrollHideHeader;