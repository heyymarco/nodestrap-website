import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { DropdownInitials, DropdownOptionProps, DropdownOptions, useDropdownStates } from './DemoPanel@Dropdown';

import { DropdownButton } from '@nodestrap/dropdown-button'
import { Button } from '@nodestrap/button';
import { TypeScriptCode } from './Code';



export const dropdownButtonInitials = {
};
export type DropdownButtonInitials = typeof dropdownButtonInitials & Partial<DropdownInitials>
export const useDropdownButtonStates = (initials ?: Partial<DropdownButtonInitials>) => {
    const initials2 : DropdownButtonInitials = {
        ...dropdownButtonInitials,
        ...initials
    };

    return {
        ...useDropdownStates(initials2),
    }
}
export type DropdownButtonOptionProps = { states: ReturnType<typeof useDropdownButtonStates> } & DropdownOptionProps
export const DropdownButtonOptions = (props: DropdownButtonOptionProps) => {
    // const { states } = props;
    
    
    
    return (<>
        <DropdownOptions
            {...props}
        />
    </>);
}



export const DemoDropdownButton = () => {
    const states = useDropdownButtonStates();
    
    return (
        <>
            <div className='preview'>
                <DropdownButton
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
                    <Button theme='primary' style={{ whiteSpace: 'nowrap' }}>
                        Hello world!
                    </Button>
                </DropdownButton>
                <TypeScriptCode collapsable={false}>{`
<DropdownButton
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
    <Button theme='primary' style={{ whiteSpace: 'nowrap' }}>
        Hello world!
    </Button>
</DropdownButton>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <DropdownButtonOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoDropdownButton as default }
