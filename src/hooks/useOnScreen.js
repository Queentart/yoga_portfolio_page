// src/hooks/useOnScreen.js

import { useState, useEffect, useRef } from 'react';

// 요소가 화면에 나타났는지 감지하는 커스텀 훅
export default function useOnScreen(options) {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // isIntersecting이 true가 되면, 화면에 요소가 진입한 것입니다.
            setIntersecting(entry.isIntersecting);
        }, options); // options에는 root, rootMargin, threshold 등을 설정할 수 있습니다.

        if (ref.current) {
            observer.observe(ref.current);
        }

        // 컴포넌트 언마운트 시 옵저버 연결 해제
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
}