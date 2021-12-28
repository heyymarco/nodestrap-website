// react:
import {
    useRef,
    useMemo as _useMemo,
}                           from 'react'         // base technology of our nodestrap components

// cssfn:
import type {
    Cust,
}                           from '@cssfn/css-types'   // ts defs support for cssfn
import {
    // general types:
    StyleSheet,
    
    
    // styles:
    createSheet,
    
    
    // compositions:
    globalDef,
    vars,
    
    
    // rules:
    atRoot,
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

export type Size        = { width: number, height: number }
export type Nullable<T> = { [key in keyof T] : T[key] | null }
export type Mutable<T>  = { -readonly [key in keyof T]: T[key] }



// internal hooks:

function useSizeRef()                          : Readonly<Nullable<Size>>
function useSizeRef(initial?: () => Size|null) : Readonly<Size>
function useSizeRef(initial?: () => Size|null) {
    return (
        initial
        ?
        _useMemo<Readonly<Nullable<Size>>>(() => initial() ?? ({ width: null, height: null }), [])
        :
        _useMemo<Readonly<Nullable<Size>>>(() => ({ width: null, height: null }), [])
    );
}

const useCssSize = (size: Readonly<Nullable<Size>>, options: CssSizeOptions) => {
    const { width   , height    } = size;
    const { varWidth, varHeight } = options;
    const sheet = useRef<StyleSheet | null>(null);
    
    useIsomorphicLayoutEffect(() => {
        const hasWidth  = ((width  !== null) && varWidth );
        const hasHeight = ((height !== null) && varHeight)
        if (!hasWidth && !hasHeight) return;
        
        
        
        // setups:
        sheet.current = createSheet(() => [
            globalDef([
                atRoot([
                    hasWidth  && vars({
                        [varWidth]  : `${width}px`,
                    }),
                    hasHeight && vars({
                        [varHeight] : `${height}px`,
                    }),
                ]),
            ]),
        ]);
        
        
        
        // cleanups:
        return () => {
            sheet.current?.detach();
        };
    }, [width, height, varWidth, varHeight]);
};



// hooks:

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
    
    const sizeRef = useSizeRef();
    
    
    
    const elmRef = useElementOnResize((elm) => {
        (sizeRef as Mutable<typeof sizeRef>).width  = (borderBox ? elm.offsetWidth  : elm.clientWidth);
        (sizeRef as Mutable<typeof sizeRef>).height = (borderBox ? elm.offsetHeight : elm.clientHeight);
    }, options);
    
    
    
    return [sizeRef, elmRef] as const;
};

export interface CssSizeOptions extends Partial<SizeOptions> {
    varWidth  ?: Cust.Decl
    varHeight ?: Cust.Decl
}
export const useElementCssSize = (options: CssSizeOptions) => {
    const [size, setElmRef] = useElementSize({...defaultElementSizeOptions, ...options});
    useCssSize(size, options);
    
    
    
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
    
    const sizeRef = useSizeRef((): Size|null => {
        if (typeof(window) === 'undefined') return null;
        
        return {
            width  : (borderBox ? window.outerWidth  : window.innerWidth),
            height : (borderBox ? window.outerHeight : window.innerHeight),
        };
    });
    
    
    
    useWindowOnResize((window) => {
        (sizeRef as Mutable<typeof sizeRef>).width  = (borderBox ? window.outerWidth  : window.innerWidth);
        (sizeRef as Mutable<typeof sizeRef>).height = (borderBox ? window.outerHeight : window.innerHeight);
    });
    
    
    
    return sizeRef;
};

export const useWindowCssSize = (options: CssSizeOptions) => {
    const size = useWindowSize({...defaultWindowSizeOptions, ...options});
    useCssSize(size, options);
};
