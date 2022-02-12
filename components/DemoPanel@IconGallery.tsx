import React, { useRef, useState } from 'react'

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

import { ThemeOption } from './DemoPanel';

import spacers from '@nodestrap/spacers'
import Card from '@nodestrap/card';
import { OrientationName, ThemeName, usesBackg } from '@nodestrap/basic'
import { ResponsiveProvider } from '@nodestrap/responsive'
import { Icon, cssProps as iconCssProps } from '@nodestrap/icon'
import iconFonts from '@nodestrap/icon/dist/Icon-font-material'
import { NavItem, NextItem, PrevItem } from '@nodestrap/nav'
import Group from '@nodestrap/group';
import { Search } from '@nodestrap/input';
import { Label } from '@nodestrap/label';
import { Element } from '@nodestrap/element';
import { ButtonIcon } from '@nodestrap/button-icon';
import { Pagination } from './Pagination';



export const useDemoIconGallerySheet = createUseSheet(() => {
    const [backg, backgRefs] = usesBackg();
    
    
    
    return [
        mainComposition(
            rule('&&', { // makes `.DemoIconGallery` is more specific than `.Card`
                ...style({
                    ...children(['.header', '.footer'], {
                        display       : 'flex',
                        flexDirection : 'column',
                        alignItems    : 'center',
                        
                        gap           : spacers.default,
                        
                        filter        : [['contrast(80%)']],
                        
                        ...children('.limiter', {
                            display       : 'flex',
                            flexDirection : 'column',
                            alignItems    : 'center',
                            maxInlineSize : '100%',
                            
                            alignSelf     : 'stretch',
                            
                            ...children(['.flow'], {
                                display   : 'flex',
                                ...rule('.block', {
                                    flexDirection : 'column',
                                }),
                                ...rule('.inline', {
                                    flexDirection : 'row',
                                }),
                                gap       : spacers.default,
                                
                                ...children('*>*:first-child', {
                                    flex: [[0, 0, 'auto']],
                                }),
                            }),
                        }),
                    }),
                    
                    ...children('.body', {
                        display               : 'grid',
                        gridAutoFlow          : 'row',
                        gridTemplateColumns   : 'repeat(auto-fill, minmax(100px, 1fr))',
                        gridAutoRows          : 'max-content',
                        
                        justifyItems          : 'stretch', // give each item maximum allowed width
                        justifyContent        : 'center',  // if the items are too few, center whole items horizontally
                        
                        overflow              : 'hidden',
                        
                        gap                   : spacers.lg,
                        
                        ...children('*', { // icon entry
                            display           : 'flex',
                            flexDirection     : 'row',
                            justifyContent    : 'start',
                            alignItems        : 'center',
                            flexWrap          : 'nowrap',
                            
                            transition        : [
                                ['transform', '100ms', 'ease-out'],
                            ],
                            
                            ...children(':first-child', {
                                blockSize     : iconCssProps.sizeMd,
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



const alliIconSets = [
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
    
    
    
    const [theme , setTheme ] = useState<ThemeName|undefined>('primary');
    const [search, setSearch] = useState<string>('');
    const searchRef           = useRef<HTMLInputElement>(null);
    
    
    
    const hasSearch = !!search && !!search.trim();
    const filteredIconSets = (hasSearch && search.trim()) ? (() => {
        const filter = search.trim().toLowerCase();
        return alliIconSets.filter((icon) => icon.toLowerCase().includes(filter));
    })() : alliIconSets;
    const itemsPerPage = 100;
    const [page, setPage] = useState<number>(0);
    const maxPageIndex = Math.ceil(filteredIconSets.length / itemsPerPage) - 1;
    if ((maxPageIndex >= 0) && (page > maxPageIndex)) setPage(0);
    
    
    
    const pageOptions = (
        <ResponsiveProvider<OrientationName> fallbacks={['inline', 'block']}>{(orientation) => (
            <div className='limiter'>
                <Element classes={['flow', orientation]}>
                    <Group orientation='inline' size='sm'>
                        <Label theme='secondary' mild={true}>
                            <Icon icon='color_lens' />
                        </Label>
                        <ThemeOption orientation='inline' name='' showName={false} size='sm' value={theme} setValue={setTheme} />
                    </Group>
                    <Group orientation='inline' size='sm'>
                        {
                            hasSearch
                            ?
                            <ButtonIcon theme='secondary' mild={true} icon='clear' onClick={() => { setSearch(''); searchRef.current?.focus(); }} />
                            :
                            <Label theme='secondary' mild={true}>
                                <Icon icon='search' />
                            </Label>
                        }
                        <Search elmRef={searchRef} enableValidation={false} placeholder='search' value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
                    </Group>
                </Element>
            </div>
        )}</ResponsiveProvider>
    );
    const pageNav = (
        <ResponsiveProvider fallbacks={[null, 9, 5]}>{(limit) => (
            <div className='limiter'>
                <Pagination
                    theme={theme}
                    size='sm'
                    
                    itemsLimit={limit}
                    prevItems={
                        <PrevItem
                            onClick={() => setPage(0)}
                        />
                    }
                    nextItems={
                        <NextItem
                            onClick={() => setPage(maxPageIndex)}
                        />
                    }
                >
                    {
                        [...Array(maxPageIndex + 1)]
                        .map((value, counter) => counter)
                        .map((counter) => (
                            <NavItem
                                key={counter}
                                active={counter === page}
                                onClick={() => setPage(counter)}
                            >{counter + 1}</NavItem>
                        ))
                    }
                </Pagination>
            </div>
        )}</ResponsiveProvider>
    );
    return (
        <Card
            classes={[style.main, 'media']}
            cardStyle='flush'
            theme={theme}
            
            header={
                <>
                    {pageOptions}
                    {pageNav}
                </>
            }
            footer={pageNav}
        >
            {
                filteredIconSets
                .slice((page * itemsPerPage), (page * itemsPerPage) + itemsPerPage)
                .map((iconName, index) =>
                    <span key={index}>
                        <Icon
                            icon={iconName}
                            theme={theme}
                            size='md'
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
