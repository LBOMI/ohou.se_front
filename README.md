# 오늘의집 클론코딩

### ❔프로젝트 소개
* React를 활용해 '오늘의집' 플랫폼의 주요 기능을 재현한 클론 코딩 프로젝트입니다.
* 본 프로젝트에서 사용한 사진 및 사용자 닉네임은  ‘오늘의 집’ 을 참고하여 학습 목적으로 임의로 설정한 것입니다.

### 📷 UI
![image](https://github.com/user-attachments/assets/c4e4c8df-54fc-472b-825d-80c92ef307df)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/740647ff-12dd-47ca-a61a-5fedbc0f22f2/30085559-525a-4ff7-8232-c499ff5cd12b/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/740647ff-12dd-47ca-a61a-5fedbc0f22f2/5a2cd378-64db-40ed-9bb0-60ddb3d7f7f0/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/740647ff-12dd-47ca-a61a-5fedbc0f22f2/324e22c4-1bf1-417c-b137-837e816ab33f/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/740647ff-12dd-47ca-a61a-5fedbc0f22f2/d3f4924f-3f5b-4bc1-b854-5b5c57527333/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/740647ff-12dd-47ca-a61a-5fedbc0f22f2/76df912a-ec70-4b83-bb26-604ef62600a8/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/740647ff-12dd-47ca-a61a-5fedbc0f22f2/f971046c-e4fb-4e77-941c-c1b7e322c217/image.png)

### ✏️ 역할 및 기여
* 본 프로젝트는 개인적으로 구현한 작업으로, 모든 과정을 독자적으로 수행하여 완성도를 높였습니다.

### ✅ 사용 기술
* React
* Html, Css, Js

### 🎯 주요 기능
- Slide
    - ‘React-Slick’을 활용하여 슬라이드 구현
    - 자동 슬라이드, 화살표 커스텀, 페이지 인덱스 구현

- Dropdown
    - React 상태와 조건부 렌더링을 활용하여 nav바의 화살표 버튼을 누르면 아래로 열리는 드롭다운 메뉴
    - 드롭다운 외부를 클릭하면 드롭다운이 닫히는 기능을 구현하기 위해 `useRef` 와 `document.addEventListener` 로 클릭 이벤트 감지
    - `useEffect` 에서 이벤트 클린업 처리하여 성능 최적화
    - nav바에서 카테고리 버튼을 클릭하면 하위 메뉴가 자연스럽게 펼쳐짐
 
- Scroll 이벤트 활용한 Header UI 개선
    - 사용자가 콘텐츠를 집중해서 볼 수 있도록 스크롤을 내릴 때 헤더가 사라지고, 다시 올리면 헤더가 나타남
    - `window.scrollY` 값을 `useState` 로 관리하여 스크롤 방향에 따라 네비게이션 바 표시/숨김
    - `useEffect` 로 `window.addEventListener('scroll', callback)` 을 적용하고 컴포넌트 언마운트 시 클린업 처리
 
- Counter (초 단위 카운트다운)(’오늘의 딜’ 부분)
    - `setInterval` 을 활용하여 이벤트 종료시까지 남은 시간 표시
    - `formatTime` 함수를 활용해 ‘hh:mm:ss’ 형식으로 변환하여 가독성 향상
    - `useEffect` 에서 컴포넌트가 언마운트될 때 `clearInterval` 을 사용하여 메모리 누수 방지
 
### ⁉️ 트러블 슈팅
- 드롭다운
    - 문제 발생 : 드롭다운이 열린 상태에서 닫힘 버튼을 눌러도 닫히지 않는 오류
    - 문제 원인 : 'handleClickOutside' 로직이 드롭다운 외부를 클릭하면 드롭다운을 닫도록 구현했지만, 닫힘 버튼을 드롭다운 외부로 인식하는 문제
    - 문제 해결 : 닫힘 버튼을 참조하는 로직을 추가하여, '드롭다운 외부'에 버튼을 제외시키는 조건 설정
    - 결과: 닫힘 버튼을 정상적으로 눌러 드롭다운을 닫을 수 있게 되었으며, 드롭다운 외부 클릭 동작도 유지
 
- React-Slick
    - 문제 발생 - 첫 슬라이드 화면에서 이전 버튼이 보이지 않도록 구현한 이후, 첫 슬라이드가 아닌 경우에도 이전 슬라이드로 이동하지 않는 문제 발생
    - 원인 : 'state'만을 활용해 버튼 상태를 관리하면서 Slider 기능과 연동이 제대로 이루어지지 않음
    - 해결
        1. ‘useRef’로 Slider를 참조하도록 수정
        2. 이전 버튼의 'onClick' 속성에 ‘sliderRef.current.slickPrev()’를 호출하면 이전 슬라이드로 이동하도록 구현
        3. 첫 번째 슬라이드에서 이전 버튼이 보이지 않도록 하기 위해 버튼의 전체 코드를 ‘currentSlide > 0’ 조건으로 감싸 렌더링 제어
    - 결과 :  첫 번째 슬라이드에서는 이전 버튼이 보이지 않으면서도, 다른 슬라이드에서는 버튼이 정상적으로 작동해 슬라이드 이동 원활
 
### ✨ 마무리 및 느낀 점
* React 학습과 웹페이지의 전반적인 구조를 깊이 있게 학습하고자 클론 코딩을 진행했습니다. ‘오늘의 집’ 플랫폼은 메인 페이지가 다양한 콘텐츠로 구성되어 있어 학습 자료로 적합하다고 생각했습니다. 슬라이드, 드롭다운, 반응형 웹 등을 구현하며 React의 기본 원리와 활용 방법을 배울 수 있었습니다.

### ⛵ 향후 개선 계획
* 반응형 디자인 강화: 다양한 디바이스에서 최적의 사용자 경험을 제공할 수 있도록 UI/UX 최적화
* 세부 페이지 확장: 현재 기능을 기반으로 추가적인 상세 페이지 구현 및 서비스 확장
