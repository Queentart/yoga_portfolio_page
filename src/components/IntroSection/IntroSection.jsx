// src/components/IntroSection/IntroSection.jsx

import React from 'react'; // React import 유지
import './IntroSection.css';
// ⭐️ 1. useOnScreen 훅 import ⭐️
import useOnScreen from '../../hooks/useOnScreen'; 

// 실제 요가 강사님 사진 경로로 변경해 주세요
import yogiImage from '../../assets/images/profile.jpg'; 

function IntroSection() {
  
  // 1. 데이터 정의
  const name = (
    <React.Fragment>
      이지향
      <br /> 
      (Jihyang Lee)
    </React.Fragment>
  );
  
  const role = "Yoga Instructor"; 
  const rawBio = "서울을 기반으로 활동하며, 빈야사/힐링/리스토레이티브/임산부 요가 전문입니다. 몸과 마음의 조화를 돕는 수업을 디자인합니다.";
  
  // 2. Bio 개행 처리
  // 마침표(`. `)를 마침표와 <br /> 태그로 치환하여 HTML 문자열 생성
  const finalBioHtml = rawBio.replace(/\.\s/g, '.<br />');
  const bioMarkup = { __html: finalBioHtml };
  
  
  // ⭐️ 3. Intersection Observer 적용 (기존 useState/useEffect 대체) ⭐️
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 }); 
  
  // isVisible 상태에 따라 애니메이션 클래스 적용 여부 결정
  const imageClass = isVisible ? 'animate-slide-left' : '';
  const textClass = isVisible ? 'animate-slide-right' : '';
  
  // ⭐️ 기존의 useEffect와 useState는 제거되었습니다. ⭐️


  return (
    // ⭐️ 4. 섹션 태그에 ref 연결 ⭐️
    <section className="intro-section" ref={sectionRef}> 
      <div className="intro-content-wrapper">
        
        {/* 왼쪽: 사진 영역 - 애니메이션 적용 */}
        <div className={`intro-image-container ${imageClass}`}>
          <img 
            src={yogiImage} 
            alt={`${name} 프로필`} 
            className="intro-profile-image" 
          />
        </div>

        {/* 오른쪽: 텍스트 정보 영역 */}
        <div className="intro-text-container">
          
          {/* 이름 - 애니메이션 및 지연 효과 적용 */}
          <h1 
            className={`intro-name ${textClass}`} 
            style={{ animationDelay: '0.2s' }}
          >
            {name}
          </h1> 
          
          {/* 역할 - 애니메이션 및 지연 효과 적용 */}
          <p 
            className={`intro-role ${textClass}`}
            style={{ animationDelay: '0.4s' }}
          >
            {role}
          </p> 
          
          {/* 소개 - 애니메이션 및 지연 효과 적용 */}
          <p 
            className={`intro-bio ${textClass}`}
            dangerouslySetInnerHTML={bioMarkup}
            style={{ animationDelay: '0.6s' }} 
          />
          
        </div>
      </div>
    </section>
  );
}

export default IntroSection;