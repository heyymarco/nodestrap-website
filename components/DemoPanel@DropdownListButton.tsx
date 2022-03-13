import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { DropdownButtonInitials, DropdownButtonOptionProps, useDropdownButtonStates } from './DemoPanel@DropdownButton';
import { DropdownListInitials, DropdownListOptionProps, DropdownListOptions, useDropdownListStates } from './DemoPanel@DropdownList';

import { DropdownListButton, ListItem } from '@nodestrap/dropdown-list-button'
import { Button } from '@nodestrap/button';
import { TypeScriptCode } from './Code';
import { ThemeName } from '@nodestrap/basic';



export const dropdownListButtonInitials = {
    theme    : 'primary' as ThemeName|undefined,
    active   : undefined as boolean|undefined,
};
export type DropdownListButtonInitials = typeof dropdownListButtonInitials & Partial<DropdownButtonInitials> & Partial<DropdownListInitials>
export const useDropdownListButtonStates = (initials ?: Partial<DropdownListButtonInitials>) => {
    const initials2 : DropdownListButtonInitials = {
        ...dropdownListButtonInitials,
        ...initials
    };

    return {
        ...useDropdownButtonStates(initials2),
        ...useDropdownListStates(initials2),
    }
}
export type DropdownListButtonOptionProps = { states: ReturnType<typeof useDropdownListButtonStates> } & DropdownButtonOptionProps & DropdownListOptionProps
export const DropdownListButtonOptions = (props: DropdownListButtonOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <DropdownListOptions
            {...props}
        />
    </>);
}



export const DemoDropdownListButton = () => {
    const states = useDropdownListButtonStates();
    
    return (
        <>
            <div className='preview'>
                <DropdownListButton
                    orientation={states.orientation[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                    
                    buttonChildren={<>
                        Toggle dropdown
                    </>}
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
                </DropdownListButton>
                <TypeScriptCode collapsable={false}>{`
<DropdownListButton
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
    
    buttonChildren={<>
        Toggle dropdown
    </>}
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
</DropdownListButton>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <DropdownListButtonOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoDropdownListButton as default }
