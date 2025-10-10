// src/components/PhilosophySection/PhilosophySection.jsx

import React from 'react';
import './PhilosophySection.css';
import useOnScreen from '../../hooks/useOnScreen';

// 1번 이미지 경로만 사용
import image1 from '../../assets/images/profile1.jpg'; 

function PhilosophySection() {
  const title = "As a Yogi"; 
  const statement = "저의 목표는 모든 수련생이 마음의 소리에 귀 기울이고, 몸과 호흡의 연결을 발견하도록 돕는 것입니다. 경쟁적인 일상 속에서 잠시 멈추어, 자신을 돌보는 시간을 갖는 것이 가장 중요합니다.";
  
  // 1. 섹션 전체에 Intersection Observer 적용
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 }); 

  // isVisible이 true일 때만 애니메이션 클래스 적용
  const textClass = isVisible ? 'animate-slide-up' : '';
  
  // 섹션 전체에 ref를 연결
  return (
    <section className="philosophy-section" ref={sectionRef}> 
      <div className="philosophy-content-wrapper">
        
        {/* 왼쪽: 이미지 영역 (1번 이미지 컨테이너만 남김) */}
        <div className="philosophy-image-group">
          
          {/* 1번 이미지: 16:9 비율 */}
          <div className={`image-container image-1 ${textClass}`} style={{ animationDelay: '0s' }}>
            <img 
              src={image1} 
              alt="요가 강사 수련 이미지 1" 
              className="philosophy-image" 
            />
          </div>
          
          {/* ⭐️ image-2 제거됨 ⭐️ */}
        </div>

        {/* 오른쪽: 텍스트 정보 영역 */}
        <div className="philosophy-text-container">
          
          {/* 제목 - 애니메이션 및 지연 효과 */}
          <h2 
            className={`philosophy-title ${textClass}`}
            style={{ animationDelay: '0.4s' }}
          >
            {title}
          </h2>
          
          {/* 본문 - 애니메이션 및 지연 효과 */}
          <p 
            className={`philosophy-statement ${textClass}`}
            style={{ animationDelay: '0.6s' }}
          >
            {statement}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;