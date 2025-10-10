// src/components/ContactSection/ContactSection.jsx

import React from 'react';
import './ContactSection.css';
import useOnScreen from '../../hooks/useOnScreen';

// 연락처 섹션 이미지 import (적절한 이미지로 교체 필요)
import contactImage from '../../assets/images/contact.png'; 

// 실제 연락처 정보 (수정 필요)
const contactInfo = {
    phone: import.meta.env.VITE_CONTACT_PHONE, 
    email: import.meta.env.VITE_CONTACT_EMAIL,
};

function ContactSection() {
    // Intersection Observer 적용
    const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 }); 
    const textClass = isVisible ? 'animate-fade-in' : '';

    return (
        <section className="contact-section" ref={sectionRef}> 
            <div className="contact-content-wrapper">
                
                {/* ⭐️ 왼쪽 영역: 연락처 정보 ⭐️ */}
                <div className="contact-left-column">
                    <h2 className={`contact-title ${textClass}`} style={{ animationDelay: '0s' }}>
                        Contact
                    </h2>
                    
                    <div className="contact-details">
                        {/* 전화번호 */}
                        <div className={`contact-item ${textClass}`} style={{ animationDelay: '0.2s' }}>
                            <p className="label">Phone</p>
                            <p className="value">{contactInfo.phone}</p>
                        </div>

                        {/* 이메일 주소 */}
                        <div className={`contact-item ${textClass}`} style={{ animationDelay: '0.4s' }}>
                            <p className="label">Email</p>
                            <p className="value email-link">
                                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                            </p>
                        </div>
                    </div>
                    
                    {/* 하단 정보 */}
                    <p className="studio-info">
                        © 2025 Jihyang Lee All Rights Reserved.
                    </p>
                </div>

                {/* ⭐️ 오른쪽 영역: 이미지 (애니메이션 적용) ⭐️ */}
                <div 
                    className={`contact-right-column ${textClass}`}
                    style={{ animationDelay: '0.1s' }}
                >
                    <img 
                        src={contactImage} 
                        alt="요가 배경 이미지" 
                        className="contact-image" 
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;