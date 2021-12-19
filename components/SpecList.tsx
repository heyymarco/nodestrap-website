import { AccordionItemProps, AccordionItem } from '@nodestrap/accordion'
import { ListProps, List, ListItem } from '@nodestrap/list'
import React from 'react';
import styles from './SpecList.module.scss'



export function SpecList(props: ListProps) {
    return (
        <List
            {...props}
            theme={props.theme ?? 'primary'}
            classes={[styles.codeList]}
        >
            { props.children }
        </List>
    );
}
SpecList.prototype = List.prototype;

export const SimpleSpecItem = ListItem;

export interface DetailSpecItemProps extends AccordionItemProps {
    code    ?: string|React.ReactChild
    excerpt ?: string
}
export function DetailSpecItem(props: DetailSpecItemProps) {
    return (
        <AccordionItem
            {...props}
            tag={props.tag ?? 'h4'}
            label={props.label ?? <>
                {(typeof(props.code) === 'string') ?  <code>{ props.code }</code> : props.code}
                {(typeof(props.excerpt) === 'string') ? ` - ${props.excerpt}` : props.excerpt}
            </>}
        >
            { props.children }
        </AccordionItem>
    );
}
DetailSpecItem.prototype = AccordionItem.prototype;
