import { useState, useEffect, useRef } from 'react';
import React from 'react';

import styled from "styled-components";

import Navbar from './Dropdown/HeaderDropdown';
import VerticalSlider from './Dropdown/VerticalSlider';

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