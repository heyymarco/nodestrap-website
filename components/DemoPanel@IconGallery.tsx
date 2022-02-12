import React, { useState } from 'react'

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    
    
    
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


import { Icon } from '@nodestrap/icon'
import iconFonts from '@nodestrap/icon/dist/Icon-font-material'
import { Nav, NavItem, NextItem, PrevItem } from '@nodestrap/nav'



export const useDemoIconGallerySheet = createUseSheet(() => [
    mainComposition(
        rule('&&', { // makes `.DemoIconGallery` is more specific than `.Card`
            ...style({
                // display: 'flex',
                // flexDirection: 'column',
                // flexWrap: 'nowrap',
                // gap: spacers.lg,
    
                ...children(['.header', '.footer'], {
                    display       : 'flex',
                    flexDirection : 'column',
                    alignItems    : 'center',
                }),
                
                ...children('.body', {
                    display              : 'grid',
                    gridAutoFlow         : 'row',
                    gridTemplateColumns  : 'repeat(auto-fill, minmax(100px, 1fr))',
                    gridAutoRows         : 'max-content',
                    
                    gap                  : spacers.lg,
                    
                    ...children('*', {
                        display          : 'flex',
                        flexDirection    : 'row',
                        flexWrap         : 'nowrap',
                        ...rule(':not(:hover)', {
                            ...children(':nth-child(2)', {
                                whiteSpace   : 'nowrap',
                                overflow     : 'hidden',
                                textOverflow : 'ellipsis',
                            }),
                        }),
                        ...rule(':hover', {
                            ...children(':nth-child(2)', {
                                position : 'relative',
                                zIndex   : 1,
                            }),
                        }),
                        gap              : spacers.sm,
                        
                        ...children(':first-child', {
                            blockSize   : '24px',
                            aspectRatio : 1/1,
                        })
                    }),
                }),
            }),
        }),
    ),
], /*sheetId :*/'djdmelzjgf'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



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
    const [page, setPage] = useState<number>(1);
    const pageIndex = (page - 1);
    const maxPageIndex = Math.ceil(iconSets.length / itemsPerPage);
    
    
    
    const pageNav = (
        <Nav theme='primary' size='sm'>
            <PrevItem
                onClick={() => setPage(Math.max(1, page - 1))}
            />
            {
                [...Array(maxPageIndex)].map((index, counter) => (
                    <NavItem
                        key={counter}
                        active={(counter + 1) === page}
                        onClick={() => setPage(counter + 1)}
                    >{counter + 1}</NavItem>
                ))
            }
            <NextItem
                onClick={() => setPage(Math.min(maxPageIndex, page + 1))}
            />
        </Nav>
    );
    return (
        <Card classes={[style.main, 'media']} cardStyle='flush' header={pageNav} footer={pageNav}>
            {
                iconSets
                .slice((pageIndex * itemsPerPage), (pageIndex * itemsPerPage) + itemsPerPage)
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
