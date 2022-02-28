import React from 'react';

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
import colors from '@nodestrap/colors'
import spacers from '@nodestrap/spacers'

import { Card, CardProps } from '@nodestrap/card';



export const usePreviewSheet = createUseSheet(() => [
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
                        justifyItems : 'center',
                        alignItems   : 'center',
                    }),
                    ...rule('.stretch&', {
                        justifyItems : 'stretch',
                        alignItems   : 'stretch',
                    }),
                    
                    gridAutoFlow : 'row',
                    
                    gap          : spacers.default,
                }),
                ...rule('.block&', {
                    display  : 'block',
                }),
                
                padding      : spacers.lg,
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
], /*sheetId :*/'zjw8gwqkbq'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export interface PreviewProps extends CardProps {
    blockDisplay ?: boolean
    stretch      ?: boolean
}
export const Preview = (props: PreviewProps) => {
    const sheet = usePreviewSheet();
    
    
    
    return (
        <Card
            {...props}

            theme={props.theme ?? 'primary'}
            // mild={props.mild ?? false}
            
            // classes:
            classes={[...(props.classes ?? []),
                sheet.main,
                (props.blockDisplay ?? false) ? 'block'   : null,
                (props.stretch      ?? true ) ? 'stretch' : null,
            ]}
            
            
            header={props.header ?? 'Preview'}
        >
            { props.children }
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