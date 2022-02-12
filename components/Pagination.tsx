// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

// nodestrap utilities:
import {
    // utilities:
    isTypeOf,
}                           from '@nodestrap/utilities'

// nodestrap components:
import {
    // react components:
    ListItemProps,
    ListItem,
}                           from '@nodestrap/list'
import {
    // hooks:
    OrientationName,
    OrientationVariant,
    
    ListStyle,
    ListVariant,
    
    
    
    // react components:
    NavProps,
    Nav,
}                           from '@nodestrap/nav'



// react components:

/*
    Pagination is just a Nav with *manipulated active* on its items
*/

// ListItem => PaginationItem
export type { ListItemProps, ListItemProps as PaginationItemProps, ListItemProps as ItemProps }
export { ListItem, ListItem as PaginationItem, ListItem as Item }



export interface PaginationProps<TElement extends HTMLElement = HTMLElement>
    extends
        NavProps<TElement>
{
    // options:
    itemsLimit ?: number|null
    
    
    // children:
    prevItems ?: React.ReactNode
    nextItems ?: React.ReactNode
}
export function Pagination<TElement extends HTMLElement = HTMLElement>(props: PaginationProps<TElement>) {
    // rest props:
    const {
        // options:
        itemsLimit,
        
        
        // children:
        prevItems,
        children : items,
        nextItems,
    ...restProps} = props;
    
    
    
    const limitedItems = ((): (typeof items) => {
        if ((itemsLimit === undefined) || (itemsLimit === null)) return items;
        
        
        
        const itemsArr = React.Children.toArray(items);
        const activeIndex = itemsArr.findIndex((item) => isTypeOf(item, ListItem) && item.props.active);
        if (activeIndex < 0) return items;
        
        
        
        const limitRangeLeft  = Math.floor((itemsLimit - 1) / 2);
        const limitRangeRight = Math.ceil((itemsLimit - 1) / 2);
        const limitLeft       = activeIndex - limitRangeLeft;
        const limitRight      = activeIndex + limitRangeRight;
        const maxItemIndex    = itemsArr.length - 1;
        
        const restLeft        = (limitLeft  < 0           ) ? -limitLeft                  : 0;
        const restRight       = (limitRight > maxItemIndex) ? (limitRight - maxItemIndex) : 0;
        
        const indexLeft       = Math.max(0, limitLeft - restRight);
        const indexRight      = Math.min(maxItemIndex, limitRight + restLeft);
        
        
        
        return itemsArr.slice(indexLeft, indexRight + 1);
    })();
    
    
    
    // jsx:
    return (
        <Nav<TElement>
            // other props:
            {...restProps}
        >
            { prevItems }
            { limitedItems }
            { nextItems }
        </Nav>
    );
}
Pagination.prototype = Nav.prototype; // mark as Nav compatible
export { Pagination as default }

export type { OrientationName, OrientationVariant }

export type { ListStyle, ListVariant }
