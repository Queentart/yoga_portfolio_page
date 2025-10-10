// src/components/ExperienceSection/ExperienceSection.jsx

import React from 'react';
import './ExperienceSection.css';
import useOnScreen from '../../hooks/useOnScreen';

// 이미지 경로 사용
import experienceImage from '../../assets/images/work.jpg'; 

// 데이터 구조 정의
const experiences = [
    { title: "동작구 가족센터 힐링육아", period: "2023년 10월 - 현재 · 2년 1개월", detail: "힐링 육아 프로그램 정기 진행" },
    { title: "크레센도 요가원", period: "2022년 3월 - 현재 · 3년 8개월", detail: "힐링, 빈야사 요가 진행 및 닥터플렉스 기구 외 소도구 수업" },
    { title: "서울볼더스 클라이밍짐", period: "2019년 1월 - 2020년 1월 · 1년 1개월", detail: "클라이밍짐 요가 스트레칭 수업 진행" },
    { title: "메리어트호텔 키즈 요가 윈터포레스트", period: "2025년 1월 - 2025년 1월 · 1개월", detail: "키즈요가 진행 (스토리텔링 동화 및 영어책 활용)" },
];

const certifications = [
    "Spanda Flow Yoga Teacher Training",
    "Spanda Restorative Yoga Teacher Training",
    "Spanda Prenatal Yoga Teacher Training",
];

function ExperienceSection() {
    // 섹션 전체에 Intersection Observer 적용
    const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 }); 

    // isVisible이 true일 때만 애니메이션 클래스 적용
    const textClass = isVisible ? 'animate-fade-in' : '';

    return (
        <section className="experience-section" ref={sectionRef}> 
            <div className="experience-content-wrapper">
                
                {/* 왼쪽 영역 (경력 정보) */}
                <div className="experience-left-column">
                    <h2 className={`section-title work-title ${textClass}`} style={{ animationDelay: '0s' }}>
                        I've worked with
                    </h2>
                    
                    <div className="experience-list">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index} 
                                className={`experience-item ${textClass}`}
                                // 각 항목마다 0.15초씩 지연 시간을 주어 순차적인 페이드 인 효과 적용
                                style={{ animationDelay: `${0.1 + index * 0.15}s` }} 
                            >
                                <h3>{exp.title}</h3>
                                <p className="period">{exp.period}</p>
                                <p className="detail">{exp.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 오른쪽 영역 (자격증 및 이미지) */}
                <div className="experience-right-column">
                    
                    {/* 상단: 이미지 - ⭐️ 애니메이션 클래스 및 지연 시간 추가 ⭐️ */}
                    <div 
                        className={`experience-image-container ${textClass}`}
                        style={{ animationDelay: '0.1s' }}
                    >
                        <img 
                            src={experienceImage} 
                            alt="요가 티칭 이미지" 
                            className="experience-image" 
                        />
                    </div>

                    {/* 하단: 자격증 목록 */}
                    <div className="certification-container">
                        <h2 className={`section-title cert-title ${textClass}`} style={{ animationDelay: '0.3s' }}>
                            I've learned from
                        </h2>
                        <ul className="certification-list">
                            {certifications.map((cert, index) => (
                                <li 
                                    key={index} 
                                    className={textClass}
                                    style={{ animationDelay: `${0.45 + index * 0.15}s` }}
                                >
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;