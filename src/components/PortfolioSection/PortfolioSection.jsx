// src/components/PortfolioSection/PortfolioSection.jsx

import React from 'react';
import './PortfolioSection.css';
import useOnScreen from '../../hooks/useOnScreen';

// 포트폴리오 이미지 import
import imageA from '../../assets/images/portfolio1.jpg'; 
import imageB from '../../assets/images/portfolio2.jpg'; 
import imageC from '../../assets/images/portfolio4.jpg'; 
import imageD from '../../assets/images/portfolio3.jpg'; 

// 이미지 배치 순서 및 클래스 설정
const portfolioItems = [
    // 1행: 세 개의 이미지
    { src: imageA, alt: "회원 자세 교정 중", delay: '0.3s', className: '' },
    { src: imageC, alt: "개인 수련 - 물구나무", delay: '0.5s', className: '' },
    { src: imageB, alt: "단체 수련 지도", delay: '0.7s', className: '' }, 

    // 2행: 하나의 와이드 이미지
    { src: imageD, alt: "단체 수업 장면", delay: '0.9s', className: 'is-wide' },
];

function PortfolioSection() {
    // Intersection Observer 적용
    const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 }); 
    const textClass = isVisible ? 'animate-fade-in' : '';

    return (
        <section className="portfolio-section" ref={sectionRef}> 
            <div className="portfolio-content-wrapper">
                
                {/* 왼쪽 영역: 텍스트 및 설명 - ⭐️ 개행 수정 ⭐️ */}
                <div className="portfolio-left-column">
                    <h2 className={`portfolio-title ${textClass}`} style={{ animationDelay: '0s' }}>
                        My Yoga Portfolio
                    </h2>
                    
                    <p className={`portfolio-statement ${textClass}`} style={{ animationDelay: '0.2s' }}>
                        개인 수련을 통한 꾸준한 자기 성장과 <br />
                        회원님들의 몸과 마음을 섬세하게 이끄는 티칭 경험을 담았습니다.
                    </p>
                </div>

                {/* 오른쪽 영역: 갤러리 (1행 3개, 2행 1개) */}
                <div className="portfolio-right-column">
                    <div className="portfolio-grid">
                        {portfolioItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`portfolio-item ${textClass} ${item.className}`}
                                style={{ animationDelay: item.delay }}
                            >
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="portfolio-image" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;