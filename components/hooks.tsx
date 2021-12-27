import { useRef, useState } from 'react'
import { StyleSheet, createSheet, globalDef, atRoot, vars } from '@cssfn/cssfn'
import type { Cust } from '@cssfn/css-types'
import { useIsomorphicLayoutEffect } from '@nodestrap/hooks'



export type BoxOptions = 'border-box' | 'content-box'
export interface SizeOptions {
    box: BoxOptions
}
const defaultSizeOptions : SizeOptions = { box: 'border-box' };



export type OnResizeCallback = (elm: HTMLElement) => void
export const useElementOnResize = (callback: OnResizeCallback, options = defaultSizeOptions) => {
    const [elmRef, setElmRef] = useState<HTMLElement | null>(null);
    
    
    
    useIsomorphicLayoutEffect(() => {
        if (!elmRef) return;
        
        
        
        // setups:
        const observer = new ResizeObserver(() => callback(elmRef));
        observer.observe(elmRef, options);
        
        
        
        // cleanups:
        return () => {
            observer.disconnect();
        };
    }, [elmRef]);
    
    
    
    return setElmRef;
}

export const useElementSize = (options = defaultSizeOptions) => {
    const [elmWidth,  setElmWidth ] = useState<number|null>(null);
    const [elmHeight, setElmHeight] = useState<number|null>(null);
    
    
    
    const borderBox = (options.box === 'border-box');
    const setElmRef = useElementOnResize((elm) => {
        setElmWidth(borderBox ? elm.offsetWidth : elm.clientWidth);
        setElmHeight(borderBox ? elm.offsetHeight : elm.clientHeight);
    }, options);
    
    
    
    return [setElmRef, elmWidth, elmHeight] as const;
}

export interface CssSizeOptions extends Partial<SizeOptions> {
    varWidth  ?: Cust.Decl
    varHeight ?: Cust.Decl
}
export const useElementCssSize = (options: CssSizeOptions) => {
    const [setElmRef, elmWidth, elmHeight] = useElementSize({...defaultSizeOptions, ...options});
    
    
    
    const { varWidth, varHeight } = options;
    const sheetWidth  = useRef<StyleSheet | null>(null);
    const sheetHeight = useRef<StyleSheet | null>(null);
    
    useIsomorphicLayoutEffect(() => {
        if (elmWidth === null) return;
        if (!varWidth) return;
        
        
        
        // setups:
        sheetWidth.current = createSheet(() => [
            globalDef([
                atRoot([
                    vars({
                        [varWidth]: `${elmWidth}px`,
                    }),
                ]),
            ]),
        ]);
        
        
        
        // cleanups:
        return () => {
            sheetWidth.current?.detach();
        };
    }, [elmWidth]);
    
    useIsomorphicLayoutEffect(() => {
        if (elmHeight === null) return;
        if (!varHeight) return;
        
        
        
        // setups:
        sheetHeight.current = createSheet(() => [
            globalDef([
                atRoot([
                    vars({
                        [varHeight]: `${elmHeight}px`,
                    }),
                ]),
            ]),
        ])
        .attach()
        ;
        
        
        
        // cleanups:
        return () => {
            sheetHeight.current?.detach();
        };
    }, [elmHeight]);
    
    
    
    return setElmRef;
}