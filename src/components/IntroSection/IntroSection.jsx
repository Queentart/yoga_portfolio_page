// src/components/IntroSection/IntroSection.jsx

import React, { useEffect, useState } from 'react';
import './IntroSection.css';
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
  
  const role = "경력 8년 요가 강사"; 
  const rawBio = "서울을 기반으로 활동하며, 빈야사/힐링/리스토레이티브/임산부 요가 전문입니다. 몸과 마음의 조화를 돕는 수업을 디자인합니다.";
  
  // 2. Bio 개행 처리
  // 마침표(`. `)를 마침표와 <br /> 태그로 치환하여 HTML 문자열 생성
  const finalBioHtml = rawBio.replace(/\.\s/g, '.<br />');
  const bioMarkup = { __html: finalBioHtml };
  
  // 3. 애니메이션 상태 관리
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 후 0.1초 뒤 애니메이션 시작
    const timer = setTimeout(() => {
        setAnimated(true);
    }, 100); 
    
    return () => clearTimeout(timer); // 클린업 함수 (컴포넌트 언마운트 시 타이머 제거)
  }, []); 

  // 애니메이션 클래스 정의 (animated 상태에 따라 클래스를 적용)
  const imageClass = animated ? 'animate-slide-left' : '';
  const textClass = animated ? 'animate-slide-right' : '';

  return (
    <section className="intro-section">
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