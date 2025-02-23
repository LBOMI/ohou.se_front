import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import ScrollHideHeader from "./hideHeader";

function Header() {

    return (
      <header>
        <div className='sticky-container' style={{height: 80.75}}>
          <div className='sticky-container_1'>
           <div className='sticky-container_1-1'>
            <div className='sticky-container_1-1_1'>
              <button type='button'>
                <span><FontAwesomeIcon icon={faBars} /></span>
              </button>
            </div>
            <div className='logo'>
              <a>
              <img src="오늘의 집 logo.jpg" width="71" height="28"></img>
              </a>
            </div>
  
            <div className='logo_N'>
              <a>
                <span style={{color:"#35C5F0"}}>커뮤니티</span>
              </a>
              <a>
                <span>쇼핑</span>
              </a>
              <a>
                <span>인테리어/생활</span>
              </a>
            </div>
  
           
           <div className='sticky-container_2'>
            <div className='sticky-container_2_1'>
              <div className='sticky-container_2_1_1'>
                <div className='sticky-container_2_1_1_1'>
                  <div className='sticky-container_2_1_1_1_1'>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input 
                      type='text' 
                      placeholder='통합검색' 
                      autoComplete='off' 
                      aria-autocomplete='list'>
                    </input>
                    <div className='sticky-container_2_1_1_1_1_1'></div>
                  </div>
                </div>
                
              </div>
              <div className='sticky-container_2_1_2'>
                <button type='button'>
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </button>
              </div>
              <a className='sticky-container_2_1_3a'>
                <span><FontAwesomeIcon icon={faCartShopping}/></span>
              </a>
              <div className='sticky-container_2_1_4'>
                <div className='sticky-container_2_1_4_1'>
                  <a className='sticky-container_2_1_4_1_a1'>로그인</a>
                  <a className='sticky-container_2_1_4_1_a2'>회원가입</a>
                  <a className='sticky-container_2_1_4_1_a3'>고객센터</a>
                </div>
                <span className='sticky-container_2_1_4_span'>
                  <button role='button' type='button'>
                    <span className='sticky-container_2_1_4_2'>글쓰기</span>
                    <span className='sticky-container_2_1_4_3'><FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                </span>
              </div>
            </div>
            
            </div>
            
           </div>
        </div>
        </div>
        
          <ScrollHideHeader/>
       
      </header>
    );
  
  }

  export default Header;