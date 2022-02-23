import React from 'react';

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react
import spacers from '@nodestrap/spacers'

import { Element, ElementProps } from '@nodestrap/element';



export const useTransparentPreviewSheet = createUseSheet(() => [
    mainComposition(
        style({
            background: [
                'url("/images/tile-1.svg")',
                'url("/images/soft-rainbow.svg")',
            ],
            padding: spacers.lg,
        })
    ),
], /*sheetId :*/'zjw8gwqkbq'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export const TransparentPreview = (props: ElementProps) => {
    const sheet = useTransparentPreviewSheet();
    
    
    
    return (
        <Element {...props} mainClass={sheet.main}>
            { props.children }
        </Element>
    );
}