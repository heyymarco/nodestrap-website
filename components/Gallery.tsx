import React, { useRef, useState } from 'react'

// cssfn:
import type {
    Optional,
}                           from '@cssfn/types'       // cssfn's types
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

import { ThemeOption } from './DemoPanel';

import spacers from '@nodestrap/spacers'
import Card from '@nodestrap/card';
import { OrientationName, ThemeName, usesBackg } from '@nodestrap/basic'
import { ResponsiveProvider } from '@nodestrap/responsive'
import { Icon } from '@nodestrap/icon'
import { NavItem, NextItem, PrevItem } from '@nodestrap/nav'
import Group from '@nodestrap/group';
import { Search } from '@nodestrap/input';
import { Label } from '@nodestrap/label';
import { Element } from '@nodestrap/element';
import { ButtonIcon } from '@nodestrap/button-icon';
import { Pagination } from './Pagination';



export const useGallerySheet = createUseSheet(() => {
    const [backg, backgRefs] = usesBackg();
    
    
    
    return [
        mainComposition(
            rule('&&', { // makes `.Gallery` is more specific than `.Card`
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
                        
                        // ...children('*', { // gallery entry
                        // }),
                    }),
                }),
            }),
        ),
    ];
}, /*sheetId :*/'djdmelzjgf'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



export interface ItemProps {
    theme ?: ThemeName,
}
export interface GalleryProps {
    collection : string[]
    children   : (itemName: string, itemProps: ItemProps) => JSX.Element

    classes   ?: Optional<string>[]
}
export const Gallery = ({ collection, children: itemMap, classes }: GalleryProps) => {
    const style = useGallerySheet();
    
    
    
    const [theme , setTheme ] = useState<ThemeName|undefined>('primary');
    const [search, setSearch] = useState<string>('');
    const searchRef           = useRef<HTMLInputElement>(null);
    
    
    
    const hasSearch = !!search && !!search.trim();
    const filteredCollection = (hasSearch && search.trim()) ? (() => {
        const filter = search.trim().toLowerCase();
        return collection.filter((item) => item.toLowerCase().includes(filter));
    })() : collection;
    const itemsPerPage = 100;
    const [pageIndex, setPageIndex] = useState<number>(0);
    const totalPages = Math.ceil(filteredCollection.length / itemsPerPage);
    if (totalPages && (pageIndex > (totalPages - 1))) setPageIndex(0);
    
    
    
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
                            onClick={() => setPageIndex(0)}
                        />
                    }
                    nextItems={
                        <NextItem
                            onClick={() => setPageIndex(totalPages - 1)}
                        />
                    }
                >
                    {
                        [...Array(totalPages)]
                        .map((value, counter) => counter)
                        .map((counter) => (
                            <NavItem
                                key={counter}
                                active={counter === pageIndex}
                                onClick={() => setPageIndex(counter)}
                            >{counter + 1}</NavItem>
                        ))
                    }
                </Pagination>
            </div>
        )}</ResponsiveProvider>
    );
    return (
        <Card
            classes={[style.main, 'media', ...(classes ?? [])]}
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
                filteredCollection
                .slice((pageIndex * itemsPerPage), (pageIndex * itemsPerPage) + itemsPerPage)
                .map((itemName) =>
                    React.cloneElement(
                        itemMap(itemName, { theme }),
                        {
                            key: itemName,
                        }
                    )
                )
            }
        </Card>
    );
}
export { Gallery as default }
