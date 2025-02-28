import React, { useState, useEffect, useRef  } from "react";
import styled from "styled-components";

import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MENU_ITEMS = ["홈", "추천", "#채널", "집들이", "집사진", "3D인테리어", "살림수납", "반려동물", "육아", "홈스토랑", "플랜테리어", "콜렉터블", "캠핑", "취미", "핫플레이스", "이벤트"];


export default function Navbar() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const updateMenu = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 2000) {
        setVisibleItems(MENU_ITEMS.slice(0, 11)); 
        setHiddenItems(MENU_ITEMS.slice(11));
      }
      if (screenWidth < 1260) {
        setVisibleItems(MENU_ITEMS.slice(0, 10));
        setHiddenItems(MENU_ITEMS.slice(10));
      }
      if (screenWidth < 1180) {
        setVisibleItems(MENU_ITEMS.slice(0, 9)); 
        setHiddenItems(MENU_ITEMS.slice(9));
      }
      if (screenWidth < 1105) {
        setVisibleItems(MENU_ITEMS.slice(0, 8)); 
        setHiddenItems(MENU_ITEMS.slice(8));
      }
      if (screenWidth < 1027) {
        setVisibleItems(MENU_ITEMS.slice(0, 7)); 
        setHiddenItems(MENU_ITEMS.slice(7));
      }
      if (screenWidth < 943) {
        setVisibleItems(MENU_ITEMS.slice(0, 6)); 
        setHiddenItems(MENU_ITEMS.slice(6));
      }
      if (screenWidth < 825) {
        setVisibleItems(MENU_ITEMS.slice(0, 16)); 
      }
    };

    updateMenu();
    window.addEventListener("resize", updateMenu);
    return () => window.removeEventListener("resize", updateMenu);
  }, []);

  return (
    <NavBar>
      <MenuContainer>
      <Blur/>
        {visibleItems.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
        
        {hiddenItems.length > 0 && (
          <Dropdown>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <FontAwesomeIcon icon={faChevronDown} />
            </DropdownButton>
            
            {isDropdownOpen && (
              <DropdownContent>
                {hiddenItems.map((item) => (
                  <DropdownItem key={item}>{item}</DropdownItem>
                ))}
              </DropdownContent>
            )}
          </Dropdown>
        )}
      </MenuContainer>
      
      {/* 모바일 메뉴 */}
      <MobileMenu>
      <FontAwesomeIcon icon={faChevronDown} />
      </MobileMenu>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  position: relative;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 825px) {
    padding: 5px;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 8px;
  font-weight: 600;
  &:hover {
    color: #35C5F0;
  }

@media (max-width: 825px) {
    padding: 3px;
}
`;

const Blur = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 130px;
  height: 100%;
  background: linear-gradient(to left, white, rgba(255, 255, 255, 0.49) 80%);
  pointer-events: none; 
  opacity: 100%;
  z-index: 0;

  @media (max-width: 825px) {
    display: none;
  }
`;

const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownButton = styled.div`
  padding: 8px 12px;
  border-radius: 5px;
  z-index: 2000;

  @media (max-width: 825px) {
    display: none;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  padding: 8px 12px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 100;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 10px 15px;
  color: black;
  text-decoration: none;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const MobileMenu = styled.div`
  display: none;
`;

