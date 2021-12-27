// react:
import React, {
    useState,
    useRef as _useRef, // avoids eslint check
    
    Children,
    isValidElement,
    cloneElement,
}                           from 'react'         // base technology of our nodestrap components

// nodestrap utilities:
import {
    useIsomorphicLayoutEffect,
}                           from '@nodestrap/hooks'
import {
    // utilities:
    setRef,
}                           from '@nodestrap/utilities'
import {
    // hooks:
    SizeOptions,
    useElementSize as _useElementSize, // avoids eslint check
}                           from './hooks'



// caches:
const elementSizeOptions : SizeOptions = { box: 'content-box' }



// react components:

export type Fallbacks<T> = T[] & { 0: T }
export interface ResponsiveBoundaryProps<TFallback> {
    fallbacks : Fallbacks<TFallback>
    children  : (fallback: TFallback) => React.ReactNode
}
export function ResponsiveBoundary<TFallback>(props: ResponsiveBoundaryProps<TFallback>) {
    // rest props:
    const {
        fallbacks,
        
        
        // children:
        children,
    } = props;
    
    
    
    // states:
    const [currentFallbackIndex, setCurrentFallbackIndex] = useState<number>(0);
    
    
    
    // fn props:
    const maxFallbackIndex  = (fallbacks.length - 1);
    const currentFallback   = (currentFallbackIndex <= maxFallbackIndex) ? fallbacks[currentFallbackIndex] : fallbacks[maxFallbackIndex];
    
    const childrenWithSizes = Children.toArray(children(currentFallback)).map((child) => {
        const isElement                              = isValidElement(child);
        const childRef                               = !isElement ? null : _useRef<HTMLElement>(null);
        const [childWidth, childHeight, setChildRef] = !isElement ? [null, null, null] : _useElementSize(elementSizeOptions);
        const mutatedChild                           = !isElement ? child : (() => {
            return cloneElement(child, {
                ref: (elm: HTMLElement) => {
                    setRef((child as any).ref, elm);
                    
                    setRef(childRef, elm);
                    setRef(setChildRef, elm);
                },
            });
        })();
        
        return {
            child  : mutatedChild,
            ref    : childRef,
            width  : childWidth,
            height : childHeight,
        };
    });
    const sizes = childrenWithSizes.flatMap((childWithSize) => [childWithSize.width, childWithSize.height]);
    
    
    
    // dom effects:
    useIsomorphicLayoutEffect(() => {
        if (currentFallbackIndex === 0) return; // already been reseted
        
        
        
        // setups:
        setCurrentFallbackIndex(0);
    }, sizes); // resets currentFallbackIndex each time the sizes are changed

    useIsomorphicLayoutEffect(() => {
        if (currentFallbackIndex >= maxFallbackIndex) return; // maximum fallbacks has already reached => nothing more fallback
        
        
        
        const hasOverflowed = childrenWithSizes.some((childWithSize) => {
            const {
                ref,
                width  : clientWidth,
                height : clientHeight,
            } = childWithSize;
            if (!ref?.current)         return false; // ignore non-element-child or not-already-referenced-child
            if (clientWidth === null)  return false; // ignore not-already-calculated-child
            if (clientHeight === null) return false; // ignore not-already-calculated-child
            
            
            
            const {
                scrollWidth,
                scrollHeight
            } = ref.current;
            
            
            
            return (
                (scrollWidth > clientWidth)
                ||
                (scrollHeight > clientHeight)
            );
        });
        if (hasOverflowed) setCurrentFallbackIndex(currentFallbackIndex + 1);
    }, [currentFallbackIndex, maxFallbackIndex, ...sizes]);
    
    
    
    // jsx:
    return (
        <>
            { childrenWithSizes.map((childWithSize) => childWithSize.child) }
        </>
    );
}
