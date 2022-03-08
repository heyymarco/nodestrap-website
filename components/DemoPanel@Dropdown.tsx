import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { CollapseInitials, CollapseOptionProps, CollapseOptions, useCollapseStates } from './DemoPanel@Collapse';

import { Dropdown } from '@nodestrap/dropdown'
import { ThemeName } from '@nodestrap/basic';
import { TypeScriptCode } from './Code';



export const dropdownInitials = {
    nude     : false,
};
export type DropdownInitials = typeof dropdownInitials & Partial<CollapseInitials>
export const useDropdownStates = (initials ?: Partial<DropdownInitials>) => {
    const initials2 : DropdownInitials = {
        ...dropdownInitials,
        ...initials
    };

    return {
        ...useCollapseStates(initials2),
    }
}
export type DropdownOptionProps = { states: ReturnType<typeof useDropdownStates> } & CollapseOptionProps
export const DropdownOptions = (props: DropdownOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <CollapseOptions
            {...props}
            warningEitherMildOutlined={false}
        />
    </>);
}



export const DemoDropdown = () => {
    const states = useDropdownStates();
    
    return (
        <>
            <div className='preview'>
                <Dropdown
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
                    <p style={{ background: '#fafee2' }}>
                        Hello world!
                    </p>
                </Dropdown>
                <TypeScriptCode collapsable={false}>{`
<Dropdown
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
    <p style={{ background: '#fafee2' }}>
        Hello world!
    </p>
</Dropdown>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <DropdownOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoDropdown as default }
