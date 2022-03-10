import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { DropdownInitials, DropdownOptionProps, DropdownOptions, useDropdownStates } from './DemoPanel@Dropdown';

import type { ThemeName } from '@nodestrap/basic';
import { DropdownList, ListItem, ListStyle } from '@nodestrap/dropdown-list'
import { TypeScriptCode } from './Code';



export const dropdownListInitials = {
    nude       : true,
    actionCtrl : true,
    listStyle1 : undefined as ListStyle|undefined,
    theme      : 'secondary' as ThemeName|undefined,
};
export type DropdownListInitials = typeof dropdownListInitials & Partial<DropdownInitials>
export const useDropdownListStates = (initials ?: Partial<DropdownListInitials>) => {
    const initials2 : DropdownListInitials = {
        ...dropdownListInitials,
        ...initials
    };

    return {
        ...useDropdownStates(initials2),
    }
}
export type DropdownListOptionProps = { states: ReturnType<typeof useDropdownListStates> } & DropdownOptionProps
export const DropdownListOptions = (props: DropdownListOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <DropdownOptions
            {...props}
        />
    </>);
}



export const DemoDropdownList = () => {
    const states = useDropdownListStates();
    
    return (
        <>
            <div className='preview'>
                <DropdownList
                    orientation={states.orientation[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <ListItem>
                        A first item (inherit theme)
                    </ListItem>
                    <ListItem>
                        A second item (inherit theme)
                    </ListItem>
                    <ListItem theme='danger'>
                        A third item (danger theme)
                    </ListItem>
                    <ListItem theme='success'>
                        A fourth item (success theme)
                    </ListItem>
                    <ListItem active={true}>
                        A fifth item (active)
                    </ListItem>
                    <ListItem enabled={false}>
                        A sixth item (disabled)
                    </ListItem>
                    <ListItem active={true} enabled={false}>
                        A seventh item (active + disabled)
                    </ListItem>
                    <ListItem actionCtrl={false}>
                        A eighth item (non clickable)
                    </ListItem>
                    <ListItem actionCtrl={false} active={true}>
                        A eighth item (non clickable + active)
                    </ListItem>
                    <ListItem actionCtrl={false} enabled={false}>
                        A nineth item (non clickable + disabled)
                    </ListItem>
                    <ListItem actionCtrl={false} active={true} enabled={false}>
                        A tenth item (non clickable + active + disabled)
                    </ListItem>
                </DropdownList>
                <TypeScriptCode collapsable={false}>{`
<DropdownList
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <ListItem>
        A first item (inherit theme)
    </ListItem>
    <ListItem>
        A second item (inherit theme)
    </ListItem>
    <ListItem theme='danger'>
        A third item (danger theme)
    </ListItem>
    <ListItem theme='success'>
        A fourth item (success theme)
    </ListItem>
    <ListItem active={true}>
        A fifth item (active)
    </ListItem>
    <ListItem enabled={false}>
        A sixth item (disabled)
    </ListItem>
    <ListItem active={true} enabled={false}>
        A seventh item (active + disabled)
    </ListItem>
    <ListItem actionCtrl={false}>
        A eighth item (non clickable)
    </ListItem>
    <ListItem actionCtrl={false} active={true}>
        A eighth item (non clickable + active)
    </ListItem>
    <ListItem actionCtrl={false} enabled={false}>
        A nineth item (non clickable + disabled)
    </ListItem>
    <ListItem actionCtrl={false} active={true} enabled={false}>
        A tenth item (non clickable + active + disabled)
    </ListItem>
</DropdownList>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <DropdownListOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoDropdownList as default }
