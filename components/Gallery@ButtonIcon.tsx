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
import { usesBackg } from '@nodestrap/basic'
import { ButtonIcon } from '@nodestrap/button-icon'
import iconFonts from '@nodestrap/icon/dist/Icon-font-material'
import { Gallery } from "./Gallery";



export const useGallerySheet = createUseSheet(() => {
    const [backg, backgRefs] = usesBackg();
    
    
    
    const labelElm = ':nth-child(2)';
    return [
        mainComposition(
            rule('&&&', { // makes `.ButtonIconGallery` is more specific than `.Gallery`
                ...style({
                    ...children('.body', {
                        ...children('*', { // ButtonIcon
                            // display           : 'flex',
                            // flexDirection     : 'row',
                            justifyContent    : 'start',
                            alignItems        : 'center',
                            flexWrap          : 'nowrap',
                            
                            ...children(labelElm, {
                                paddingInline : spacers.sm,
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
}, /*sheetId :*/'qazsdydxhx'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



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
            <ButtonIcon
                {...itemProps}
                icon={itemName}
            >
                <span>
                    {itemName}
                </span>
            </ButtonIcon>
        }</Gallery>
    )
}
export { IconGallery as default }