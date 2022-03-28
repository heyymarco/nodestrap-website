import React, { useEffect, useRef, useState } from 'react';

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    
    
    
    // rules:
    rule,
    
    
    
    // combinators:
    children,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

import {
    // utilities:
    setRef,
}                           from '@nodestrap/utilities'
import colors from '@nodestrap/colors'
import spacers from '@nodestrap/spacers'

import { usesPadding } from '@nodestrap/basic';
import { Card, CardProps } from '@nodestrap/card';
import { useWindowSize } from '@nodestrap/dimensions';



export const usePreviewSheet = createUseSheet(() => {
    const [, , paddingDecls] = usesPadding();

    return [
        mainComposition(
            style({
                ...children('.header.header', {
                    padding   : spacers.xs,
                    textAlign : 'center',
                    filter    : 'none',
                }),
                ...children('.body.body', {
                    ...rule(':not(.block)&', {
                        display: 'grid',
                        
                        ...rule(':not(.stretch)&', {
                            justifyItems   : 'center',
                            alignItems     : 'center',
                            justifyContent : 'center', // for unstretchable item => do not stretch the group's width
                            alignContent   : 'start', // for unstretchable item => do not stretch the group's height
                        }),
                        ...rule('.stretch&', {
                            justifyItems   : 'stretch',
                            alignItems     : 'stretch',
                        }),
                        
                        gridAutoFlow : 'row',
                        
                        gap          : `var(--gap, ${spacers.default})`,
                    }),
                    ...rule('.block&', {
                        display  : 'block',
                    }),
                    
                    [paddingDecls.paddingInline] : `var(--gap, ${spacers.lg})`,
                    [paddingDecls.paddingBlock ] : `var(--gap, ${spacers.lg})`,
                    background   : colors.secondaryMild,
                    ...rule('.transp&', {
                        background: [
                            'url("/images/tile-1.svg")',
                            'url("/images/soft-rainbow.svg")',
                        ],
                    }),
                }),
            })
        ),
    ];
}, /*sheetId :*/'zjw8gwqkbq'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export interface PreviewProps extends CardProps {
    blockDisplay ?: boolean
    stretch      ?: boolean
    preventShift ?: boolean
    gap          ?: string
    
    children     ?: React.ReactNode | ((isLoaded: boolean) => React.ReactNode)
}
export const Preview = ({blockDisplay = false, stretch = true, preventShift = false, gap, children, ...restProps}: PreviewProps) => {
    const cardRef = useRef<HTMLElement>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        if (isLoaded) return;
        
        
        
        const container = cardRef.current as HTMLElement|null;
        if (container) {
            if (preventShift) {
                container.style.boxSizing = '';
                container.style.height = '';
                
                setLoaded(false);
                setTimeout(() => {
                    container.style.boxSizing = 'border-box';
                    container.style.height = `${container.offsetHeight + 5}px`;
                    setLoaded(true);
                }, 0);
            }
            else {
                setLoaded(true);
            } // if
            container.style.overflow = 'hidden';
        } // if
    }, [isLoaded, preventShift]);
    
    
    
    const { width: currentMediaWidth } = useWindowSize();
    const [mediaWidth, setMediaWidth] = useState<number|null>(currentMediaWidth);
    useEffect(() => {
        if (mediaWidth === currentMediaWidth) return;
        setMediaWidth(currentMediaWidth);
        
        
        
        setLoaded(false);
    }, [mediaWidth, currentMediaWidth]);
    
    
    
    const sheet = usePreviewSheet();
    
    
    
    return (
        <Card
            {...restProps}
            
            elmRef={(elm) => {
                setRef(restProps.elmRef, elm);
                setRef(cardRef, elm);
            }}

            theme={restProps.theme ?? 'primary'}
            // mild={props.mild ?? false}
            
            // classes:
            classes={[...(restProps.classes ?? []),
                sheet.main,
                blockDisplay ? 'block'   : null,
                stretch      ? 'stretch' : null,
            ]}
            style={gap ? ({
                ['--gap' as any]: gap,
            }) : {}}
            
            
            header={restProps.header ?? 'Preview'}
        >
            { (typeof(children) === 'function') ? children(isLoaded) : children }
        </Card>
    );
}
export const TransparentPreview = (props: PreviewProps) => {
    return (
        <Preview
            {...props}
            
            
            // classes:
            classes={[...(props.classes ?? []),
                'transp',
            ]}
        />
    );
}