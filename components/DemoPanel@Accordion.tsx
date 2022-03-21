import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { ListInitials, ListOptionProps, ListOptions, useListStates } from './DemoPanel@List';

import { Accordion, AccordionItem, ListStyleMod, OrientationName } from '@nodestrap/accordion'
import { TypeScriptCode } from './Code';
import { ParagraphLorem } from './common';



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
            enableTabStyle={false}
            enableBulletStyle={false}
        />
    </>);
}



export const DemoAccordion = () => {
    const states = useAccordionStates();
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
    const listStyle : ListStyleMod[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyleMod => !!ls);
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
                    <AccordionItem label='A first item (inherit theme)'>
                        {hasChildren && <ParagraphLorem />}
                    </AccordionItem>
                    <AccordionItem label='A second item (inherit theme)'>
                        {hasChildren && <ParagraphLorem />}
                    </AccordionItem>
                    <AccordionItem label='A third item (danger theme)' theme='danger'>
                        {hasChildren && <ParagraphLorem />}
                    </AccordionItem>
                    <AccordionItem label='A fourth item (success theme)' theme='success'>
                        {hasChildren && <ParagraphLorem />}
                    </AccordionItem>
                    <AccordionItem label='A fifth item (active)' active={true}>
                        {hasChildren && <ParagraphLorem />}
                    </AccordionItem>
                    <AccordionItem label='A sixth item (disabled)' enabled={false}>
                        {hasChildren && <ParagraphLorem />}
                    </AccordionItem>
                    <AccordionItem label='A seventh item (active + disabled)' active={true} enabled={false}>
                        {hasChildren && <ParagraphLorem />}
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
    <AccordionItem label='A first item (inherit theme)'${                                                                hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'                  : ' />'}
    <AccordionItem label='A second item (inherit theme)'${                                                               hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'                 : ' />'}
    <AccordionItem label='A third item (danger theme)' theme='danger'${                                                  hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'                   : ' />'}
    <AccordionItem label='A fourth item (success theme)' theme='success'${                                               hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'                 : ' />'}
    <AccordionItem label='A fifth item (active)' active={true}${                                                         hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'                         : ' />'}
    <AccordionItem label='A sixth item (disabled)' enabled={false}${                                                     hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'                       : ' />'}
    <AccordionItem label='A seventh item (active + disabled)' active={true} enabled={false}${                            hasChildren ? '>\n        <p>...</p>\n    </AccordionItem>'            : ' />'}
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
