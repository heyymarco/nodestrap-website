import React, { useEffect, useRef, useState } from 'react'



export const useInViewport = () => {
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
    
    
    
    return [
        elmRef,
        isInViewport,
    ] as const;
};

export interface FlipFlopOptions<TState> {
    defaultState : TState
}
export const useFlipFlop = <TState,>({ defaultState } : FlipFlopOptions<TState>) => {
    const [elmRef, isInViewport] = useInViewport();
    
    
    
    const [isFlip, setIsFlip] = useState(false);
    useEffect(() => {
        // conditions:
        if (!isInViewport) return;
        
        
        
        // setups:
        let interval        = 2000;
        const currentIsFlip = !isFlip;
        
        const globalTick    = Date.now();
        const globalIsFlip  = !!(Math.ceil(globalTick / interval) % 2);
        const globalLate    = globalTick % interval; // the late interval from globalFlip
        if (globalLate > (interval * 0.05)) { // sync to another `useFlipFlop()`
            const globalNextFlip = interval - globalLate;
            interval = globalNextFlip + ((currentIsFlip !== globalIsFlip) ? interval : 0);
        } // if
        const timeoutHanlder = setTimeout(() => {
            setIsFlip(currentIsFlip);
        }, interval);
        
        
        
        // cleanups:
        return () => {
            clearTimeout(timeoutHanlder);
        };
    }, [isInViewport, isFlip]);
    
    
    
    return [
        elmRef,
        !isInViewport ? defaultState : isFlip,
        isInViewport,
    ] as const;
};