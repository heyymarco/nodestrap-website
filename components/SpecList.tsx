import { AccordionItem } from '@nodestrap/accordion'
import { ListProps, List, ListItem } from '@nodestrap/list'
import styles from './SpecList.module.scss'



export function SpecList(props: ListProps) {
    return (
        <List
            theme={props.theme ?? 'primary'}
            classes={[styles.codeList]}
        >
            { props.children }
        </List>
    );
}
export const SimpleSpecItem = ListItem;
export const DetailSpecItem = AccordionItem;