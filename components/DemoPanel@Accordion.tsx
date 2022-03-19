import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ListInitials, ListOptionProps, ListOptions, useListStates } from './DemoPanel@List';

import { Accordion, AccordionItem, ListStyle, OrientationName } from '@nodestrap/accordion'
import { TypeScriptCode } from './Code';



export const accordionInitials = {
};
export type AccordionInitials = typeof accordionInitials & Partial<ListInitials>
export const useAccordionStates = (initials ?: Partial<AccordionInitials>) => {
    const initials2 : AccordionInitials = {
        ...accordionInitials,
        ...initials
    };

    return {
        ...useListStates(initials2),
    }
}
export type AccordionOptionProps = { states: ReturnType<typeof useAccordionStates> } & ListOptionProps
export const AccordionOptions = (props: AccordionOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <ListOptions
            {...props}
        />
    </>);
}



export const DemoAccordion = () => {
    const states = useAccordionStates();
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
    const listStyle : ListStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <Accordion
                    orientation={states.orientation[0]}
                    listStyle={listStyle}
                    actionCtrl={states.actionCtrl[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <AccordionItem>
                        {hasChildren && 'A first item (inherit theme)'}
                    </AccordionItem>
                    <AccordionItem>
                        {hasChildren && 'A second item (inherit theme)'}
                    </AccordionItem>
                    <AccordionItem theme='danger'>
                        {hasChildren && 'A third item (danger theme)'}
                    </AccordionItem>
                    <AccordionItem theme='success'>
                        {hasChildren && 'A fourth item (success theme)'}
                    </AccordionItem>
                    <AccordionItem active={true}>
                        {hasChildren && 'A fifth item (active)'}
                    </AccordionItem>
                    <AccordionItem enabled={false}>
                        {hasChildren && 'A sixth item (disabled)'}
                    </AccordionItem>
                    <AccordionItem active={true} enabled={false}>
                        {hasChildren && 'A seventh item (active + disabled)'}
                    </AccordionItem>
                    <AccordionItem actionCtrl={true} active={true}>
                        {hasChildren && 'A eighth item (clickable + active)'}
                    </AccordionItem>
                    <AccordionItem actionCtrl={true} enabled={false}>
                        {hasChildren && 'A nineth item (clickable + disabled)'}
                    </AccordionItem>
                    <AccordionItem actionCtrl={true} active={true} enabled={false}>
                        {hasChildren && 'A tenth item (clickable + active + disabled)'}
                    </AccordionItem>
                </Accordion>
                <TypeScriptCode collapsable={false}>{`
<Accordion
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    listStyle=${listStyle.length ? ((listStyle.length === 1) ? `'${listStyle}'` : `{[${listStyle.map((ls) => `'${ls}'`).join(', ')}]}`) : '{undefined}'}
    actionCtrl={${states.actionCtrl[0]}}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <AccordionItem${                                                hasChildren ? '>\n        A first item (inherit theme)\n    </AccordionItem>'                  : ' />'}
    <AccordionItem${                                                hasChildren ? '>\n        A second item (inherit theme)\n    </AccordionItem>'                 : ' />'}
    <AccordionItem theme='danger'${                                 hasChildren ? '>\n        A third item (danger theme)\n    </AccordionItem>'                   : ' />'}
    <AccordionItem theme='success'${                                hasChildren ? '>\n        A fourth item (success theme)\n    </AccordionItem>'                 : ' />'}
    <AccordionItem active={true}${                                  hasChildren ? '>\n        A fifth item (active)\n    </AccordionItem>'                         : ' />'}
    <AccordionItem enabled={false}${                                hasChildren ? '>\n        A sixth item (disabled)\n    </AccordionItem>'                       : ' />'}
    <AccordionItem active={true} enabled={false}${                  hasChildren ? '>\n        A seventh item (active + disabled)\n    </AccordionItem>'            : ' />'}
    <AccordionItem actionCtrl={true} active={true}${                hasChildren ? '>\n        A eighth item (clickable + active)\n    </AccordionItem>'           : ' />'}
    <AccordionItem actionCtrl={true} enabled={false}${              hasChildren ? '>\n        A nineth item (clickable + disabled)\n    </AccordionItem>'         : ' />'}
    <AccordionItem actionCtrl={true} active={true} enabled={false}${hasChildren ? '>\n        A tenth item (clickable + active + disabled)\n    </AccordionItem>' : ' />'}
</Accordion>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <AccordionOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoAccordion as default }
