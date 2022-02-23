import React, { useEffect, useRef, useState } from 'react'



export interface FlipFlopOptions<TState> {
    defaultState : TState
}
export const useFlipFlop = <TState,>({ defaultState } : FlipFlopOptions<TState>) => {
    const elmRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);
    useEffect(() => {
        // conditions:
        if (!elmRef.current) return;
        
        
        
        // setups:
        const observer = new IntersectionObserver((entry) => {
            setIsInViewport(entry.some((item) => item.isIntersecting));
        }, { threshold: 0.25 });
        observer.observe(elmRef.current);
        
        
        
        // cleanups:
        return () => {
            observer.disconnect();
        };
    }, []);
    
    
    
    const [isFlip, setIsFlip] = useState(false);
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        
        
        
        // setups:
        const timeoutHanlder = setTimeout(() => {
            setIsFlip(!isFlip);
        }, 2000);
        
        
        
        // cleanups:
        return () => {
            clearTimeout(timeoutHanlder);
        };
    }, [isInViewport, isFlip]);
    
    
    
    return [
        elmRef,
        !isInViewport ? defaultState : isFlip,
    ] as const;
};