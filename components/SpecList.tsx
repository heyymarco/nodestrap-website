import { AccordionItemProps, AccordionItem } from '@nodestrap/accordion'
import { ThemeName } from '@nodestrap/basic';
import { ListProps, List, ListItem, ListSeparatorItem } from '@nodestrap/list'
import React from 'react';
import styles from './SpecList.module.scss'



export function SpecList(props: ListProps) {
    return (
        <List
            {...props}
            theme={props.theme ?? 'primary'}
            mild={props.mild ?? false}
            classes={[styles.codeList]}
        >
            { props.children }
        </List>
    );
}
SpecList.prototype = List.prototype;

export function SubSpecList(props: ListProps) {
    return (
        <SpecList
            {...props}
            listStyle='flush'
        >
            { props.children }
        </SpecList>
    );
}
SubSpecList.prototype = SpecList.prototype;

export function SimpleSpecItem(props: DetailSpecItemProps) {
    return (
        <ListItem
            {...props}
            mild={props.mild ?? true}
        >
            { props.children }
        </ListItem>
    );
}
SimpleSpecItem.prototype = ListItem.prototype;

export function TitleSpecItem(props: DetailSpecItemProps) {
    return (
        <SimpleSpecItem
            {...props}
            mild={props.mild ?? false}
        >
            { props.children }
        </SimpleSpecItem>
    );
}
TitleSpecItem.prototype = SimpleSpecItem.prototype;

export interface DetailSpecItemProps extends AccordionItemProps {
    code    ?: string|React.ReactChild
    title   ?: string
    excerpt ?: string
    theme   ?: ThemeName
}
export function DetailSpecItem(props: DetailSpecItemProps) {
    return (
        <AccordionItem
            {...props}
            mild={props.mild ?? true}
            
            tag={props.tag ?? 'h4'}
            label={props.label ?? <>
                {(typeof(props.code) === 'string') ?  <code>{ props.code }</code> : props.code}
                {props.title}
                {(typeof(props.excerpt) === 'string') ? ` - ${props.excerpt}` : props.excerpt}
            </>}
        >
            { props.children }
        </AccordionItem>
    );
}
DetailSpecItem.prototype = AccordionItem.prototype;
