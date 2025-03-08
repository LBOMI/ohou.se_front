import React, { useState } from 'react';
import styled from 'styled-components';

const ScrapButtonWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  font-size: 16px;
  color: ${({ isScrapped }) => (isScrapped ? '#ffcc00' : '#35C5F0')}; /* 색상 변경 */
  transition: color 0.3s ease;

  &:hover {
    color: ${({ isScrapped }) => (isScrapped ? '#e6b800' : '#444')};
  }
`;

const ScrapIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ isScrapped }) => (isScrapped ? '#FFFFFF' : '#35C5F0')};
  fill-opacity: 0.7;
  stroke: ${({ isScrapped }) => (isScrapped ? '#FFFFFF' : '#35C5F0')}; /* 색상 변경 */
  stroke-width: 2;
  transition: stroke 0.3s ease;
`;

const ScrapButton = ({ className }) => {
  const [isScrapped, setIsScrapped] = useState(false);

  return (
    <ScrapButtonWrapper
      className={className}  // ✅ 여기서 className을 적용
      onClick={() => setIsScrapped((prev) => !prev)}
      isScrapped={isScrapped}
    >
      <ScrapIcon
        isScrapped={isScrapped}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {isScrapped ? (
          <path d="M5 3v18l7-5 7 5V3z" /> // 스크랩된 아이콘
        ) : (
          <path d="M5 3h14v18l-7-5-7 5V3z" /> // 기본 아이콘
        )}
      </ScrapIcon>
    </ScrapButtonWrapper>
  );
};


export default ScrapButton;
