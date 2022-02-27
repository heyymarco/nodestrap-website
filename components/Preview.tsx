import React from 'react';

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    
    
    
    // rules:
    rule,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react
import colors from '@nodestrap/colors'
import spacers from '@nodestrap/spacers'

import { Element, ElementProps } from '@nodestrap/element';



export const useTransparentPreviewSheet = createUseSheet(() => [
    mainComposition(
        style({
            display: 'grid',
            justifyItems : 'normal',
            alignItems   : 'normal',
            gridAutoFlow : 'row',
            ...rule('.block', {
                display: 'block',
            }),
            
            gap          : spacers.default,
            
            padding: spacers.lg,
            background   : colors.secondaryMild,
            ...rule('.transp', {
                background: [
                    'url("/images/tile-1.svg")',
                    'url("/images/soft-rainbow.svg")',
                ],
            }),
        })
    ),
], /*sheetId :*/'zjw8gwqkbq'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export interface PreviewProps extends ElementProps {
    blockDisplay ?: boolean
}
export const Preview = (props: PreviewProps) => {
    const sheet = useTransparentPreviewSheet();
    
    
    
    return (
        <Element
            {...props}
            
            
            // classes:
            mainClass={sheet.main}
            classes={[...(props.classes ?? []),
                props.blockDisplay ? 'block' : null,
            ]}
        >
            { props.children }
        </Element>
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