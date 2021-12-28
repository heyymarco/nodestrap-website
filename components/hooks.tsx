import {
    useRef,
    useReducer as _useReducer,
}                           from 'react'         // base technology of our nodestrap components

// cssfn:
import type {
    Cust,
}                           from '@cssfn/css-types'   // ts defs support for cssfn
import {
    StyleSheet, createSheet, globalDef, atRoot, vars,
}                           from '@cssfn/cssfn'       // cssfn core

// nodestrap utilities:
import {
    useIsomorphicLayoutEffect,
}                           from '@nodestrap/hooks'



// types:

export type BoxOptions = 'border-box' | 'content-box'
export interface SizeOptions {
    box: BoxOptions
}
const defaultElementSizeOptions : SizeOptions = { box: 'border-box'  };
const defaultWindowSizeOptions  : SizeOptions = { box: 'content-box' };



// hooks:

type Size = { width: number, height: number }
const reducerHandler = (size: Partial<Size>, newSize: Size): Partial<Size> => {
    if ((newSize.width === size.width) && (newSize.height === size.height)) return size; // no diff => no changes needed
    
    return newSize;
}
const useSizeState = (initial?: () => Partial<Size>|undefined) => !initial ? _useReducer(reducerHandler, {}) : _useReducer(reducerHandler, {}, () => initial() ?? {});



export type OnElementResizeCallback = (elm: HTMLElement) => void
export const useElementOnResize = (callback: OnElementResizeCallback, options = defaultElementSizeOptions) => {
    const elmRef = useRef<HTMLElement>(null);
    
    
    
    useIsomorphicLayoutEffect(() => {
        const elm = elmRef.current;
        if (!elm) return;
        
        
        
        // handlers:
        const handleResize = () => {
            callback(elm);
        }
        
        
        
        // setups:
        const observer = new ResizeObserver(handleResize);
        observer.observe(elm, options);
        
        
        
        // cleanups:
        return () => {
            observer.disconnect();
        };
    }, []);
    
    
    
    return elmRef;
};

export const useElementSize = (options = defaultElementSizeOptions) => {
    const borderBox = (options.box === 'border-box');
    
    const [elmSize, setElmSize] = useSizeState();
    
    
    
    const elmRef = useElementOnResize((elm) => {
        setElmSize({
            width  : (borderBox ? elm.offsetWidth  : elm.clientWidth),
            height : (borderBox ? elm.offsetHeight : elm.clientHeight),
        });
    }, options);
    
    
    
    return [elmSize?.width ?? null, elmSize?.height ?? null, elmRef] as const;
};

export interface CssSizeOptions extends Partial<SizeOptions> {
    varWidth  ?: Cust.Decl
    varHeight ?: Cust.Decl
}
export const useElementCssSize = (options: CssSizeOptions) => {
    const [elmWidth, elmHeight, setElmRef] = useElementSize({...defaultElementSizeOptions, ...options});
    
    
    
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
};



export type OnWindowResizeCallback = (window: Window) => void
export const useWindowOnResize = (callback: OnWindowResizeCallback) => {
    useIsomorphicLayoutEffect(() => {
        if (typeof(window) === 'undefined') return;
        
        
        
        // handlers:
        const handleResize = () => {
            callback(window);
        };
        
        
        
        // setups:
        window.addEventListener('resize', handleResize);
        
        
        
        // cleanups:
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};

export const useWindowSize = (options = defaultWindowSizeOptions) => {
    const borderBox = (options.box === 'border-box');
    
    const [windowSize, setWindowSize] = useSizeState(() => {
        if (typeof(window) === 'undefined') return undefined;
        
        return {
            width  : (borderBox ? window.outerWidth  : window.innerWidth),
            height : (borderBox ? window.outerHeight : window.innerHeight),
        };
    });
    
    
    
    useWindowOnResize((window) => {
        setWindowSize({
            width  : (borderBox ? window.outerWidth  : window.innerWidth),
            height : (borderBox ? window.outerHeight : window.innerHeight),
        });
    });
    
    
    
    return [windowSize?.width ?? null, windowSize?.height ?? null] as const;
};

export const useWindowCssSize = (options: CssSizeOptions) => {
    const [windowWidth, windowHeight] = useWindowSize({...defaultWindowSizeOptions, ...options});
    
    
    
    const { varWidth, varHeight } = options;
    const sheetWidth  = useRef<StyleSheet | null>(null);
    const sheetHeight = useRef<StyleSheet | null>(null);
    
    useIsomorphicLayoutEffect(() => {
        if (windowWidth === null) return;
        if (!varWidth) return;
        
        
        
        // setups:
        sheetWidth.current = createSheet(() => [
            globalDef([
                atRoot([
                    vars({
                        [varWidth]: `${windowWidth}px`,
                    }),
                ]),
            ]),
        ]);
        
        
        
        // cleanups:
        return () => {
            sheetWidth.current?.detach();
        };
    }, [windowWidth]);
    
    useIsomorphicLayoutEffect(() => {
        if (windowHeight === null) return;
        if (!varHeight) return;
        
        
        
        // setups:
        sheetHeight.current = createSheet(() => [
            globalDef([
                atRoot([
                    vars({
                        [varHeight]: `${windowHeight}px`,
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
    }, [windowHeight]);
};
