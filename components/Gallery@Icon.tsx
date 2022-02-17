import React, {  } from 'react'

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    imports,
    
    
    
    // rules:
    rule,
    
    
    
    //combinators:
    children,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

import spacers from '@nodestrap/spacers'
import { usesBackg, usesForeg } from '@nodestrap/basic'
import { Icon, cssProps as iconCssProps } from '@nodestrap/icon'
import iconFonts from '@nodestrap/icon/dist/Icon-font-material'
import { Gallery } from "./Gallery";



export const useGallerySheet = createUseSheet(() => {
    const [backg, backgRefs] = usesBackg();
    const [     , foregRefs] = usesForeg();
    
    
    
    const iconElm = ':first-child';
    const labelElm = ':nth-child(2)';
    return [
        mainComposition(
            rule('&&&', { // makes `.IconGallery` is more specific than `.Gallery`
                ...style({
                    ...children('.body', {
                        ...children('*', { // icon entry
                            display           : 'flex',
                            flexDirection     : 'row',
                            justifyContent    : 'start',
                            alignItems        : 'center',
                            flexWrap          : 'nowrap',
                            
                            transition        : [
                                ['transform', '100ms', 'ease-out'],
                            ],
                            ...rule(':hover', {
                                position      : 'relative',
                                zIndex        : 1,
                                transform     : [['scale(1.05)']],
                            }),
                            
                            ...children(iconElm, {
                                blockSize     : iconCssProps.sizeMd,
                                aspectRatio   : 1/1,
                            }),
                            
                            ...children(labelElm, {
                                paddingInline : spacers.sm,

                                cursor        : 'text',
                                userSelect    : 'text',
                                ...children('::selection', {
                                    foreg: foregRefs.foregFn,
                                    backg: backgRefs.backgFn,
                                }),
                            }),
                            ...rule(':not(:hover)', {
                                ...children(labelElm, {
                                    whiteSpace   : 'nowrap',
                                    overflow     : 'hidden',
                                    textOverflow : 'ellipsis',
                                }),
                            }),
                            ...rule(':hover', {
                                ...children(labelElm, {
                                    ...imports([
                                        backg(),
                                    ]),
                                    ...style({
                                        backg    : backgRefs.backg,
                                    }),
                                }),
                            }),
                        }),
                    }),
                }),
            }),
        ),
    ];
}, /*sheetId :*/'f9m0wwbe9x'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



const iconSets = [
    'instagram',
    'whatsapp',
    'close',
    'busy',
    'prev',
    'next',
    'dropdown',
    'dropright',
    'dropleft',
    ...iconFonts,
];



export const IconGallery = () => {
    const style = useGallerySheet();
    
    
    
    return (
        <Gallery
            collection={iconSets}
            classes={[style.main]}
        >{(itemName, itemProps) =>
            <span>
                <Icon
                    {...itemProps}
                    icon={itemName}
                    size='md'
                />
                <span>
                    {itemName}
                </span>
            </span>
        }</Gallery>
    )
}
export { IconGallery as default }