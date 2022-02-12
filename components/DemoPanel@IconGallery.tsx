import React, { useState } from 'react'

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
import Card from '@nodestrap/card';
import { usesBackg } from '@nodestrap/basic'
import { ResponsiveProvider } from '@nodestrap/responsive'


import { Icon } from '@nodestrap/icon'
import iconFonts from '@nodestrap/icon/dist/Icon-font-material'
import { Nav, NavItem, NextItem, PrevItem } from '@nodestrap/nav'



export const useDemoIconGallerySheet = createUseSheet(() => {
    const [backg, backgRefs] = usesBackg();
    
    
    
    return [
        mainComposition(
            rule('&&', { // makes `.DemoIconGallery` is more specific than `.Card`
                ...style({
                    ...children(['.header', '.footer'], {
                        display       : 'flex',
                        flexDirection : 'column',
                        alignItems    : 'stretch',

                        ...children('.limiter', {
                            display       : 'flex',
                            flexDirection : 'column',
                            alignItems    : 'center',
                            maxInlineSize : '100%',
                        }),
                    }),
                    
                    ...children('.body', {
                        display               : 'grid',
                        gridAutoFlow          : 'row',
                        gridTemplateColumns   : 'repeat(auto-fill, minmax(100px, 1fr))',
                        gridAutoRows          : 'max-content',

                        justifyItems          : 'stretch', // give each item maximum allowed width
                        justifyContent        : 'center',  // if the items are too few, center whole items horizontally
                        
                        overflow              : 'visible',
                        
                        gap                   : spacers.lg,
                        
                        ...children('*', { // icon entry
                            display           : 'flex',
                            flexDirection     : 'row',
                            flexWrap          : 'nowrap',
                            
                            transition        : [
                                ['transform', '100ms', 'ease-out'],
                            ],
                            
                            ...children(':first-child', {
                                blockSize     : '24px',
                                aspectRatio   : 1/1,
                            }),
                            
                            ...children(':nth-child(2)', {
                                paddingInline : spacers.sm,
                            }),
                            ...rule(':hover', {
                                position      : 'relative',
                                zIndex        : 1,
                                transform     : [['scale(1.05)']],
                            }),
                            ...rule(':not(:hover)', {
                                ...children(':nth-child(2)', {
                                    whiteSpace   : 'nowrap',
                                    overflow     : 'hidden',
                                    textOverflow : 'ellipsis',
                                }),
                            }),
                            ...rule(':hover', {
                                ...children(':nth-child(2)', {
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
}, /*sheetId :*/'djdmelzjgf'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



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



export const DemoIconGallery = () => {
    const style = useDemoIconGallerySheet();
    
    
    
    const itemsPerPage = 100;
    const [page, setPage] = useState<number>(0);
    const maxPageIndex = Math.ceil(iconSets.length / itemsPerPage) - 1;
    
    
    
    const pageNav = (
        <ResponsiveProvider fallbacks={[null, 9, 5]}>{(limit) => (
            <div className='limiter'>
                <Nav theme='primary' size='sm'>
                    <PrevItem
                        onClick={() => setPage(0)}
                    />
                    {
                        ((): number[] => {
                            if (limit === null) return (
                                [...Array(maxPageIndex + 1)]
                                .map((value, counter) => counter)
                            );
                            
                            
                            const rangeLeft   = Math.floor((limit - 1) / 2);
                            const rangeRight  = Math.ceil((limit - 1) / 2);
                            const limitLeft   = page - rangeLeft;
                            const limitRight  = page + rangeRight;
                            
                            const restLeft    = (limitLeft  < 0           ) ? -limitLeft                  : 0;
                            const restRight   = (limitRight > maxPageIndex) ? (limitRight - maxPageIndex) : 0;
                            
                            const indexLeft   = Math.max(0, limitLeft - restRight);
                            const indexRight  = Math.min(maxPageIndex, limitRight + restLeft);
                            
                            return (
                                [...Array(indexRight - indexLeft + 1)]
                                .map((value, counter) => counter + indexLeft)
                            );
                        })()
                        .map((counter) => (
                            <NavItem
                                key={counter}
                                active={counter === page}
                                onClick={() => setPage(counter)}
                            >{counter + 1}</NavItem>
                        ))
                    }
                    <NextItem
                        onClick={() => setPage(maxPageIndex)}
                    />
                </Nav>
            </div>
        )}</ResponsiveProvider>
    );
    return (
        <Card classes={[style.main, 'media']} cardStyle='flush' header={pageNav} footer={pageNav}>
            {
                iconSets
                .slice((page * itemsPerPage), (page * itemsPerPage) + itemsPerPage)
                .map((iconName, index) =>
                    <span key={index}>
                        <Icon
                            icon={iconName}
                            theme='primary'
                        />
                        <span>
                            {iconName}
                        </span>
                    </span>
                )
            }
        </Card>
    );
}
export { DemoIconGallery as default }
